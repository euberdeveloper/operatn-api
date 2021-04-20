import { TipoOspite } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

type TipiOspiteCreateBody = TipoOspite & { id?: number };
type TipiOspiteReplaceBody = Omit<TipoOspite, 'id'>;

export interface TipiOspiteIncludeParams {
    contoRicaviConsumi?: boolean;
    contoRicaviCanoni?: boolean;
}

export class TipiOspiteController extends BaseController {

    public ROUTE = '/tipi-ospite';

    async getAll(params: TipiOspiteIncludeParams = {}): Promise<TipoOspite[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: TipiOspiteIncludeParams = {}): Promise<TipoOspite> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}${queryParams}`);
        return result.data;
    }

    async getByValue(sigla: string, params: TipiOspiteIncludeParams = {}): Promise<TipoOspite> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/sigla/${sigla}${queryParams}`);
        return result.data;
    }

    async create(body: TipiOspiteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiOspiteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async update(id: number, body: TipiOspiteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByValue(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/sigla/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}