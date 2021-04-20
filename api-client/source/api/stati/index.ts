import { Stato } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type StatiCreateBody = Stato & { codiceIso?: number };
export type StatiReplaceBody = Omit<Stato, 'codiceIso'>;
export type StatiUpdateBody = Partial<StatiReplaceBody>;
export class StatiController extends BaseController {

    public ROUTE = '/stati';

    async getAll(): Promise<Stato[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(codiceIso: number): Promise<Stato> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${codiceIso}`);
        return result.data;
    }

    async create(body: StatiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(codiceIso: number, body: StatiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${codiceIso}`, body);
    }

    async update(codiceIso: number, body: StatiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${codiceIso}`, body);
    }

    async delete(codiceIso: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${codiceIso}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}