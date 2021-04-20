import { Comune } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type TipiStanzaCreateBody = Comune & { id?: number };
export type TipiStanzaReplaceBody = Omit<Comune, 'id'>;

export class ComuniController extends BaseController {

    public ROUTE = '/comuni';

    async getAll(): Promise<Comune[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByCodiceIstat(codiceIstat: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/codice-istat/${codiceIstat}`);
        return result.data;
    }

    async getByCodiceCatastale(codiceCatastale: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/codice-catastale/${codiceCatastale}`);
        return result.data;
    }

    async getByDenominazione(denominazione: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/denominazione/${denominazione}`);
        return result.data;
    }

    async create(body: TipiStanzaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiStanzaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByCodiceIstat(codiceIstat: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/codice-istat/${codiceIstat}`);
    }

    async deleteByCodiceCatastale(codiceCatastale: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/codice-catastale/${codiceCatastale}`);
    }

    async deleteByDenominazione(denominazione: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/denominazione/${denominazione}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}