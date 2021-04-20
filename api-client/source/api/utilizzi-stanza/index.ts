import { UtilizzoStanza } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtilizziStanzaCreateBody = UtilizzoStanza & { id?: number };
export type UtilizziStanzaReplaceBody = Omit<UtilizzoStanza, 'id'>;

export class UtilizziStanzaController extends BaseController {
    public route = '/utilizzi-stanza';

    async getAll(): Promise<UtilizzoStanza[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    async create(body: UtilizziStanzaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: UtilizziStanzaReplaceBody): Promise<void> {
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
