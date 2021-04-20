import { Quietanziante, TipoBolletta } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

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
};

export class TipiBollettaController extends BaseController {
    public route = '/quietanzianti';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    public async get(id: number, params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/${id}${queryParams}`);
        return result.data;
    }

    public async getByValue(value: string, params: TipiBollettaIncludeParams = {}): Promise<TipiBollettaReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/value/${value}${queryParams}`);
        return result.data;
    }

    public async create(body: TipiBollettaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: TipiBollettaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async update(id: number, body: TipiBollettaUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }
}
