/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import prisma, { Bolletta, Quietanziante, TipoBolletta } from '@/services/prisma.service';
import { ContabilitaError, InvalidQueryParamError } from '@/errors';
import logger from '@/utils/logger';
import CONFIG from '@/config';
import { Contratto, TipoContratto } from '@prisma/client';

type BollettaInfo = Bolletta & {
    quietanziante: Quietanziante;
    tipoBolletta: TipoBolletta;
    contratto: Contratto & {
        tipoContratto: TipoContratto;
    };
};

export class ContabilitaService {
    private async fetchBollette(start: Date, end: Date): Promise<BollettaInfo[]> {
        return prisma.bolletta.findMany({
            where: {
                dataInvioEusis: null,
                NOT: {
                    OR: [{ dataScadenza: { lte: start } }, { dataScadenza: { gte: end } }]
                }
            },
            include: {
                quietanziante: true,
                tipoBolletta: true,
                contratto: {
                    include: {
                        tipoContratto: true
                    }
                }
            }
        });
    }

    private getXmlTestata(bolletta: BollettaInfo): string {
        const currDate = new Date();
        const year = currDate.getFullYear();
        const month = currDate.getMonth() + 1;
        const dateStr = `${year}-${month}-${currDate.getDay()}`;
        const idBolletta = bolletta.id;
        const siglaTipoContratto = bolletta.contratto.tipoContratto.sigla;
        return `
        <tem:testata>
            <tem:istituto>1</tem:istituto>
            <tem:subtserie>0</tem:subtserie>
            <tem:codserie>${year}</tem:codserie>
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
            <tem:denomin>EL HAYEK SOPHIE</tem:denomin><!-- cognome nome -->
            <tem:indirizzo>ST ZAKHIA STREET, 6</tem:indirizzo><!-- indirizzo di residenza -->
            <tem:cap>11111</tem:cap><!-- cap residenza (11111) se straniero -->
            <tem:citta>AMCHIT</tem:citta><!-- cttà residenza -->
            <tem:prov>EE</tem:prov><!-- sigla provincia (EE) se stero -->
            <tem:codfisc>LHYSPH97B61Z229U</tem:codfisc><!-- codice fiscale -->
            <tem:impbollo>0</tem:impbollo><!-- == -->
            <tem:totale>160.00</tem:totale><!-- totale importo -->
            <tem:stato>2</tem:stato><!-- == -->
            <tem:fl_postel>S</tem:fl_postel><!-- == -->
            <tem:ufficio>1</tem:ufficio><!-- == -->
            <tem:distretto>0</tem:distretto><!-- == -->
            <tem:causale>BB</tem:causale><!-- B prefisso /// C se cauzione, B se rata, F altre spese /// (checkout 3 N MAI MESSO) /// CAUSALE -> TIPO BOLLETTA --> 
            <tem:descr>${siglaTipoContratto} - B - ${year}/515 RIFER.MESE: ${month} - ANNO: ${year}</tem:descr>
            <tem:numdoc_def>B-${idBolletta}</tem:numdoc_def><!-- BCF-ID_BOLLETTA -->
        </tem:testata>  
        `;
    }

    private getXmlFromBolletta(bolletta: BollettaInfo): string {
        return `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
        <soapenv:Header></soapenv:Header>
        <soapenv:Body>
            <tem:InsCarFatRequest>
                <tem:testata>
                    <tem:istituto>1</tem:istituto>
                    <tem:subtserie>0</tem:subtserie>
                    <tem:codserie>2021</tem:codserie>
                    <tem:coddoc>3001</tem:coddoc>
                    <tem:tipodoc>D</tem:tipodoc>
                    <tem:codcont>CO</tem:codcont>
                    <tem:clascont>GE</tem:clascont>
                    <tem:datacar>2021-05-01</tem:datacar>
                    <tem:sezionale>101</tem:sezionale>
                    <tem:codpag>8</tem:codpag>
                    <tem:cliente>10006051</tem:cliente>
                    <tem:numdoc>374787</tem:numdoc>
                    <tem:datadoc>2021-05-01</tem:datadoc>
                    <tem:denomin>RIOS ORTUNO RAUL</tem:denomin>
                    <tem:indirizzo>NARDOS, 54</tem:indirizzo>
                    <tem:cap>39010</tem:cap>
                    <tem:citta>CHILPANCINGO, FRACC: SANTA ROS</tem:citta>
                    <tem:prov>EE</tem:prov>
                    <tem:codfisc>RSRRLA92L25Z514P</tem:codfisc>
                    <tem:impbollo>0</tem:impbollo>
                    <tem:totale>160.00</tem:totale>
                    <tem:stato>2</tem:stato>
                    <tem:fl_postel>S</tem:fl_postel>
                    <tem:ufficio>1</tem:ufficio>
                    <tem:distretto>0</tem:distretto>
                    <tem:causale>BB</tem:causale>
                    <tem:descr>LM WO  - B - 2021/417 RIFER.MESE : 5 - ANNO : 2021</tem:descr>
                    <tem:numdoc_def>B-374787</tem:numdoc_def>
                </tem:testata>
            
                <tem:riga>
                    <tem:riga>1</tem:riga>
                    <tem:tipo>T</tem:tipo>
                    <tem:codtar>1</tem:codtar>
                    <tem:prefisso>1</tem:prefisso>
                    <tem:codice>011</tem:codice>
                    <tem:descr>${bolletta.tipoBolletta.tipoBolletta}</tem:descr>
                    <tem:qta>1</tem:qta>
                    <tem:prezzo>${bolletta.importoTotale}</tem:prezzo>
                    <tem:codiva>110</tem:codiva>
                    <tem:capitolo></tem:capitolo>
                    <tem:siglacapitolo>031002020</tem:siglacapitolo>
                    <tem:conto></tem:conto>
                    <tem:siglaconto>031002020</tem:siglaconto>
                    <tem:importo>${bolletta.importoTotale}</tem:importo>
                    <tem:desc_art>${bolletta.tipoBolletta.tipoBolletta}</tem:desc_art>
                    <tem:dtcompini>2021-05-01</tem:dtcompini>
                    <tem:dtcompfin>2021-05-01</tem:dtcompfin>
                    <tem:fatcdc>
                        <tem:conto></tem:conto>
                        <tem:siglaconto>031002020</tem:siglaconto>
                        <tem:progr>1</tem:progr>
                        <tem:tipocod>R</tem:tipocod>
                        <tem:codcdc>112010201</tem:codcdc>
                        <tem:fat_prod></tem:fat_prod>
                        <tem:aa1>2021</tem:aa1>
                        <tem:mm1>5</tem:mm1>
                        <tem:aa2>2021</tem:aa2>
                        <tem:mm2>5</tem:mm2>
                        <tem:importo>${bolletta.importoTotale}</tem:importo>
                    </tem:fatcdc>
                </tem:riga>
        
                <tem:fatscad>
                    <tem:capitolo></tem:capitolo>
                    <tem:siglacapitolo>031002020</tem:siglacapitolo>
                    <tem:annoacc>2021</tem:annoacc>
                    <tem:accertamento>2</tem:accertamento>
                    <tem:subacc>0</tem:subacc>
                    <tem:scadenza>${bolletta.dataScadenza.toISOString().slice(0, 10)}</tem:scadenza>
                    <tem:importo>${bolletta.importoTotale}</tem:importo>
                    <tem:dtcompini>2021-05-01</tem:dtcompini>
                    <tem:dtcompfin>2021-05-01</tem:dtcompfin>
                </tem:fatscad>
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

    private extractDatesFromQuery(queryParams: Record<string, string[] | undefined>): [Date, Date] {
        const { startDate, endDate } = queryParams;
        return [this.validateQueryDate(startDate, 'startDate'), this.validateQueryDate(endDate, 'endDate')];
    }

    public async sendBollette(queryParams: any): Promise<void> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const bollette = await this.fetchBollette(startDate, endDate);

        const failedBollette: number[] = [];
        for (const bolletta of bollette) {
            const soapRequest = this.getXmlFromBolletta(bolletta);
            try {
                await prisma.bolletta.update({ where: { id: bolletta.id }, data: { dataInvioEusis: new Date() } });
                await axios.post(CONFIG.CONTABILITA.API_URL, soapRequest, {
                    headers: {
                        'Content-Type': 'application/xml'
                    }
                });
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
                    await prisma.bolletta.update({ where: { id: bolletta.id }, data: { dataInvioEusis: new Date() } });
                } catch (error) {
                    logger.warning('ERROR, cannot reset data invio EUSIS to null of bolletta with id', bolletta.id);
                }
                logger.warning('Error in contabilità', err);
                failedBollette.push(bolletta.id);
            }
        }

        if (failedBollette.length) {
            throw new ContabilitaError(undefined, failedBollette);
        }
    }
}

export default new ContabilitaService();
