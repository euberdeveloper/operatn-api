import { Tariffa, TipoFabbricato, TipoOspite, TipoTariffa, UtilizzoStanza } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type TariffeCreateBody = Tariffa & { id?: number };
export type TariffeReplaceBody = Omit<Tariffa, 'id'>;
export type TariffeUpdateBody = Partial<TariffeReplaceBody>;

export interface TariffeIncludeParams {
    tipoOspite?: boolean;
    utilizzoStanza?: boolean;
    tipoFabbricato?: boolean;
    tipoTariffa?: boolean;
}

export type TariffeReturned = Tariffa & {
    tipoOspite?: TipoOspite;
    utilizzoStanza?: UtilizzoStanza;
    tipoFabbricato?: TipoFabbricato;
    tipoTariffa?: TipoTariffa;
}

export class TariffeController extends BaseController {

    public ROUTE = '/tariffe';

    async getAll(params: TariffeIncludeParams = {}): Promise<TariffeReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: TariffeIncludeParams = {}): Promise<TariffeReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}${queryParams}`);
        return result.data;
    }

    async create(body: TariffeCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TariffeReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async update(id: number, body: TariffeUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}