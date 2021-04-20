import { Provincia } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ProvinceCreateBody = Provincia & { sigla?: number };
export type ProvinceReplaceBody = Omit<Provincia, 'sigla'>;
export type ProvinceUpdateBody = Partial<ProvinceReplaceBody>;
export class ProvinceController extends BaseController {
    public route = '/province';

    async getAll(): Promise<Provincia[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(sigla: number): Promise<Provincia> {
        const result = await this.axiosInstance.get(`${this.route}/${sigla}`);
        return result.data;
    }

    async create(body: ProvinceCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(sigla: number, body: ProvinceReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${sigla}`, body);
    }

    async update(sigla: number, body: ProvinceUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${sigla}`, body);
    }

    async delete(sigla: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
