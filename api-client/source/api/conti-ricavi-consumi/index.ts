import { ContoRicaviCanoni } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type ContiRicaviConsumiCreateBody = ContoRicaviCanoni & { id?: number };
export type ContiRicaviConsumiReplaceBody = Omit<ContoRicaviCanoni, 'id'>;

export class ContiRicaviConsumiController extends BaseController {

    public ROUTE = '/conti-ricavi-consumi';

    async getAll(): Promise<ContoRicaviCanoni[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByCodice(codice: string): Promise<ContoRicaviCanoni> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/codice/${codice}`);
        return result.data;
    }

    async create(body: ContiRicaviConsumiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: ContiRicaviConsumiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByCodice(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/codice/${codice}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}