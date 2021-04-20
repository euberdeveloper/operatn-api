import { TipoTariffa } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiTariffaCreateBody = TipoTariffa & { id?: number };
export type TipiTariffaReplaceBody = Omit<TipoTariffa, 'id'>;

export class TipiTariffaController extends BaseController {
    public route = '/tipi-tariffa';

    async getAll(): Promise<TipoTariffa[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async get(id: number): Promise<TipoTariffa> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<TipoTariffa> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    async create(body: TipiTariffaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiTariffaReplaceBody): Promise<void> {
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
