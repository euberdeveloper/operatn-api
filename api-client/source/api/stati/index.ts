import { Stato } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type StatiCreateBody = Stato & { codiceIso?: number };
export type StatiReplaceBody = Omit<Stato, 'codiceIso'>;
export type StatiUpdateBody = Partial<StatiReplaceBody>;
export class StatiController extends BaseController {
    public route = '/stati';

    public async getAll(): Promise<Stato[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(codiceIso: number): Promise<Stato> {
        const result = await this.axiosInstance.get(`${this.route}/${codiceIso}`);
        return result.data;
    }

    public async create(body: StatiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(codiceIso: number, body: StatiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${codiceIso}`, body);
    }

    public async update(codiceIso: number, body: StatiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${codiceIso}`, body);
    }

    public async delete(codiceIso: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${codiceIso}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
