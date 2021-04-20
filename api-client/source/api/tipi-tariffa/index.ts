import { TipoTariffa } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiTariffaCreateBody = TipoTariffa & { id?: number };
export type TipiTariffaReplaceBody = Omit<TipoTariffa, 'id'>;

export class TipiTariffaController extends BaseController {
    public route = '/tipi-tariffa';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<TipoTariffa[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<TipoTariffa> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByValue(value: string): Promise<TipoTariffa> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    public async create(body: TipiTariffaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: TipiTariffaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }
}
