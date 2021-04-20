import { DipartimentoUnitn } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type DipartimentiUnitnCreateBody = DipartimentoUnitn & { codice?: number };
export type DipartimentiUnitnReplaceBody = Omit<DipartimentoUnitn, 'codice'>;
export type DipartimentiUnitnUpdateBody = Partial<DipartimentiUnitnReplaceBody>;
export class DipartimentiUnitnController extends BaseController {

    public ROUTE = '/dipartimenti-unitn';

    async getAll(): Promise<DipartimentoUnitn[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(codice: string): Promise<DipartimentoUnitn> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${codice}`);
        return result.data;
    }

    async getBySigla(sigla: string): Promise<DipartimentoUnitn> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/sigla/${sigla}`);
        return result.data;
    }

    async create(body: DipartimentiUnitnCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(codice: string, body: DipartimentiUnitnReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${codice}`, body);
    }

    async update(codice: string, body: DipartimentiUnitnUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${codice}`, body);
    }

    async updateBySigla(sigla: string, body: DipartimentiUnitnUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/sigla/${sigla}`, body);
    }

    async delete(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${codice}`);
    }

    async deleteBySigla(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/sigla/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}