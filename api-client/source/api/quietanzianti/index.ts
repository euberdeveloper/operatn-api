import { Quietanziante } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type QuietanziantiCreateBody = Quietanziante & { id?: number };
export type QuietanziantiReplaceBody = Omit<Quietanziante, 'id'>;

export class QuietanziantiController extends BaseController {
    public route = '/quietanzianti';

    async getAll(): Promise<Quietanziante[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<Quietanziante> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<Quietanziante> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    async create(body: QuietanziantiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: QuietanziantiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
