import { Quietanziante } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type QuietanziantiCreateBody = Quietanziante & { id?: number };
export type QuietanziantiReplaceBody = Omit<Quietanziante, 'id'>;

export class QuietanziantiController extends BaseController {

    public ROUTE = '/quietanzianti';

    async getAll(): Promise<Quietanziante[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<Quietanziante> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<Quietanziante> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/value/${value}`);
        return result.data;
    }

    async create(body: QuietanziantiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: QuietanziantiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/value/${value}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}