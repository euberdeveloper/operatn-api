import * as dayjs from 'dayjs';
import prisma, { Prisma, Bolletta, TipoRata } from '@/services/prisma.service';

import { InternalServerError, NotFoundError } from '@/errors';
import { TableService } from './table.service';

export class BollettaService extends TableService {
    protected readonly model: Prisma.BollettaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator = {};

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = ['contratto', 'tipoBolletta'];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.bolletta;
    }

    private async getTipiBollettaRata(): Promise<Record<string, number>> {
        const result = {} as Record<string, number>;

        for (const [tipoRata, nomeTipoBolletta] of [
            [TipoRata.DA_BANDO, 'RATA DA BANDO'],
            [TipoRata.MENSILE, 'RATA MENSILE'],
            [TipoRata.UNICA, 'RATA UNICA']
        ]) {
            const tipoBolletta = await prisma.tipoBolletta.findUnique({
                where: { tipoBolletta: nomeTipoBolletta },
                select: { id: true }
            });

            if (!tipoBolletta) {
                throw new InternalServerError(`Tipo bolletta ${nomeTipoBolletta} not found`);
            }

            result[tipoRata] = tipoBolletta.id;
        }

        return result;
    }

    private calcImportoPerDays(price: number, days: number, tipoTariffa: 'MENSILE' | 'GIORNALIERA'): number {
        switch (tipoTariffa) {
            case 'MENSILE':
                return (price / 30) * days;
            case 'GIORNALIERA':
                return price * days;
        }
    }
    private calcImportoPerMonth(price: number, days: number, tipoTariffa: 'MENSILE' | 'GIORNALIERA'): number {
        switch (tipoTariffa) {
            case 'MENSILE':
                return price;
            case 'GIORNALIERA':
                return price * days;
        }
    }

    /*
        Ogni mese una bolletta. 
        Se il contratto non inizia il primo del mese o non finisce l'ultimo del mese, i giorni aggiuntivi 
        vengono aggiunti facendo prezzo / 30.
        Scade il 5 del mese stesso (pagamento anticipato); se il primo mese inizia dopo il 5, scade il giorno stesso di inizio.
    */
    private calcBolletteRataMensile(
        dataInizio: Date,
        dataFine: Date,
        canone: number,
        consumi: number,
        tipiBollettaRata: Record<string, number>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            'importoCanoni' | 'importoConsumi' | 'competenzaDal' | 'competanzaAl' | 'dataScadenza' | 'idTipoBolletta'
        >[] = [];

        // Get start and end date
        const startDate = dayjs(dataInizio);
        const endDate = dayjs(dataFine);

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === endDate.endOf('month').date();

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            const days = endDate.diff(startDate, 'days') + 1;
            bollette.push({
                importoCanoni:
                    // if it is a whole month, calculate as month, otherwise calculate as days
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(canone, endDate.daysInMonth(), tipoTariffa)
                        : this.calcImportoPerDays(canone, days, tipoTariffa),
                importoConsumi:
                    // if it is a whole month, calculate as month, otherwise calculate as days
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(consumi, endDate.daysInMonth(), tipoTariffa)
                        : this.calcImportoPerDays(consumi, days, tipoTariffa),
                competenzaDal: startDate.toDate(),
                competanzaAl: endDate.toDate(),
                dataScadenza: startDate.date() < 5 ? startDate.toDate() : startDate.set('date', 5).toDate(),
                idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone();
            let endOfCurrentMonth = currentDate.endOf('month');
            let days: number;

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endOfCurrentMonth.diff(currentDate, 'days') + 1;
                bollette.push({
                    importoCanoni: this.calcImportoPerDays(canone, days, tipoTariffa),
                    importoConsumi: this.calcImportoPerDays(consumi, days, tipoTariffa),
                    competenzaDal: currentDate.toDate(),
                    competanzaAl: endOfCurrentMonth.toDate(),
                    dataScadenza: startDate.date() < 5 ? startDate.toDate() : currentDate.set('date', 5).toDate(),
                    idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
                });
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : currentDate.endOf('month').add(1, 'day').set('date', 1);
                currentDate.year() <= endDate.year() &&
                ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                    currentDate.month() < endDate.month());
                currentDate = currentDate.endOf('month').add(1, 'day').set('date', 1)
            ) {
                endOfCurrentMonth = currentDate.endOf('month');
                bollette.push({
                    importoCanoni: this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa),
                    importoConsumi: this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa),
                    competenzaDal: currentDate.toDate(),
                    competanzaAl: endOfCurrentMonth.toDate(),
                    dataScadenza: currentDate.set('date', 5).toDate(),
                    idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
                });
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                endOfCurrentMonth = currentDate.endOf('month');
                days = endDate.diff(currentDate, 'days') + 1;
                bollette.push({
                    importoCanoni: this.calcImportoPerDays(canone, days, tipoTariffa),
                    importoConsumi: this.calcImportoPerDays(consumi, days, tipoTariffa),
                    competenzaDal: currentDate.toDate(),
                    competanzaAl: endDate.toDate(),
                    dataScadenza: currentDate.set('date', 5).toDate(),
                    idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
                });
            }
        }

        return bollette;
    }

    /*
        Una rata sola.
        Se il contratto non inizia il primo del mese e non finisce nel'ultimo di un mese, i giorni aggiuntivi
        vengono aggiunti facendo prezzo / 30
        Scade il 5 del mese stesso (pagamento anticipato); se il primo mese inizia dopo il 5, scade il giorno stesso di inizio.
    */
    private calcBolletteRataUnica(
        dataInizio: Date,
        dataFine: Date,
        canone: number,
        consumi: number,
        tipiBollettaRata: Record<string, number>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            'importoCanoni' | 'importoConsumi' | 'competenzaDal' | 'competanzaAl' | 'dataScadenza' | 'idTipoBolletta'
        >[] = [];

        const startDate = dayjs(dataInizio);
        const endDate = dayjs(dataFine);

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === endDate.endOf('month').date();

        let days = 0;

        let importoCanoni = 0,
            importoConsumi = 0;

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            days = endDate.diff(startDate, 'days') + 1;
            importoCanoni += beginsWithTotalMonth
                ? this.calcImportoPerMonth(canone, startDate.daysInMonth(), tipoTariffa)
                : this.calcImportoPerDays(canone, days, tipoTariffa);
            importoConsumi += beginsWithTotalMonth
                ? this.calcImportoPerMonth(consumi, startDate.daysInMonth(), tipoTariffa)
                : this.calcImportoPerDays(consumi, days, tipoTariffa);
        }
        // Otherwise
        else {
            let currentDate = startDate.clone();
            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endDate.diff(startDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa);
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : currentDate.endOf('month').add(1, 'day').set('date', 1);
                currentDate.year() <= endDate.year() &&
                ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                    currentDate.month() < endDate.month());
                currentDate = currentDate.endOf('month').add(1, 'day').set('date', 1)
            ) {
                importoCanoni += this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa);
                importoConsumi += this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa);
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                days = endDate.diff(currentDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa);
            }
        }

        bollette.push({
            importoCanoni,
            importoConsumi,
            competenzaDal: startDate.toDate(),
            competanzaAl: endDate.toDate(),
            dataScadenza:
                // If there is only one month that starts after the 5th, the scadenza is the same date
                startDate.isSame(endDate, 'months') && endDate.date() < 5
                    ? endDate.toDate()
                    : endDate.startOf('month').set('date', 5).toDate(),
            idTipoBolletta: tipiBollettaRata[TipoRata.UNICA]
        });

        return bollette;
    }

    /*
        Uguale a quella mensile, solo che luglio-agosto e settembre-dicembre vengono fuse assieme.
        Se il contratto non inizia il primo del mese e non finisce nel'ultimo di un mese, i giorni aggiuntivi
        vengono aggiunti facendo prezzo / 30
        Scade a fine mese.
    */
    private calcBolletteRataDaBando(
        dataInizio: Date,
        dataFine: Date,
        canone: number,
        consumi: number,
        tipiBollettaRata: Record<string, number>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            'importoCanoni' | 'importoConsumi' | 'competenzaDal' | 'competanzaAl' | 'dataScadenza' | 'idTipoBolletta'
        >[] = [];

        const startDate = dayjs(dataInizio);
        const endDate = dayjs(dataFine);

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === endDate.endOf('month').date();

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            const days = endDate.diff(startDate, 'days') + 1;
            bollette.push({
                importoCanoni:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(canone, startDate.daysInMonth(), tipoTariffa)
                        : this.calcImportoPerDays(canone, days, tipoTariffa),
                importoConsumi:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(consumi, startDate.daysInMonth(), tipoTariffa)
                        : this.calcImportoPerDays(consumi, days, tipoTariffa),
                competenzaDal: startDate.toDate(),
                competanzaAl: endDate.toDate(),
                dataScadenza: startDate.date() < 5 ? startDate.toDate() : startDate.set('date', 5).toDate(),
                idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone();
            let endOfCurrentMonth = currentDate.endOf('month');
            let days: number,
                importoCanoni = 0,
                importoConsumi = 0;

            const addBolletta = (last = false) => {
                if (last && importoCanoni > 0 && importoConsumi > 0 && ![7, 9, 10, 11].includes(currentDate.month())) {
                    bollette.push({
                        importoCanoni: importoCanoni,
                        importoConsumi: importoConsumi,
                        competenzaDal: currentDate.toDate(),
                        competanzaAl: endOfCurrentMonth.toDate(),
                        dataScadenza: startDate.endOf('month').add(1, 'day').endOf('month').toDate(),
                        idTipoBolletta: tipiBollettaRata[TipoRata.MENSILE]
                    });
                    importoCanoni = 0;
                    importoConsumi = 0;
                }
            };

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endDate.diff(startDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa);
                addBolletta();
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : currentDate.endOf('month').add(1, 'day').set('date', 1);
                currentDate.year() <= endDate.year() &&
                ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                    currentDate.month() < endDate.month());
                currentDate = currentDate.endOf('month').add(1, 'day').set('date', 1)
            ) {
                endOfCurrentMonth = currentDate.endOf('month');
                importoCanoni = this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa);
                importoConsumi = this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa);
                addBolletta();
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                days = endDate.diff(currentDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa);
                addBolletta();
            }
            // If the last bolletta was not added because of its month
            addBolletta(true);
        }

        return bollette;
    }

    public async calcBollette(
        tipoRata: TipoRata,
        dataInizio: Date,
        dataFine: Date,
        canone: number,
        consumi: number,
        contoRicaviCanoni: string,
        contoRicaviConsumi: string,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA',
        idContratto: number
    ) {
        let bollette: Pick<
            Bolletta,
            'importoCanoni' | 'importoConsumi' | 'competenzaDal' | 'competanzaAl' | 'dataScadenza' | 'idTipoBolletta'
        >[] = [];

        const tipiBollettaRata = await this.getTipiBollettaRata();

        switch (tipoRata) {
            case 'MENSILE':
                bollette = this.calcBolletteRataMensile(
                    dataInizio,
                    dataFine,
                    canone,
                    consumi,
                    tipiBollettaRata,
                    tipoTariffa
                );
                break;

            case 'UNICA':
                bollette = this.calcBolletteRataUnica(
                    dataInizio,
                    dataFine,
                    canone,
                    consumi,
                    tipiBollettaRata,
                    tipoTariffa
                );
                break;
            case 'DA_BANDO':
                bollette = this.calcBolletteRataDaBando(
                    dataInizio,
                    dataFine,
                    canone,
                    consumi,
                    tipiBollettaRata,
                    tipoTariffa
                );
                break;
        }

        console.log(JSON.stringify(bollette, null, 4));

        return bollette.map((bolletta, i) => ({
            idContratto,
            numero: i + 1,
            importoTotale: (bolletta.importoCanoni as number) + (bolletta.importoConsumi as number),
            centroDiCosto: '999999999',
            contoRicaviCanoni,
            contoRicaviConsumi,
            ...bolletta
        }));
    }

    public async getBollette(cid: number, queryParams: any): Promise<Bolletta[]> {
        this.validateId(cid, 'cid');
        const include = this.parseIncludeQueryParameters(queryParams);
        return this.model.findMany({ where: { idContratto: cid }, include });
    }

    public async getBollettaById(cid: number, id: number, queryParams: any): Promise<Bolletta> {
        this.validateId(cid, 'cid');
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams);

        const bolletta = await this.model.findFirst({ where: { id, idContratto: cid }, include });
        if (bolletta === null) {
            throw new NotFoundError('Bolletta not found');
        }
        return bolletta;
    }
}

export default new BollettaService();
