import { Utente } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtentiCreateBody = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;
export type UtentiUpdateBody = Partial<Omit<UtentiCreateBody, 'ruolo'>>;
export type UtentiUpdateRuoloBody = Pick<Utente, 'ruolo'>;

export type UtentiReturned = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;

export class UtentiController extends BaseController {
    public route = '/utenti';

    async getAll(): Promise<UtentiReturned[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    async getMe(): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/me`);
        return result.data;
    }

    async get(uuid: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/${uuid}`);
        return result.data;
    }

    async getByUsername(username: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/username/${username}`);
        return result.data;
    }

    async create(body: UtentiCreateBody): Promise<string> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    async update(uid: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}`, body);
    }

    async updateByUsername(username: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}`, body);
    }

    async changeRuolo(uid: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}/ruolo`, body);
    }

    async changeRuoloByUsername(username: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}/ruolo`, body);
    }

    async delete(uid: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${uid}`);
    }

    async deleteByUsername(username: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/username/${username}`);
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
