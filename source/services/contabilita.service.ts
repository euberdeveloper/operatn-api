/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import * as asciify from '@euberdeveloper/asciify';
import emitter from '@/subscribers';

import prisma, {
    Bolletta,
    Quietanziante,
    TipoBolletta,
    ContoRicavi,
    Contratto,
    LuogoDiNascita,
    Ospite,
    Persona,
    Residenza
} from '@/services/prisma.service';
import { ContabilitaError, InvalidQueryParamError } from '@/errors';
import logger from '@/utils/logger';
import CONFIG from '@/config';

type OspiteInfo = Ospite & {
    persona: Persona & {
        luogoDiNascita: LuogoDiNascita | null;
        residenza: Residenza | null;
    };
};

export type BollettaInfo = Bolletta & {
    contratto: Contratto;
    quietanziante: Quietanziante;
    ospite: OspiteInfo | null;
    tipoBolletta: TipoBolletta;
    contoRicaviCanoni: ContoRicavi | null;
    contoRicaviConsumi: ContoRicavi | null;
};

interface PageParams {
    skip?: number;
    take?: number;
}

function purge(value: any): string {
    return value ? asciify.traduce(value) : '';
}

export class ContabilitaService {
    private async fetchBollette(
        start: Date,
        end: Date,
        idTipoOspite?: number,
        idOspite?: number,
        siglaCausale?: string,
        pageValues: PageParams = {}
    ): Promise<BollettaInfo[]> {
        return prisma.bolletta.findMany({
            where: {
                dataInvioEusis: null,
                NOT: {
                    OR: [{ dataScadenza: { lte: start } }, { dataScadenza: { gte: end } }]
                },
                idOspite,
                siglaCausale,
                contratto:
                    idTipoOspite !== undefined
                        ? {
                              tariffa: {
                                  idTipoOspite
                              }
                          }
                        : undefined
            },
            include: {
                contratto: true,
                quietanziante: true,
                ospite: {
                    include: {
                        persona: {
                            include: {
                                luogoDiNascita: true,
                                residenza: true
                            }
                        }
                    }
                },
                tipoBolletta: true,
                contoRicaviCanoni: true,
                contoRicaviConsumi: true
            },
            ...pageValues
        });
    }

    private async countBollette(
        start: Date,
        end: Date,
        idTipoOspite?: number,
        idOspite?: number,
        siglaCausale?: string
    ): Promise<number> {
        return prisma.bolletta.count({
            where: {
                dataInvioEusis: null,
                NOT: {
                    OR: [{ dataScadenza: { lte: start } }, { dataScadenza: { gte: end } }]
                },
                idOspite,
                siglaCausale,
                contratto:
                    idTipoOspite !== undefined
                        ? {
                              tariffa: {
                                  idTipoOspite
                              }
                          }
                        : undefined
            }
        });
    }

    private getAnagraficaData(bolletta: BollettaInfo) {
        const quietanziante = bolletta.quietanziante;
        const ospite = bolletta.ospite;
        const residenza = ospite?.persona.residenza;

        const denominazione =
            quietanziante.denominazione ?? (ospite ? ospite.persona.cognome + ' ' + ospite.persona.nome : '');
        const sesso = quietanziante.sesso ?? (ospite?.persona.sesso === 'MASCHIO' ? 'M' : 'F');
        const dataNascita = quietanziante.dataNascita ?? ospite?.persona.dataDiNascita;
        const comuneNascita =
            quietanziante.comuneNascita ??
            ospite?.persona.luogoDiNascita?.comune ??
            ospite?.persona.luogoDiNascita?.stato ??
            '';
        const citta = quietanziante.citta ?? residenza?.comune ?? residenza?.stato ?? '';
        const cap = quietanziante.cap ?? residenza?.cap ?? '11111';
        const indirizzo = quietanziante.indirizzo ?? (residenza ? `${residenza.indirizzo} ${residenza.nCivico}` : '');
        const codiceFiscale = quietanziante.codiceFiscale ?? ospite?.persona.codiceFiscale ?? '';
        const siglaProvincia = quietanziante.siglaProvincia ?? residenza?.provincia ?? 'EE';
        const numeroTelefono = quietanziante.numeroTelefono ?? ospite?.telefonoPrincipale ?? '';
        const email = quietanziante.email ?? ospite?.email ?? '';

        return {
            denominazione,
            sesso,
            dataNascita: dataNascita ? dataNascita.toISOString().slice(0, 10) : '',
            comuneNascita,
            citta,
            siglaProvincia,
            cap,
            indirizzo,
            codiceFiscale,
            numeroTelefono,
            email
        };
    }

    private getXmlTestata(bolletta: BollettaInfo): string {
        const currDate = new Date();
        const year = currDate.getFullYear();
        const month = currDate.getMonth() + 1;
        const dateStr = `${year}-${month}-${currDate.getDay()}`;

        const idBolletta = bolletta.id;
        const idContratto = bolletta.idContratto;
        const siglaTipoContratto = bolletta.siglaTipoContratto;
        const siglaCausale = bolletta.siglaCausale;
        const codSerie = bolletta.competenzaAl.getFullYear();
        const importo = bolletta.importoTotale;
        const anagrafica = this.getAnagraficaData(bolletta);

        return `
        <tem:testata>
            <tem:istituto>1</tem:istituto>
            <tem:subtserie>0</tem:subtserie>
            <tem:codserie>${codSerie}</tem:codserie>
            <tem:coddoc>3001</tem:coddoc>
            <tem:tipodoc>D</tem:tipodoc>
            <tem:codcont>CO</tem:codcont>
            <tem:clascont>GE</tem:clascont>
            <tem:datacar>${dateStr}</tem:datacar>
            <tem:sezionale>101</tem:sezionale>
            <tem:codpag>8</tem:codpag>
            <tem:cliente></tem:cliente>
            <tem:numdoc>${idBolletta}</tem:numdoc>
            <tem:datadoc>${dateStr}</tem:datadoc>
            <tem:denomin>${purge(anagrafica.denominazione)}</tem:denomin>
            <tem:indirizzo>${purge(anagrafica.indirizzo)}</tem:indirizzo>
            <tem:cap>${purge(anagrafica.cap)}</tem:cap>
            <tem:citta>${purge(anagrafica.citta)}</tem:citta>
            <tem:prov>${purge(anagrafica.siglaProvincia)}</tem:prov>
            <tem:codfisc>${purge(anagrafica.codiceFiscale)}</tem:codfisc>
            <tem:impbollo>0</tem:impbollo>
            <tem:totale>${importo}</tem:totale>
            <tem:stato>2</tem:stato>
            <tem:fl_postel>S</tem:fl_postel>
            <tem:ufficio>1</tem:ufficio>
            <tem:distretto>0</tem:distretto>
            <tem:causale>B${siglaCausale}</tem:causale>
            <tem:descr>${siglaTipoContratto} - ${siglaCausale} - ${year}/${idContratto} RIFER.MESE: ${month} - ANNO: ${year}</tem:descr>
            <tem:numdoc_def>B-${idBolletta}</tem:numdoc_def>
        </tem:testata>  
        `;
    }

    private getXmlAnagrafica(bolletta: BollettaInfo): string {
        const dataInizioRapporto = bolletta.contratto.dataInizio.toISOString().slice(0, 10);
        const anagrafica = this.getAnagraficaData(bolletta);

        return `
        <tem:anagrafica>
            <tem:codice xsi:nil="true" xmlns:xsi="http://wwww.w3.org/2001/XMLSchema-instance" />
            <tem:denomin>${purge(anagrafica.denominazione)}</tem:denomin>
            <tem:sesso>${purge(anagrafica.sesso)}</tem:sesso>
            <tem:datanasc>${purge(anagrafica.dataNascita)}</tem:datanasc>
            <tem:comunasc>${purge(anagrafica.comuneNascita)}</tem:comunasc>
            <tem:indirizzo>${purge(anagrafica.indirizzo)}</tem:indirizzo>
            <tem:cap>${purge(anagrafica.cap)}</tem:cap>
            <tem:citta>${purge(anagrafica.citta)}</tem:citta>
            <tem:prov>${purge(anagrafica.siglaProvincia)}</tem:prov>
            <tem:codstato></tem:codstato>
            <tem:piva></tem:piva>
            <tem:codfisc>${purge(anagrafica.codiceFiscale)}</tem:codfisc>
            <tem:telefono>${purge(anagrafica.numeroTelefono)}</tem:telefono>
            <tem:conto></tem:conto>
            <tem:siglaconto></tem:siglaconto>
            <tem:dtinirapp>${dataInizioRapporto}</tem:dtinirapp>
            <tem:note1>ENCO</tem:note1>
            <tem:email>${purge(anagrafica.email)}</tem:email>
            <tem:tty>105</tem:tty>
            <tem:utente>ENCO</tem:utente>
        </tem:anagrafica> 
        `;
    }

    private getXmlCentroDiCosto(bolletta: BollettaInfo, tipoConto: 'contoRicaviCanoni' | 'contoRicaviConsumi'): string {
        const contoRicavi = bolletta[tipoConto] as ContoRicavi;

        const annoDal = bolletta.competenzaDal.getFullYear();
        const meseDal = bolletta.competenzaDal.getMonth() + 1;

        const annoAl = bolletta.competenzaAl.getFullYear();
        const meseAl = bolletta.competenzaAl.getMonth() + 1;

        const centroDiCosto = bolletta.centroDiCosto as string;
        const importo = (tipoConto === 'contoRicaviCanoni'
            ? bolletta.importoCanoni
            : bolletta.importoConsumi) as number;

        return `
             <tem:fatcdc>
                <tem:conto></tem:conto>
                <tem:siglaconto>${contoRicavi.conto}</tem:siglaconto>
                <tem:progr>1</tem:progr>
                <tem:tipocod>R</tem:tipocod>
                <tem:codcdc>${centroDiCosto}</tem:codcdc>
                <tem:fat_prod></tem:fat_prod>
                <tem:aa1>${annoDal}</tem:aa1>
                <tem:mm1>${meseDal}</tem:mm1>
                <tem:aa2>${annoAl}</tem:aa2>
                <tem:mm2>${meseAl}</tem:mm2>
                <tem:importo>${importo}</tem:importo>
            </tem:fatcdc>
        `;
    }

    private getXmlRiga(
        bolletta: BollettaInfo,
        tipoConto: 'contoRicaviCanoni' | 'contoRicaviConsumi',
        index: number
    ): string {
        const contoRicavi = bolletta[tipoConto] as ContoRicavi;
        const dataCompetenzaInizio = bolletta.competenzaDal.toISOString().slice(0, 10);
        const dataCompetenzaFine = bolletta.competenzaAl.toISOString().slice(0, 10);
        const importo = (tipoConto === 'contoRicaviCanoni'
            ? bolletta.importoCanoni
            : bolletta.importoConsumi) as number;

        return `
        <tem:riga>
            <tem:riga>${index}</tem:riga>
            <tem:tipo>T</tem:tipo>
            <tem:codtar>1</tem:codtar>
            <tem:prefisso>1</tem:prefisso>
            <tem:codice>${contoRicavi.codice}</tem:codice>
            <tem:descr>${contoRicavi.descrizione}</tem:descr>
            <tem:qta>1</tem:qta>
            <tem:prezzo>${importo}</tem:prezzo>
            <tem:codiva>110</tem:codiva>
            <tem:capitolo></tem:capitolo>
            <tem:siglacapitolo>${contoRicavi.conto}</tem:siglacapitolo>
            <tem:conto></tem:conto>
            <tem:siglaconto>${contoRicavi.conto}</tem:siglaconto>
            <tem:importo>${importo}</tem:importo>
            <tem:desc_art>${contoRicavi.descrizione}</tem:desc_art>
            <tem:dtcompini>${dataCompetenzaInizio}</tem:dtcompini>
            <tem:dtcompfin>${dataCompetenzaFine}</tem:dtcompfin>
            ${bolletta.centroDiCosto ? this.getXmlCentroDiCosto(bolletta, tipoConto) : ''}
        </tem:riga>
        `;
    }

    private getXmlScadenza(bolletta: BollettaInfo, tipoConto: 'contoRicaviCanoni' | 'contoRicaviConsumi'): string {
        const contoRicavi = bolletta[tipoConto] as ContoRicavi;
        const dataCompetenzaInizio = bolletta.competenzaDal.toISOString().slice(0, 10);
        const dataCompetenzaFine = bolletta.competenzaAl.toISOString().slice(0, 10);
        const dataScadenza = bolletta.dataScadenza.toISOString().slice(0, 10);
        const annoAccertamento = new Date().getFullYear();
        const importo = (tipoConto === 'contoRicaviCanoni'
            ? bolletta.importoCanoni
            : bolletta.importoConsumi) as number;

        return `
        <tem:fatscad>
            <tem:capitolo></tem:capitolo>
            <tem:siglacapitolo>${contoRicavi.conto}</tem:siglacapitolo>
            <tem:annoacc>${annoAccertamento}</tem:annoacc>
            <tem:accertamento>${contoRicavi.prg}</tem:accertamento>
            <tem:subacc>0</tem:subacc>
            <tem:scadenza>${dataScadenza}</tem:scadenza>
            <tem:importo>${importo}</tem:importo>
            <tem:dtcompini>${dataCompetenzaInizio}</tem:dtcompini>
            <tem:dtcompfin>${dataCompetenzaFine}</tem:dtcompfin>
        </tem:fatscad>
        `;
    }

    private getXmlFromBolletta(bolletta: BollettaInfo): string {
        return `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
        <soapenv:Header></soapenv:Header>
        <soapenv:Body>
            <tem:InsCarFatRequest>
                ${this.getXmlTestata(bolletta)}
                ${this.getXmlAnagrafica(bolletta)}

                ${bolletta.contoRicaviCanoni ? this.getXmlRiga(bolletta, 'contoRicaviCanoni', 1) : ''}
                ${bolletta.contoRicaviConsumi ? this.getXmlRiga(bolletta, 'contoRicaviConsumi', 2) : ''}

                ${bolletta.contoRicaviCanoni ? this.getXmlScadenza(bolletta, 'contoRicaviCanoni') : ''}
                ${bolletta.contoRicaviConsumi ? this.getXmlScadenza(bolletta, 'contoRicaviConsumi') : ''}
            </tem:InsCarFatRequest>
        </soapenv:Body>
        </soapenv:Envelope>
        `;
    }

    private validateQueryDate(value: string[] | undefined, name: string): Date {
        const singleValue = Array.isArray(value) ? value[value.length - 1] : value;

        if (singleValue === undefined) {
            throw new InvalidQueryParamError(`${name} query parameter should be passed.`);
        }

        const result = new Date(singleValue);
        if (isNaN(+result)) {
            throw new InvalidQueryParamError(`${name} query parameter should be a valid ISO date.`);
        }

        return result;
    }

    private validateQueryNumber(value: string[] | undefined, name: string): number | undefined {
        const singleValue = Array.isArray(value) ? value[value.length - 1] : value;

        if (singleValue === undefined) {
            return undefined;
        }

        const result = +singleValue;
        if (isNaN(result)) {
            throw new InvalidQueryParamError(`${name} query parameter should be a valid number.`);
        }

        return result;
    }

    private validateQueryString(value: string[] | undefined): string | undefined {
        return Array.isArray(value) ? value[value.length - 1] : value;
    }

    private extractSingleQueryParam(parameter: undefined | string | string[]): string | undefined {
        if (Array.isArray(parameter)) {
            return parameter.length > 0 ? parameter[parameter.length - 1] : undefined;
        } else {
            return parameter;
        }
    }

    private validateNumberQueryParam(
        parameter: undefined | string | string[],
        name: string,
        min?: number,
        max?: number
    ): number | null {
        parameter = this.extractSingleQueryParam(parameter);

        if (parameter === undefined) {
            return null;
        }

        const result = +parameter;
        if (isNaN(result) || (min !== undefined && result < min) || (max !== undefined && result > max)) {
            throw new InvalidQueryParamError(`Invalid query param ${name}`);
        }

        return result;
    }

    private parsePageQueryParameters(queryParams: Record<string, string | string[]>): PageParams {
        const { page, pageSize } = queryParams;
        let index = this.validateNumberQueryParam(page, 'page', 1);
        let size = this.validateNumberQueryParam(pageSize, 'pageSize', 1);

        let result: PageParams = {
            skip: undefined,
            take: undefined
        };

        if (index !== null || size !== null) {
            size = size ?? 1;
            index = index ?? 1;
            result = {
                take: size,
                skip: size * (index - 1)
            };
        }

        return result;
    }

    private extractDatesFromQuery(queryParams: Record<string, string[] | undefined>): [Date, Date] {
        const { startDate, endDate } = queryParams;
        return [this.validateQueryDate(startDate, 'startDate'), this.validateQueryDate(endDate, 'endDate')];
    }

    private extractParamsFromQuery(
        queryParams: Record<string, string[] | undefined>
    ): [number | undefined, number | undefined, string | undefined] {
        const { idTipoOspite, idOspite, siglaCausale } = queryParams;
        return [
            this.validateQueryNumber(idTipoOspite, 'idTipoOspite'),
            this.validateQueryNumber(idOspite, 'idOspite'),
            this.validateQueryString(siglaCausale)
        ];
    }

    private getDirName(): string {
        const now = new Date();
        return `contabilita__${now.toISOString().slice(0, 10).replace(/-/g, '_')}__${now.getTime()}`;
    }

    public async getBollette(queryParams: any): Promise<BollettaInfo[]> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const [idTipoOspite, idOspite, siglaCausale] = this.extractParamsFromQuery(queryParams);
        const pageValues = this.parsePageQueryParameters(queryParams);
        return this.fetchBollette(startDate, endDate, idTipoOspite, idOspite, siglaCausale, pageValues);
    }

    public async getBolletteCount(queryParams: any): Promise<number> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const [idTipoOspite, idOspite, siglaCausale] = this.extractParamsFromQuery(queryParams);
        return this.countBollette(startDate, endDate, idTipoOspite, idOspite, siglaCausale);
    }

    public async sendBollette(queryParams: any): Promise<number[]> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const [idTipoOspite, idOspite, siglaCausale] = this.extractParamsFromQuery(queryParams);
        const bollette = await this.fetchBollette(startDate, endDate, idTipoOspite, idOspite, siglaCausale);

        const failedBollette: Set<number> = new Set();
        const passedBollette: Set<number> = new Set();
        const failedXml: string[] = [];
        const passedXml: string[] = [];
        for (const bolletta of bollette) {
            const soapRequest = this.getXmlFromBolletta(bolletta);

            try {
                await prisma.bolletta.update({ where: { id: bolletta.id }, data: { dataInvioEusis: new Date() } });
                await axios.post(CONFIG.CONTABILITA.API_URL, soapRequest, {
                    headers: {
                        'Content-Type': 'application/xml'
                    }
                });
                passedBollette.add(bolletta.id);
                passedXml.push(soapRequest);
            } catch (error) {
                let err;
                if (error.response) {
                    err = { status: error.response.status, data: error.response.data };
                } else if (error.request) {
                    err = error.message;
                } else {
                    err = error;
                }
                try {
                    await prisma.bolletta.update({ where: { id: bolletta.id }, data: { dataInvioEusis: null } });
                } catch (error) {
                    logger.warning('ERROR, cannot reset data invio EUSIS to null of bolletta with id', bolletta.id);
                }
                logger.warning('Error in contabilità', err);

                failedBollette.add(bolletta.id);
                failedXml.push(soapRequest);
            }
        }

        const dirname = this.getDirName();
        emitter.emitContabilitaXml(failedXml, passedXml, dirname);
        emitter.emitContabilitaXlsx(bollette, passedBollette, dirname);
        emitter.emitContabilitaTsv(bollette, passedBollette, dirname);

        if (failedBollette.size) {
            throw new ContabilitaError(undefined, {
                failedBollette: Array.from(failedBollette),
                passedBollette: Array.from(passedBollette)
            });
        }

        return Array.from(passedBollette);
    }
}

export default new ContabilitaService();
