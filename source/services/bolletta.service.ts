import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

import prisma, { Prisma, Bolletta, TipoRata } from '@/services/prisma.service';

import { InternalServerError, NotFoundError } from '@/errors';
import { TableService } from './table.service';

interface TipoBollettaDetails {
    id: number;
    siglaCausale: string;
    idQuietanziante: number;
    idContoRicaviCanoni: number;
    idContoRicaviConsumi: number;
}

export class BollettaService extends TableService {
    protected readonly model: Prisma.BollettaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator = {};

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [
        'contratto',
        'contratto.tariffa',
        'contratto.tariffa.tipoOspite',
        'contratto.tariffa.utilizzoStanza',
        'contratto.tariffa.tipoTariffa',
        'contratto.tariffa.tipoFabbricato',
        'contratto.quietanziante',
        'contratto.contrattiSuOspite',
        'contratto.contrattiSuOspite.ospite',
        'contratto.contrattiSuOspite.ospite.persona',
        'contratto.contrattiSuOspite.ospite.persona.residenza',
        'contratto.contrattiSuOspite.ospite.persona.luogoDiNascita',
        'contratto.contrattiSuOspite.contrattiSuOspiteSuPostoLetto',
        'contratto.contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto',
        'contratto.contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto.stanza',
        'contratto.contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto.stanza.fabbricato',
        'tipoBolletta',
        'quietanziante',
        'contoRicaviCanoni',
        'contoRicaviConsumi'
    ];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.bolletta;
    }

    private async getTipiBolletta(
        idQuietanzianteContratto: number,
        contoRicaviCanoniContratto: number,
        contoRicaviConsumiContratto: number
    ): Promise<Record<string, TipoBollettaDetails>> {
        const result = {} as Record<string, TipoBollettaDetails>;

        for (const [tipoRata, nomeTipoBolletta] of [
            [TipoRata.DA_BANDO, 'RATA DA BANDO'],
            [TipoRata.MENSILE, 'RATA MENSILE'],
            [TipoRata.QUADRIMESTRALE, 'RATA QUADRIMESTRALE'],
            [TipoRata.UNICA, 'RATA UNICA'],
            ['CAUZIONE', 'CAUZIONE'],
            ['CHECKOUT', 'CHECKOUT']
        ]) {
            const tipoBolletta = await prisma.tipoBolletta.findUnique({
                where: { tipoBolletta: nomeTipoBolletta }
            });

            if (!tipoBolletta) {
                throw new InternalServerError(`Tipo bolletta ${nomeTipoBolletta} not found`);
            }

            result[tipoRata] = {
                id: tipoBolletta.id,
                siglaCausale: tipoBolletta.siglaCausale,
                idQuietanziante: tipoBolletta.idQuietanziante ?? idQuietanzianteContratto,
                idContoRicaviCanoni: tipoBolletta.idContoRicaviCanoni ?? contoRicaviCanoniContratto,
                idContoRicaviConsumi: tipoBolletta.idContoRicaviConsumi ?? contoRicaviConsumiContratto
            };
        }

        return result;
    }

    private calcImportoPerDays(
        price: number,
        days: number,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA',
        nOspiti: number
    ): number {
        switch (tipoTariffa) {
            case 'MENSILE':
                return (price / 30) * days * nOspiti;
            case 'GIORNALIERA':
                return price * days * nOspiti;
        }
    }
    private calcImportoPerMonth(
        price: number,
        days: number,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA',
        nOspiti: number
    ): number {
        switch (tipoTariffa) {
            case 'MENSILE':
                return price * nOspiti;
            case 'GIORNALIERA':
                return price * days * nOspiti;
        }
    }
    private utcDate(date: Date): dayjs.Dayjs {
        return dayjs(date).utc();
    }
    private resetTime(date: dayjs.Dayjs): dayjs.Dayjs {
        return date.hour(0).minute(0).second(0).millisecond(0);
    }
    // endOfMonth sets the hours to 23:59:59.999
    private lastDayOfMonth(date: dayjs.Dayjs): dayjs.Dayjs {
        return this.resetTime(date.endOf('month'));
    }

    private calcBollettaCauzione(
        cauzione: number,
        dataInizio: Date,
        nOspiti: number,
        tipiBolletta: Record<string, TipoBollettaDetails>
    ): Pick<
        Bolletta,
        | 'importoCanoni'
        | 'importoConsumi'
        | 'importoTotale'
        | 'competenzaDal'
        | 'competenzaAl'
        | 'dataScadenza'
        | 'idTipoBolletta'
        | 'idQuietanziante'
        | 'idContoRicaviCanoni'
        | 'idContoRicaviConsumi'
        | 'siglaCausale'
    > {
        const startDate = this.resetTime(this.utcDate(dataInizio));
        return {
            competenzaDal: startDate.toDate(),
            competenzaAl: this.lastDayOfMonth(startDate).toDate(),
            dataScadenza: startDate.toDate(),
            importoCanoni: nOspiti * cauzione,
            importoConsumi: null,
            importoTotale: nOspiti * cauzione,
            idTipoBolletta: tipiBolletta.CAUZIONE.id,
            idQuietanziante: tipiBolletta.CAUZIONE.idQuietanziante,
            idContoRicaviCanoni: tipiBolletta.CAUZIONE.idContoRicaviCanoni,
            idContoRicaviConsumi: tipiBolletta.CAUZIONE.idContoRicaviConsumi,
            siglaCausale: tipiBolletta.CAUZIONE.siglaCausale
        };
    }

    private calcBollettaCheckout(
        checkout: number,
        dataFine: Date,
        nOspiti: number,
        tipiBolletta: Record<string, TipoBollettaDetails>,
        dataInizio: Date // Contracts after 01/09/2021 will start having a differend dataScadenza
    ): Pick<
        Bolletta,
        | 'importoCanoni'
        | 'importoConsumi'
        | 'importoTotale'
        | 'competenzaDal'
        | 'competenzaAl'
        | 'dataScadenza'
        | 'idTipoBolletta'
        | 'idQuietanziante'
        | 'idContoRicaviCanoni'
        | 'idContoRicaviConsumi'
        | 'siglaCausale'
    > {
        const endDate = this.resetTime(this.utcDate(dataFine));
        const isNewType = +dataInizio >= +new Date('2021-09-01');
        return {
            competenzaDal: this.resetTime(endDate.startOf('month')).toDate(),
            competenzaAl: endDate.toDate(),
            dataScadenza: isNewType ? endDate.date(0).subtract(1, 'day').toDate() : endDate.toDate(),
            importoCanoni: null,
            importoConsumi: nOspiti * checkout,
            importoTotale: nOspiti * checkout,
            idTipoBolletta: tipiBolletta.CHECKOUT.id,
            idQuietanziante: tipiBolletta.CHECKOUT.idQuietanziante,
            idContoRicaviCanoni: tipiBolletta.CHECKOUT.idContoRicaviCanoni,
            idContoRicaviConsumi: tipiBolletta.CHECKOUT.idContoRicaviConsumi,
            siglaCausale: tipiBolletta.CHECKOUT.siglaCausale
        };
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
        nOspiti: number,
        tipiBolletta: Record<string, { id: number; idQuietanziante: number }>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            | 'importoCanoni'
            | 'importoConsumi'
            | 'competenzaDal'
            | 'competenzaAl'
            | 'dataScadenza'
            | 'idTipoBolletta'
            | 'idQuietanziante'
        >[] = [];

        // Get start and end date
        const startDate = this.resetTime(this.utcDate(dataInizio));
        const endDate = this.resetTime(this.utcDate(dataFine));

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === this.lastDayOfMonth(endDate).date();

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            const days = endDate.diff(startDate, 'days') + 1;
            bollette.push({
                importoCanoni:
                    // if it is a whole month, calculate as month, otherwise calculate as days
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(canone, endDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti),
                importoConsumi:
                    // if it is a whole month, calculate as month, otherwise calculate as days
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(consumi, endDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti),
                competenzaDal: startDate.toDate(),
                competenzaAl: endDate.toDate(),
                dataScadenza: startDate.date() > 5 ? startDate.toDate() : startDate.date(5).toDate(),
                idTipoBolletta: tipiBolletta[TipoRata.MENSILE].id,
                idQuietanziante: tipiBolletta[TipoRata.MENSILE].idQuietanziante
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone();
            let endOfCurrentMonth = this.lastDayOfMonth(currentDate);
            let days: number;

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endOfCurrentMonth.diff(currentDate, 'days') + 1;
                bollette.push({
                    importoCanoni: this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti),
                    importoConsumi: this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti),
                    competenzaDal: currentDate.toDate(),
                    competenzaAl: endOfCurrentMonth.toDate(),
                    dataScadenza: startDate.date() > 5 ? startDate.toDate() : currentDate.date(5).toDate(),
                    idTipoBolletta: tipiBolletta[TipoRata.MENSILE].id,
                    idQuietanziante: tipiBolletta[TipoRata.MENSILE].idQuietanziante
                });
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : this.lastDayOfMonth(currentDate).add(1, 'day').date(1);
                currentDate.year() < endDate.year() ||
                (currentDate.year() === endDate.year() &&
                    ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                        currentDate.month() < endDate.month()));
                currentDate = this.lastDayOfMonth(currentDate).add(1, 'day').date(1)
            ) {
                endOfCurrentMonth = this.lastDayOfMonth(currentDate);
                bollette.push({
                    importoCanoni: this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa, nOspiti),
                    importoConsumi: this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa, nOspiti),
                    competenzaDal: currentDate.toDate(),
                    competenzaAl: endOfCurrentMonth.toDate(),
                    dataScadenza: currentDate.date(5).toDate(),
                    idTipoBolletta: tipiBolletta[TipoRata.MENSILE].id,
                    idQuietanziante: tipiBolletta[TipoRata.MENSILE].idQuietanziante
                });
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                endOfCurrentMonth = this.lastDayOfMonth(currentDate);
                days = endDate.diff(currentDate, 'days') + 1;
                bollette.push({
                    importoCanoni: this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti),
                    importoConsumi: this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti),
                    competenzaDal: currentDate.toDate(),
                    competenzaAl: endDate.toDate(),
                    dataScadenza: currentDate.date(5).toDate(),
                    idTipoBolletta: tipiBolletta[TipoRata.MENSILE].id,
                    idQuietanziante: tipiBolletta[TipoRata.MENSILE].idQuietanziante
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
        nOspiti: number,
        tipiBolletta: Record<string, { id: number; idQuietanziante: number }>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            | 'importoCanoni'
            | 'importoConsumi'
            | 'competenzaDal'
            | 'competenzaAl'
            | 'dataScadenza'
            | 'idTipoBolletta'
            | 'idQuietanziante'
        >[] = [];

        const startDate = this.resetTime(this.utcDate(dataInizio));
        const endDate = this.resetTime(this.utcDate(dataFine));

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === this.lastDayOfMonth(endDate).date();

        let days = 0,
            importoCanoni = 0,
            importoConsumi = 0;

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            days = endDate.diff(startDate, 'days') + 1;
            importoCanoni += beginsWithTotalMonth
                ? this.calcImportoPerMonth(canone, startDate.daysInMonth(), tipoTariffa, nOspiti)
                : this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
            importoConsumi += beginsWithTotalMonth
                ? this.calcImportoPerMonth(consumi, startDate.daysInMonth(), tipoTariffa, nOspiti)
                : this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);

            bollette.push({
                importoCanoni,
                importoConsumi,
                competenzaDal: startDate.toDate(),
                competenzaAl: endDate.toDate(),
                dataScadenza:
                    // If there is only one month that starts after the 5th, the scadenza is the same date
                    startDate.isSame(endDate, 'months') && startDate.date() > 5
                        ? startDate.toDate()
                        : startDate.date(5).toDate(),
                idTipoBolletta: tipiBolletta[TipoRata.UNICA].id,
                idQuietanziante: tipiBolletta[TipoRata.UNICA].idQuietanziante
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone(),
                competenzaDal: dayjs.Dayjs | null = null;
            let endOfCurrentMonth = this.lastDayOfMonth(currentDate);

            const addBolletta = (last = false) => {
                if (importoCanoni > 0 && importoConsumi > 0) {
                    if (last || currentDate.month() === 11) {
                        bollette.push({
                            importoCanoni: importoCanoni,
                            importoConsumi: importoConsumi,
                            competenzaDal: competenzaDal?.toDate() ?? currentDate.toDate(),
                            competenzaAl: endOfCurrentMonth.toDate(),
                            dataScadenza:
                                currentDate.month() === endDate.month() && currentDate.date() < 5
                                    ? currentDate.toDate()
                                    : currentDate.date(5).toDate(),
                            idTipoBolletta: tipiBolletta[TipoRata.UNICA].id,
                            idQuietanziante: tipiBolletta[TipoRata.UNICA].idQuietanziante
                        });
                        importoCanoni = 0;
                        importoConsumi = 0;
                        competenzaDal = null;
                    } else if (competenzaDal === null) {
                        competenzaDal = currentDate.clone();
                    }
                }
            };

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endOfCurrentMonth.diff(startDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                addBolletta();
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : this.lastDayOfMonth(currentDate).add(1, 'day').date(1);
                currentDate.year() < endDate.year() ||
                (currentDate.year() === endDate.year() &&
                    ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                        currentDate.month() < endDate.month()));
                currentDate = this.lastDayOfMonth(currentDate).add(1, 'day').date(1)
            ) {
                endOfCurrentMonth = this.lastDayOfMonth(currentDate);
                importoCanoni += this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                addBolletta();
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                days = endDate.diff(currentDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                // trick to set right competenzaAl on the last bolletta
                endOfCurrentMonth = endDate;
                addBolletta();
            }
            // If the last bolletta was not added because of its month
            addBolletta(true);
        }

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
        nOspiti: number,
        tipiBolletta: Record<string, { id: number; idQuietanziante: number }>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            | 'importoCanoni'
            | 'importoConsumi'
            | 'competenzaDal'
            | 'competenzaAl'
            | 'dataScadenza'
            | 'idTipoBolletta'
            | 'idQuietanziante'
        >[] = [];

        const startDate = this.resetTime(this.utcDate(dataInizio));
        const endDate = this.resetTime(this.utcDate(dataFine));

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === this.lastDayOfMonth(endDate).date();

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            const days = endDate.diff(startDate, 'days') + 1;
            bollette.push({
                importoCanoni:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(canone, startDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti),
                importoConsumi:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(consumi, startDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti),
                competenzaDal: startDate.toDate(),
                competenzaAl: endDate.toDate(),
                dataScadenza: this.lastDayOfMonth(startDate).toDate(),
                idTipoBolletta: tipiBolletta[TipoRata.DA_BANDO].id,
                idQuietanziante: tipiBolletta[TipoRata.DA_BANDO].idQuietanziante
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone(),
                competenzaDal: dayjs.Dayjs | null = null;
            let endOfCurrentMonth = this.lastDayOfMonth(currentDate);
            let days: number,
                importoCanoni = 0,
                importoConsumi = 0;

            const addBolletta = (last = false) => {
                if (importoCanoni > 0 && importoConsumi > 0) {
                    if (last || ![6, 8, 9, 10].includes(currentDate.month())) {
                        bollette.push({
                            importoCanoni: importoCanoni,
                            importoConsumi: importoConsumi,
                            competenzaDal: competenzaDal?.toDate() ?? currentDate.toDate(),
                            competenzaAl: endOfCurrentMonth.toDate(),
                            dataScadenza: this.lastDayOfMonth(currentDate).toDate(),
                            idTipoBolletta: tipiBolletta[TipoRata.DA_BANDO].id,
                            idQuietanziante: tipiBolletta[TipoRata.DA_BANDO].idQuietanziante
                        });
                        importoCanoni = 0;
                        importoConsumi = 0;
                        competenzaDal = null;
                    } else if (competenzaDal === null) {
                        competenzaDal = currentDate.clone();
                    }
                }
            };

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endOfCurrentMonth.diff(startDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                addBolletta();
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : this.lastDayOfMonth(currentDate).add(1, 'day').date(1);
                currentDate.year() < endDate.year() ||
                (currentDate.year() === endDate.year() &&
                    ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                        currentDate.month() < endDate.month()));
                currentDate = this.lastDayOfMonth(currentDate).add(1, 'day').date(1)
            ) {
                endOfCurrentMonth = this.lastDayOfMonth(currentDate);
                importoCanoni += this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                addBolletta();
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                days = endDate.diff(currentDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                // trick to set right competenzaAl on the last bolletta
                endOfCurrentMonth = endDate;
                addBolletta();
            }
            // If the last bolletta was not added because of its month
            addBolletta(true);
        }

        return bollette;
    }

    /*
        Ogni quattro mesi una bolletta. Se i quattro mesi sono a cavallo di
        Se il contratto non inizia il primo del mese o non finisce l'ultimo del mese, i giorni aggiuntivi 
        vengono aggiunti facendo prezzo / 30.
        Scade il 5 del mese stesso (pagamento anticipato); se il primo mese inizia dopo il 5, scade il giorno stesso di inizio.
    */
    private calcBolletteRataQuadrimestrale(
        dataInizio: Date,
        dataFine: Date,
        canone: number,
        consumi: number,
        nOspiti: number,
        tipiBolletta: Record<string, { id: number; idQuietanziante: number }>,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA'
    ) {
        const bollette: Pick<
            Bolletta,
            | 'importoCanoni'
            | 'importoConsumi'
            | 'competenzaDal'
            | 'competenzaAl'
            | 'dataScadenza'
            | 'idTipoBolletta'
            | 'idQuietanziante'
        >[] = [];

        const startDate = this.resetTime(this.utcDate(dataInizio));
        const endDate = this.resetTime(this.utcDate(dataFine));

        // check if first and last month is total
        const beginsWithTotalMonth = startDate.date() === 1;
        const endsWithTotalMonth = endDate.date() === this.lastDayOfMonth(endDate).date();

        // If the contract starts and finishes in the same month
        if (startDate.isSame(endDate, 'months')) {
            // difference in days between end date and start date
            const days = endDate.diff(startDate, 'days') + 1;
            bollette.push({
                importoCanoni:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(canone, startDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti),
                importoConsumi:
                    beginsWithTotalMonth && endsWithTotalMonth
                        ? this.calcImportoPerMonth(consumi, startDate.daysInMonth(), tipoTariffa, nOspiti)
                        : this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti),
                competenzaDal: startDate.toDate(),
                competenzaAl: endDate.toDate(),
                dataScadenza: startDate.date() > 5 ? startDate.toDate() : startDate.date(5).toDate(),
                idTipoBolletta: tipiBolletta[TipoRata.QUADRIMESTRALE].id,
                idQuietanziante: tipiBolletta[TipoRata.QUADRIMESTRALE].idQuietanziante
            });
        }
        // Otherwise
        else {
            let currentDate = startDate.clone(),
                competenzaDal: dayjs.Dayjs | null = null;
            let endOfCurrentMonth = this.lastDayOfMonth(currentDate);
            let days: number,
                importoCanoni = 0,
                importoConsumi = 0,
                monthCount = 0;

            const addBolletta = (last = false) => {
                monthCount++;
                if (importoCanoni > 0 && importoConsumi > 0) {
                    if (last || currentDate.month() === 11 || monthCount === 4) {
                        bollette.push({
                            importoCanoni: importoCanoni,
                            importoConsumi: importoConsumi,
                            competenzaDal: competenzaDal?.toDate() ?? currentDate.toDate(),
                            competenzaAl: endOfCurrentMonth.toDate(),
                            dataScadenza: (competenzaDal ?? currentDate).date(5).toDate(),
                            idTipoBolletta: tipiBolletta[TipoRata.QUADRIMESTRALE].id,
                            idQuietanziante: tipiBolletta[TipoRata.QUADRIMESTRALE].idQuietanziante
                        });
                        importoCanoni = 0;
                        importoConsumi = 0;
                        monthCount = 0;
                        competenzaDal = null;
                    } else if (competenzaDal === null) {
                        competenzaDal = currentDate.clone();
                    }
                }
            };

            // first month (difference between endOfMonth and beginDate)
            if (!beginsWithTotalMonth) {
                days = endOfCurrentMonth.diff(startDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                addBolletta();
            }
            // middle months (whole month)
            for (
                currentDate = beginsWithTotalMonth
                    ? currentDate
                    : this.lastDayOfMonth(currentDate).add(1, 'day').date(1);
                currentDate.year() < endDate.year() ||
                (currentDate.year() === endDate.year() &&
                    ((endsWithTotalMonth && currentDate.month() === endDate.month()) ||
                        currentDate.month() < endDate.month()));
                currentDate = this.lastDayOfMonth(currentDate).add(1, 'day').date(1)
            ) {
                endOfCurrentMonth = this.lastDayOfMonth(currentDate);
                importoCanoni += this.calcImportoPerMonth(canone, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerMonth(consumi, currentDate.daysInMonth(), tipoTariffa, nOspiti);
                addBolletta();
            }
            // last month (difference between endDate and currentDate)
            if (!endsWithTotalMonth) {
                days = endDate.diff(currentDate, 'days') + 1;
                importoCanoni += this.calcImportoPerDays(canone, days, tipoTariffa, nOspiti);
                importoConsumi += this.calcImportoPerDays(consumi, days, tipoTariffa, nOspiti);
                // trick to set right competenzaAl on the last bolletta
                endOfCurrentMonth = endDate;
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
        cauzione: number | null,
        checkout: number | null,
        canone: number,
        consumi: number,
        nOspiti: number,
        idContoRicaviCanoni: number,
        idContoRicaviConsumi: number,
        centroDiCosto: string,
        tipoTariffa: 'MENSILE' | 'GIORNALIERA',
        siglaTipoContratto: string,
        idContratto: number,
        idOspite: number | null,
        idQuietanzianteContratto: number
    ) {
        const result: Omit<Bolletta, 'id' | 'idBollettaStornata' | 'dataInvioEusis' | 'dataRegistrazione'>[] = [];
        const bollette: Pick<
            Bolletta,
            | 'importoCanoni'
            | 'importoConsumi'
            | 'competenzaDal'
            | 'competenzaAl'
            | 'dataScadenza'
            | 'idTipoBolletta'
            | 'idQuietanziante'
        >[] = [];

        const tipiBolletta = await this.getTipiBolletta(
            idQuietanzianteContratto,
            idContoRicaviCanoni,
            idContoRicaviConsumi
        );

        if (cauzione) {
            const bollettaCauzione = this.calcBollettaCauzione(cauzione, dataInizio, nOspiti, tipiBolletta);
            result.push({
                idContratto,
                idOspite,
                siglaTipoContratto,
                centroDiCosto: null,
                ...bollettaCauzione
            });
        }

        switch (tipoRata) {
            case 'MENSILE':
                bollette.push(
                    ...this.calcBolletteRataMensile(
                        dataInizio,
                        dataFine,
                        canone,
                        consumi,
                        nOspiti,
                        tipiBolletta,
                        tipoTariffa
                    )
                );
                break;

            case 'UNICA':
                bollette.push(
                    ...this.calcBolletteRataUnica(
                        dataInizio,
                        dataFine,
                        canone,
                        consumi,
                        nOspiti,
                        tipiBolletta,
                        tipoTariffa
                    )
                );
                break;
            case 'DA_BANDO':
                bollette.push(
                    ...this.calcBolletteRataDaBando(
                        dataInizio,
                        dataFine,
                        canone,
                        consumi,
                        nOspiti,
                        tipiBolletta,
                        tipoTariffa
                    )
                );
                break;

            case 'QUADRIMESTRALE':
                bollette.push(
                    ...this.calcBolletteRataQuadrimestrale(
                        dataInizio,
                        dataFine,
                        canone,
                        consumi,
                        nOspiti,
                        tipiBolletta,
                        tipoTariffa
                    )
                );
                break;
        }

        result.push(
            ...bollette.map(bolletta => ({
                idContratto,
                idOspite,
                siglaTipoContratto,
                siglaCausale: 'B',
                importoTotale: (bolletta.importoCanoni as number) + (bolletta.importoConsumi as number),
                centroDiCosto,
                idContoRicaviCanoni,
                idContoRicaviConsumi,
                ...bolletta
            }))
        );

        if (checkout) {
            const bollettaCheckout = this.calcBollettaCheckout(checkout, dataFine, nOspiti, tipiBolletta, dataInizio);
            result.push({
                idContratto,
                idOspite,
                siglaTipoContratto,
                centroDiCosto,
                ...bollettaCheckout
            });
        }

        return result;
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
