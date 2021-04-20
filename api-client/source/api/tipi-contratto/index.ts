import { TipoContratto, TipoStudente } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type TipiContrattoCreateBody = TipoContratto & { id?: number } & {
    tipoStudente?: Omit<TipoStudente, 'id'> | null;
};
export type TipiContrattoReplaceBody = Omit<TipoContratto, 'id'>;
export interface TipiContrattoIncludeParams {
    tipoStudente?: boolean;
}
export type TipiContrattoReturned = TipoContratto & {
    tipoStudente?: TipoStudente | null;
}

export class TipiContrattoController extends BaseController {

    public ROUTE = '/tipi-contratto';

    async getAll(params: TipiContrattoIncludeParams = {}): Promise<TipiContrattoReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: TipiContrattoIncludeParams = {}): Promise<TipiContrattoReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}${queryParams}`);
        return result.data;
    }

    async getBySigla(sigla: string, params: TipiContrattoIncludeParams = {}): Promise<TipiContrattoReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/sigla/${sigla}${queryParams}`);
        return result.data;
    }

    async create(body: TipiContrattoCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiContrattoReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteBySigla(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/sigla/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}