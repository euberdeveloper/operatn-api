import { ContoRicaviCanoni } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ContiRicaviConsumiCreateBody = ContoRicaviCanoni & { id?: number };
export type ContiRicaviConsumiReplaceBody = Omit<ContoRicaviCanoni, 'id'>;

export class ContiRicaviConsumiController extends BaseController {
    public route = '/conti-ricavi-consumi';

    async getAll(): Promise<ContoRicaviCanoni[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByCodice(codice: string): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.route}/codice/${codice}`);
        return result.data;
    }

    async create(body: ContiRicaviConsumiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: ContiRicaviConsumiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    async deleteByCodice(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice/${codice}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
