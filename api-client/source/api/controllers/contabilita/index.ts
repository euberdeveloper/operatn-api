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

export class ContabilitaController extends BaseController {
    public route = '/contabilita';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getBollette(
        params: ContabilitaQueryParams,
        options: Record<string, any> = {}
    ): Promise<ContabilitaBollettaInfo[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/bollette${queryParams}`, { ...options });
        return result.data;
    }

    public async sendBollette(params: ContabilitaQueryParams, options: Record<string, any> = {}): Promise<number[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.post(`${this.route}/bollette${queryParams}`, { ...options });
        return result.data;
    }
}
