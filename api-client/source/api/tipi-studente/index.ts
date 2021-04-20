import { TipoStudente } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiStudenteCreateBody = TipoStudente & { id?: number };
export type TipiStudenteReplaceBody = Omit<TipoStudente, 'id'>;

export class TipiStudenteController extends BaseController {
    public route = '/tipi-studente';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<TipoStudente[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByValue(value: string): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    public async create(body: TipiStudenteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: TipiStudenteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }
}
