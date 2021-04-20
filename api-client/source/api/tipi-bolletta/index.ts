import { Quietanziante, TipoBolletta } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type TipiBollettaCreateBody = TipoBolletta & { id?: number } & {
    quietanziante?: Omit<Quietanziante, 'id'> | null;
};
export type TipiBollettaReplaceBody = Omit<TipoBolletta, 'id'>;
export type TipiBollettaUpdateBody = Partial<TipiBollettaReplaceBody>;
export interface TipiBollettaIncludeParams {
    quietanziante?: boolean;
}
export type TipiBollettaReturned = TipoBolletta & {
    quietanziante?: Quietanziante | null;
}

export class TipiBollettaController extends BaseController {

    public ROUTE = '/quietanzianti';

    async getAll(params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}${queryParams}`);
        return result.data;
    }

    async getByValue(value: string, params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/value/${value}${queryParams}`);
        return result.data;
    }

    async create(body: TipiBollettaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiBollettaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async update(id: number, body: TipiBollettaUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${id}`, body);
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