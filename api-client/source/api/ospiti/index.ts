import { ContoCorrente, DipartimentoUnitn, DocumentoIdentita, LuogoDiNascita, Ospite, Residenza } from '@/db-types';
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

export type OspitiReturned = Ospite & {
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

export class OspitiController extends BaseController {
    public route = '/ospiti';

    async getAll(params: OspitiIncludeParams & OspitiSearchParams = {}): Promise<OspitiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: OspitiIncludeParams = {}): Promise<OspitiReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/${id}${queryParams}`);
        return result.data;
    }

    async create(body: OspitiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: OspitiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    async update(id: number, body: OspitiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
