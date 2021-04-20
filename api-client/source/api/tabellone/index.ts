import { Sesso } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export interface Tabellone {
    fabbricatoId: number;
    fabbricatoCodice: string;
    fabbricatoNome: string;
    fabbricatoComune: string;
    fabbricatoIndirizzo: string;
    fabbricatoNCivico: string;
    stanzaUnitaImmobiliare: string;
    stanzaPiano: string | null;
    tipoStanzaTipoStanza: string;
    stanzaNumeroStanza: string;
    postoLettoPostoLetto: string;
    stanzaGestioneDiretta: boolean;
    stanzaNote: string | null;
    manutenzioneDataCreazione: string | null;
    personaId: number | null;
    personaNome: string | null;
    personaCognome: string | null;
    personaCodiceFiscale: string | null;
    personaSesso: Sesso | null;
    ospiteCittadinanza: string | null;
    ospiteEmail: string | null;
    ospiteTelefonoPrincipale: string | null;
    ospiteTelefonoSecondario: string | null;
    dipartimentoUnitnCodice: string | null;
    dipartimentoUnitnNome: string | null;
    contrattoId: number | null;
    contrattoDataInizio: string | null;
    contrattoDataFine: string | null;
    tipoContrattoSigla: string | null;
    tipoOspiteSigla: string | null;
    contrattoNote: string | null;
}

export interface TabelloneQueryParams {
    startDate: Date;
    endDate: Date;
}

export class TabelloneController extends BaseController {
    public route = '/tabellone';

    async get(params: TabelloneQueryParams): Promise<Tabellone[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    async getTsv(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/tsv${queryParams}`);
        return result.data;
    }

    async getXlsx(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/xlsx${queryParams}`);
        return result.data;
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
