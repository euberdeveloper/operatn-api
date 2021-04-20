import { Utente } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtentiCreateBody = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;
export type UtentiUpdateBody = Partial<Omit<UtentiCreateBody, 'ruolo'>>;
export type UtentiUpdateRuoloBody = Pick<Utente, 'ruolo'>;

export type UtentiReturned = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;

export class UtentiController extends BaseController {
    public route = '/utenti';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(): Promise<UtentiReturned[]> {
        const result = await this.axiosInstance.get(`${this.route}`);
        return result.data;
    }

    public async getMe(): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/me`);
        return result.data;
    }

    public async get(uuid: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/${uuid}`);
        return result.data;
    }

    public async getByUsername(username: string): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/username/${username}`);
        return result.data;
    }

    public async create(body: UtentiCreateBody): Promise<string> {
        const result = await this.axiosInstance.post(`${this.route}`, body);
        return result.data;
    }

    public async update(uid: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}`, body);
    }

    public async updateByUsername(username: string, body: UtentiUpdateBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}`, body);
    }

    public async changeRuolo(uid: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}/ruolo`, body);
    }

    public async changeRuoloByUsername(username: string, body: UtentiUpdateRuoloBody): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}/ruolo`, body);
    }

    public async delete(uid: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${uid}`);
    }

    public async deleteByUsername(username: string): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/username/${username}`);
    }
}
