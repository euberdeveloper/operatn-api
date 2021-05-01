import { UtilizzoStanza } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtilizziStanzaCreateBody = UtilizzoStanza & { id?: number };
export type UtilizziStanzaReplaceBody = Omit<UtilizzoStanza, 'id'>;

export class UtilizziStanzaController extends BaseController {
    public route = '/utilizzi-stanza';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(options: Record<string, any> = {}): Promise<UtilizzoStanza[]> {
        const result = await this.axiosInstance.get(`${this.route}`, { ...options });
        return result.data;
    }

    public async get(id: number, options: Record<string, any> = {}): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`, { ...options });
        return result.data;
    }

    public async getByValue(value: string, options: Record<string, any> = {}): Promise<UtilizzoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`, { ...options });
        return result.data;
    }

    public async create(body: UtilizziStanzaCreateBody, options: Record<string, any> = {}): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async replace(
        id: number,
        body: UtilizziStanzaReplaceBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body, { ...options });
    }

    public async delete(id: number, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`, { ...options });
    }

    public async deleteByValue(value: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`, { ...options });
    }
}
