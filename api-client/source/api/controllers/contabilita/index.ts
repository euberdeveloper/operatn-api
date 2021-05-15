import {
    Ospite,
    Persona,
    LuogoDiNascita,
    Residenza,
    Bolletta,
    Contratto,
    Quietanziante,
    TipoBolletta,
    ContoRicavi
} from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export interface ContabilitaQueryParams {
    startDate: Date;
    endDate: Date;
    idTipoOspite?: number;
    idOspite?: number;
    siglaCausale?: string;
}

export interface ContabilitaPageParams {
    page?: number;
    pageSize?: number;
}

type OspiteInfo = Ospite & {
    persona: Persona & {
        luogoDiNascita: LuogoDiNascita | null;
        residenza: Residenza | null;
    };
};

export type ContabilitaBollettaInfo = Bolletta & {
    contratto: Contratto;
    quietanziante: Quietanziante;
    ospite: OspiteInfo | null;
    tipoBolletta: TipoBolletta;
    contoRicaviCanoni: ContoRicavi | null;
    contoRicaviConsumi: ContoRicavi | null;
};

export interface ContabilitaDirsInfo {
    path: string;
    size: string;
}

export class ContabilitaController extends BaseController {
    public route = '/contabilita';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    private purgeValue(value: ContabilitaBollettaInfo): ContabilitaBollettaInfo {
        value.competenzaAl = new Date(value.competenzaAl);
        value.competenzaDal = new Date(value.competenzaDal);
        value.dataScadenza = new Date(value.dataScadenza);
        return value;
    }

    public async getCronology(options: Record<string, any> = {}): Promise<ContabilitaDirsInfo[]> {
        const result = await this.axiosInstance.get(`${this.route}/cronology`, { ...options });
        return result.data;
    }

    public async getBollette(
        params: ContabilitaQueryParams & ContabilitaPageParams,
        options: Record<string, any> = {}
    ): Promise<ContabilitaBollettaInfo[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/bollette${queryParams}`, { ...options });
        return result.data.map((el: ContabilitaBollettaInfo) => this.purgeValue(el));
    }

    public async countBollette(params: ContabilitaQueryParams, options: Record<string, any> = {}): Promise<number> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/bollette/count${queryParams}`, { ...options });
        return result.data;
    }

    public async sendBollette(params: ContabilitaQueryParams, options: Record<string, any> = {}): Promise<number[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.post(`${this.route}/bollette${queryParams}`, { ...options });
        return result.data;
    }
}
