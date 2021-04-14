import { TipoStanza } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

type TipiStanzaCreateBody = TipoStanza & { id?: number };
type TipiStanzaReplaceBody = Omit<TipoStanza, 'id'>;

export class TipiStanzaController extends BaseController {

    public ROUTE = '/tipi-stanza';

    async getAll(): Promise<TipoStanza[]> {
        return this.axiosInstance.get(`${this.ROUTE}`);
    }

    async get(id: number): Promise<TipoStanza> {
        return this.axiosInstance.get(`${this.ROUTE}/${id}`);
    }

    async getByValue(value: string): Promise<TipoStanza> {
        return this.axiosInstance.get(`${this.ROUTE}/value/${value}`);
    }

    async create(body: TipiStanzaCreateBody): Promise<number> {
        return this.axiosInstance.post(`${this.ROUTE}`, body);
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