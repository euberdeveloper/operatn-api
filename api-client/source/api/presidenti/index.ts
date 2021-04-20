import { LuogoDiNascita, Presidente, Residenza } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

type PresidentiCreateBody = Presidente & { id?: number } & {
    luogoDiNascita: Omit<LuogoDiNascita, 'id'>;
    residenza: Omit<Residenza, 'id'>;
    domicili?: Omit<Residenza, 'id'>[] | null;
};
type PresidentiReplaceBody = Omit<Presidente, 'id'>;
type PresidentiUpdateBody = Partial<PresidentiReplaceBody>;

export interface PresidentiIncludeParams {
    persona?: boolean | {
        luogoDiNascita?: boolean;
        residenza?: boolean;
        domicili?: boolean;
    };
}

export class PresidentiController extends BaseController {

    public ROUTE = '/presidenti';

    async getAll(params: PresidentiIncludeParams = {}): Promise<Presidente[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async get(id: number, params: PresidentiIncludeParams = {}): Promise<Presidente> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/${id}${queryParams}`);
        return result.data;
    }

    async create(body: PresidentiCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async replace(id: number, body: PresidentiReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.ROUTE}/${id}`, body);
    }

    async update(id: number, body: PresidentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${id}`, body);
    }

    async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${id}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}