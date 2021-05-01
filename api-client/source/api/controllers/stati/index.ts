import { Stato } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type StatiCreateBody = Stato & { codiceIso?: number };
export type StatiReplaceBody = Omit<Stato, 'codiceIso'>;
export type StatiUpdateBody = Partial<StatiReplaceBody>;
export class StatiController extends BaseController {
    public route = '/stati';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(options: Record<string, any> = {}): Promise<Stato[]> {
        const result = await this.axiosInstance.get(`${this.route}`, { ...options });
        return result.data;
    }

    public async get(codiceIso: number, options: Record<string, any> = {}): Promise<Stato> {
        const result = await this.axiosInstance.get(`${this.route}/${codiceIso}`, { ...options });
        return result.data;
    }

    public async create(body: StatiCreateBody, options: Record<string, any> = {}): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async replace(codiceIso: number, body: StatiReplaceBody, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${codiceIso}`, body, { ...options });
    }

    public async update(codiceIso: number, body: StatiUpdateBody, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${codiceIso}`, body, { ...options });
    }

    public async delete(codiceIso: number, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${codiceIso}`, { ...options });
    }
}
