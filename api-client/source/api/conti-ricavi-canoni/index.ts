import { ContoRicaviCanoni } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type ContiRicaviCanoniCreateBody = ContoRicaviCanoni & { id?: number };
export type ContiRicaviCanoniReplaceBody = Omit<ContoRicaviCanoni, 'id'>;

export class ContiRicaviCanoniController extends BaseController {

    public ROUTE = '/conti-ricavi-canoni';

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

    async create(body: ContiRicaviCanoniCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: ContiRicaviCanoniReplaceBody): Promise<void> {
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