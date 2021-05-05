import { ContoRicaviConsumi } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ContiRicaviConsumiCreateBody = ContoRicaviConsumi & { id?: number };
export type ContiRicaviConsumiReplaceBody = Omit<ContoRicaviConsumi, 'id'>;

export class ContiRicaviConsumiController extends BaseController {
    public route = '/conti-ricavi-consumi';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(options: Record<string, any> = {}): Promise<ContoRicaviConsumi[]> {
        const result = await this.axiosInstance.get(`${this.route}`, { ...options });
        return result.data;
    }

    public async get(id: number, options: Record<string, any> = {}): Promise<ContoRicaviConsumi> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`, { ...options });
        return result.data;
    }

    public async getByCodice(codice: string, options: Record<string, any> = {}): Promise<ContoRicaviConsumi> {
        const result = await this.axiosInstance.get(`${this.route}/codice/${codice}`, { ...options });
        return result.data;
    }

    public async getBySigla(sigla: string, options: Record<string, any> = {}): Promise<ContoRicaviConsumi> {
        const result = await this.axiosInstance.get(`${this.route}/sigla/${sigla}`, { ...options });
        return result.data;
    }

    public async create(body: ContiRicaviConsumiCreateBody, options: Record<string, any> = {}): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async replace(
        id: number,
        body: ContiRicaviConsumiReplaceBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body, { ...options });
    }

    public async delete(id: number, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`, { ...options });
    }

    public async deleteByCodice(codice: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice/${codice}`, { ...options });
    }

    public async deleteBySigla(sigla: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/sigla/${sigla}`, { ...options });
    }
}
