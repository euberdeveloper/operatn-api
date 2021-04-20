import { ContoRicaviCanoni, ContoRicaviConsumi, TipoOspite } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiOspiteCreateBody = TipoOspite & { id?: number };
export type TipiOspiteReplaceBody = Omit<TipoOspite, 'id'>;
export type TipiOspiteUpdateBody = Partial<TipiOspiteReplaceBody>;

export type TipiOspiteReturned = TipoOspite & {
    contoRicaviCanoni?: ContoRicaviCanoni;
    contoRicaviConsumi?: ContoRicaviConsumi;
};

export interface TipiOspiteIncludeParams {
    contoRicaviConsumi?: boolean;
    contoRicaviCanoni?: boolean;
}

export class TipiOspiteController extends BaseController {
    public route = '/tipi-ospite';

    async getAll(params: TipiOspiteIncludeParams = {}): Promise<TipiOspiteReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: TipiOspiteIncludeParams = {}): Promise<TipiOspiteReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/${id}${queryParams}`);
        return result.data;
    }

    async getByValue(sigla: string, params: TipiOspiteIncludeParams = {}): Promise<TipiOspiteReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/sigla/${sigla}${queryParams}`);
        return result.data;
    }

    async create(body: TipiOspiteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiOspiteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    async update(id: number, body: TipiOspiteUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    async deleteByValue(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/sigla/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
