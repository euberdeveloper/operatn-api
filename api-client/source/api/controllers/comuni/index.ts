import { Comune } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ComuniCreateBody = Comune & { id?: number };
export type ComuniReplaceBody = Omit<Comune, 'id'>;
export type ComuniUpdateBody = Partial<ComuniReplaceBody>;
export class ComuniController extends BaseController {
    public route = '/comuni';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<Comune[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByCodiceIstat(codiceIstat: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.route}/codice-istat/${codiceIstat}`);
        return result.data;
    }

    public async getByCodiceCatastale(codiceCatastale: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.route}/codice-catastale/${codiceCatastale}`);
        return result.data;
    }

    public async getByDenominazione(denominazione: string): Promise<Comune> {
        const result = await this.axiosInstance.get(`${this.route}/denominazione/${denominazione}`);
        return result.data;
    }

    public async create(body: ComuniCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: ComuniReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async update(id: number, body: ComuniUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByCodiceIstat(codiceIstat: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice-istat/${codiceIstat}`);
    }

    public async deleteByCodiceCatastale(codiceCatastale: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/codice-catastale/${codiceCatastale}`);
    }

    public async deleteByDenominazione(denominazione: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/denominazione/${denominazione}`);
    }
}
