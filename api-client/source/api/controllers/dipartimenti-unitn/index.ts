import { DipartimentoUnitn } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type DipartimentiUnitnCreateBody = DipartimentoUnitn & { codice?: number };
export type DipartimentiUnitnReplaceBody = Omit<DipartimentoUnitn, 'codice'>;
export type DipartimentiUnitnUpdateBody = Partial<DipartimentiUnitnReplaceBody>;
export class DipartimentiUnitnController extends BaseController {
    public route = '/dipartimenti-unitn';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<DipartimentoUnitn[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(codice: string): Promise<DipartimentoUnitn> {
        const result = await this.axiosInstance.get(`${this.route}/${codice}`);
        return result.data;
    }

    public async getBySigla(sigla: string): Promise<DipartimentoUnitn> {
        const result = await this.axiosInstance.get(`${this.route}/sigla/${sigla}`);
        return result.data;
    }

    public async create(body: DipartimentiUnitnCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(codice: string, body: DipartimentiUnitnReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${codice}`, body);
    }

    public async update(codice: string, body: DipartimentiUnitnUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${codice}`, body);
    }

    public async updateBySigla(sigla: string, body: DipartimentiUnitnUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/sigla/${sigla}`, body);
    }

    public async delete(codice: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${codice}`);
    }

    public async deleteBySigla(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/sigla/${sigla}`);
    }
}
