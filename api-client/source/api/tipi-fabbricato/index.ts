import { TipoFabbricato } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiFabbricatoCreateBody = TipoFabbricato & { id?: number };
export type TipiFabbricatoReplaceBody = Omit<TipoFabbricato, 'id'>;

export class TipiFabbricatoController extends BaseController {
    public route = '/tipi-fabbricato';

    async getAll(): Promise<TipoFabbricato[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<TipoFabbricato> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<TipoFabbricato> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    async create(body: TipiFabbricatoCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiFabbricatoReplaceBody): Promise<void> {
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
