import { ContoRicaviCanoni } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ContiRicaviCanoniCreateBody = ContoRicaviCanoni & { id?: number };
export type ContiRicaviCanoniReplaceBody = Omit<ContoRicaviCanoni, 'id'>;

export class ContiRicaviCanoniController extends BaseController {
    public route = '/conti-ricavi-canoni';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<ContoRicaviCanoni[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByCodice(codice: string): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.route}/codice/${codice}`);
        return result.data;
    }

    public async create(body: ContiRicaviCanoniCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: ContiRicaviCanoniReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByCodice(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice/${codice}`);
    }
}