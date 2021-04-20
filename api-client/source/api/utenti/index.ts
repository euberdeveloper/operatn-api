import { Utente } from "@/db-types";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export type UtentiCreateBody = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;
export type UtentiUpdateBody = Partial<Omit<UtentiCreateBody, 'ruolo'>>;
export type UtentiUpdateRuoloBody = Pick<Utente, 'ruolo'>;

export type UtentiReturned = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>

export class UtentiController extends BaseController {

    public ROUTE = '/utenti';

    async getAll(): Promise<UtentiReturned[]> {
        const result = await this.axiosInstance.get(`${this.ROUTE}`);
        return result.data;
    }

    async getMe(): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/me`);
        return result.data;
    }

    async get(uuid: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/${uuid}`);
        return result.data;
    }

    async getByUsername(username: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.ROUTE}/username/${username}`);
        return result.data;
    }

    async create(body: UtentiCreateBody): Promise<string> {
        const result = await this.axiosInstance.post(`${this.ROUTE}`, body);
        return result.data;
    }

    async update(uid: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${uid}`, body);
    }

    async updateByUsername(username: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/username/${username}`, body);
    }

    async changeRuolo(uid: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/${uid}/ruolo`, body);
    }

    async changeRuoloByUsername(username: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.ROUTE}/username/${username}/ruolo`, body);
    }

    async delete(uid: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/${uid}`);
    }

    async deleteByUsername(username: string): Promise<void> {
        return this.axiosInstance.delete(`${this.ROUTE}/username/${username}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}