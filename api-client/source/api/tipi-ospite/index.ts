import { TipoOspite } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

type TipiOspiteCreateBody = TipoOspite & { id?: number };
type TipiOspiteReplaceBody = Omit<TipoOspite, 'id'>;

export class TipiOspiteController extends BaseController {

    public ROUTE = '/tipi-ospite';

    async getAll(): Promise<TipoOspite[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<TipoOspite> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByValue(sigla: string): Promise<TipoOspite> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/sigla/${sigla}`);
        return result.data;
    }

    async create(body: TipiOspiteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiOspiteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async update(id: number, body: TipiOspiteReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    async deleteByValue(sigla: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/sigla/${sigla}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}