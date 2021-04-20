import { UtilizzoStanza } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtilizziStanzaCreateBody = UtilizzoStanza & { id?: number };
export type UtilizziStanzaReplaceBody = Omit<UtilizzoStanza, 'id'>;

export class UtilizziStanzaController extends BaseController {
    public route = '/utilizzi-stanza';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<UtilizzoStanza[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByValue(value: string): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    public async create(body: UtilizziStanzaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: UtilizziStanzaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }
}
