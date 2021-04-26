import { ContoRicaviConsumi } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ContiRicaviConsumiCreateBody = ContoRicaviConsumi & { id?: number };
export type ContiRicaviConsumiReplaceBody = Omit<ContoRicaviConsumi, 'id'>;

export class ContiRicaviConsumiController extends BaseController {
    public route = '/conti-ricavi-consumi';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<ContoRicaviConsumi[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<ContoRicaviConsumi> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByCodice(codice: string): Promise<ContoRicaviConsumi> {
        const result = await this.axiosInstance.get(`${this.route}/codice/${codice}`);
        return result.data;
    }

    public async create(body: ContiRicaviConsumiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: ContiRicaviConsumiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByCodice(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice/${codice}`);
    }
}
