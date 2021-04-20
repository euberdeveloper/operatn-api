import { TipoStudente } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiStudenteCreateBody = TipoStudente & { id?: number };
export type TipiStudenteReplaceBody = Omit<TipoStudente, 'id'>;

export class TipiStudenteController extends BaseController {
    public route = '/tipi-studente';

    async getAll(): Promise<TipoStudente[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    async create(body: TipiStudenteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiStudenteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
