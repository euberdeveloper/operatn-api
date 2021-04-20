import { TipoStanza } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type TipiStanzaCreateBody = TipoStanza & { id?: number };
export type TipiStanzaReplaceBody = Omit<TipoStanza, 'id'>;

export class TipiStanzaController extends BaseController {
    public route = '/tipi-stanza';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<TipoStanza[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async get(id: number): Promise<TipoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/${id}`);
        return result.data;
    }

    public async getByValue(value: string): Promise<TipoStanza> {
        const result = await this.axiosInstance.get(`${this.route}/value/${value}`);
        return result.data;
    }

    public async create(body: TipiStanzaCreateBody): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async replace(id: number, body: TipiStanzaReplaceBody): Promise<void> {
        return this.axiosInstance.put(`${this.route}/${id}`, body);
    }

    public async delete(id: number): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`);
    }

    public async deleteByValue(value: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/value/${value}`);
    }
}
