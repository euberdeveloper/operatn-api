/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import prisma, { Bolletta, Quietanziante, TipoBolletta } from '@/services/prisma.service';
import { InvalidQueryParamError } from '@/errors';
import CONFIG from '@/config';

type RawResult = Bolletta & {
    quietanziante: Quietanziante;
    tipoBolletta: TipoBolletta;
};

export class ContabilitaService {
    private async fetchBollette(start: Date, end: Date): Promise<RawResult[]> {
        return prisma.bolletta.findMany({
            where: {
                dataInvioEusis: null,
                NOT: {
                    OR: [{ competenzaAl: { lte: start } }, { competenzaDal: { gte: end } }]
                }
            },
            include: {
                quietanziante: true,
                tipoBolletta: true
            }
        });
    }

    private getXmlFromBollette(bollette: RawResult[]): string {
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
                ${bollette
                    .map(
                        b => `
                            <tem:riga>
                                <tem:riga>1</tem:riga>
                                <tem:tipo>T</tem:tipo>
                                <tem:codtar>1</tem:codtar>
                                <tem:prefisso>1</tem:prefisso>
                                <tem:codice>011</tem:codice>
                                <tem:descr>${b.tipoBolletta.tipoBolletta}</tem:descr>
                                <tem:qta>1</tem:qta>
                                <tem:prezzo>${b.importoTotale}</tem:prezzo>
                                <tem:codiva>110</tem:codiva>
                                <tem:capitolo></tem:capitolo>
                                <tem:siglacapitolo>031002020</tem:siglacapitolo>
                                <tem:conto></tem:conto>
                                <tem:siglaconto>031002020</tem:siglaconto>
                                <tem:importo>${b.importoTotale}</tem:importo>
                                <tem:desc_art>${b.tipoBolletta.tipoBolletta}</tem:desc_art>
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
                                    <tem:importo>${b.importoTotale}</tem:importo>
                                </tem:fatcdc>
                            </tem:riga>
                        `
                    )
                    .join('\n')}
                    ${bollette
                        .map(
                            b => `
                            <tem:fatscad>
                                <tem:capitolo></tem:capitolo>
                                <tem:siglacapitolo>031002020</tem:siglacapitolo>
                                <tem:annoacc>2021</tem:annoacc>
                                <tem:accertamento>2</tem:accertamento>
                                <tem:subacc>0</tem:subacc>
                                <tem:scadenza>${b.dataScadenza.toISOString().slice(0, 10)}</tem:scadenza>
                                <tem:importo>${b.importoTotale}</tem:importo>
                                <tem:dtcompini>2021-05-01</tem:dtcompini>
                                <tem:dtcompfin>2021-05-01</tem:dtcompfin>
                            </tem:fatscad>
                            `
                        )
                        .join('\n')}
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
        const soapRequest = this.getXmlFromBollette(bollette);
        await axios.post(CONFIG.CONTABILITA.API_URL, soapRequest, {
            headers: {
                'Content-Type': 'application/xml'
            }
        });
    }
}

export default new ContabilitaService();
