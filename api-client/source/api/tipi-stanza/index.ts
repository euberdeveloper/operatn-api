import { TipoStanza } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type TipiStanzaCreateBody = TipoStanza & { id?: number };
export type TipiStanzaReplaceBody = Omit<TipoStanza, 'id'>;

export class TipiStanzaController extends BaseController {

    public ROUTE = '/tipi-stanza';

    async getAll(): Promise<TipoStanza[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<TipoStanza> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<TipoStanza> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/value/${value}`);
        return result.data;
    }

    async create(body: TipiStanzaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiStanzaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/value/${value}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}