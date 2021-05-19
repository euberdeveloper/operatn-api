import {
    ContoCorrente,
    DipartimentoUnitn,
    DocumentoIdentita,
    LuogoDiNascita,
    Ospite,
    Persona,
    Residenza
} from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type OspitiCreateBody = Ospite & { id?: number } & {
    luogoDiNascita: Omit<LuogoDiNascita, 'id'>;
    residenza: Omit<Residenza, 'id'>;
    domicili?: Omit<Residenza, 'id'>[] | null;
    contoCorrente?: Omit<ContoCorrente, 'id'> | null;
    documentoIdentita?: Omit<DocumentoIdentita, 'id'> | null;
    dipartimentoUnitn?: Omit<DipartimentoUnitn, 'codice'> | null;
};
export type OspitiReplaceBody = Omit<Ospite, 'id'>;
export type OspitiUpdateBody = Partial<OspitiReplaceBody>;

export type OspitiReturned = Ospite &
    Persona & {
        luogoDiNascita?: LuogoDiNascita;
        residenza?: Residenza;
        domicili?: Residenza[] | null;
        contoCorrente?: ContoCorrente | null;
        documentoIdentita?: DocumentoIdentita | null;
        dipartimentoUnitn?: DipartimentoUnitn | null;
    };

export interface OspitiIncludeParams {
    persona?:
        | boolean
        | {
              luogoDiNascita?: boolean;
              residenza?: boolean;
              domicili?: boolean;
          };
    contoCorrente?: boolean;
    documentoIdentita?: boolean;
    dipartimentoUnitn?: boolean;
}
export interface OspitiSearchParams {
    search?: string;
}
export interface OspitiPageParams {
    page?: number;
    pageSize?: number;
}

export interface OspitiFilterParams {
    dataInizio?: Date;
    dataFine?: Date;
}

export class OspitiController extends BaseController {
    public route = '/ospiti';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    private purgeValue(value: OspitiReturned): OspitiReturned {
        value.dataDiNascita = new Date(value.dataDiNascita);
        if (value.documentoIdentita) {
            value.documentoIdentita.dataRilascio = new Date(value.documentoIdentita.dataRilascio);
            value.documentoIdentita.dataScadenza = new Date(value.documentoIdentita.dataScadenza);
        }
        return value;
    }

    public async getAll(
        params: OspitiIncludeParams & OspitiSearchParams & OspitiPageParams & OspitiFilterParams = {},
        options: Record<string, any> = {}
    ): Promise<OspitiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`, { ...options });
        return result.data.map((o: OspitiReturned) => this.purgeValue(o));
    }

    public async get(
        id: number,
        params: OspitiIncludeParams = {},
        options: Record<string, any> = {}
    ): Promise<OspitiReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/${id}${queryParams}`, { ...options });
        return this.purgeValue(result.data);
    }

    public async create(body: OspitiCreateBody, options: Record<string, any> = {}): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async replace(id: number, body: OspitiReplaceBody, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body, { ...options });
    }

    public async update(id: number, body: OspitiUpdateBody, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${id}`, body, { ...options });
    }

    public async delete(id: number, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`, { ...options });
    }
}
