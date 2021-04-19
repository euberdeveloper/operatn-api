import { TipoStudente } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

type TipiStudenteCreateBody = TipoStudente & { id?: number };
type TipiStudenteReplaceBody = Omit<TipoStudente, 'id'>;

export class TipiStudenteController extends BaseController {

    public ROUTE = '/tipi-studente';

    async getAll(): Promise<TipoStudente[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async get(id: number): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}`);
        return result.data;
    }

    async getByValue(value: string): Promise<TipoStudente> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/value/${value}`);
        return result.data;
    }

    async create(body: TipiStudenteCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: TipiStudenteReplaceBody): Promise<void> {
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