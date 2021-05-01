import { Utente } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type UtentiCreateBody = Pick<Utente, 'nomeUtente' | 'email' | 'ruolo' | 'password'> & { uid?: string };
export type UtentiUpdateBody = Partial<Omit<UtentiCreateBody, 'uid' | 'ruolo' | 'pasword'>>;
export type UtentiUpdateRuoloBody = Pick<Utente, 'ruolo'>;
export type UtentiUpdatePasswordBody = Pick<Utente, 'password'>;

export type UtentiReturned = Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo' | 'dataCreazione'>;

export class UtentiController extends BaseController {
    public route = '/utenti';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async getAll(options: Record<string, any> = {}): Promise<UtentiReturned[]> {
        const result = await this.axiosInstance.get(`${this.route}`, { ...options });
        return result.data;
    }

    public async getMe(options: Record<string, any> = {}): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/me`, { ...options });
        return result.data;
    }

    public async get(uuid: string, options: Record<string, any> = {}): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/${uuid}`, { ...options });
        return result.data;
    }

    public async getByUsername(username: string, options: Record<string, any> = {}): Promise<UtentiReturned> {
        const result = await this.axiosInstance.get(`${this.route}/username/${username}`, { ...options });
        return result.data;
    }

    public async create(body: UtentiCreateBody, options: Record<string, any> = {}): Promise<string> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async update(uid: string, body: UtentiUpdateBody, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}`, body, { ...options });
    }

    public async updateByUsername(
        username: string,
        body: UtentiUpdateBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}`, body, { ...options });
    }

    public async changeRuolo(
        uid: string,
        body: UtentiUpdateRuoloBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}/ruolo`, body, { ...options });
    }

    public async changeRuoloByUsername(
        username: string,
        body: UtentiUpdateRuoloBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}/ruolo`, body, { ...options });
    }

    public async changePassword(
        uid: string,
        body: UtentiUpdatePasswordBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/${uid}/password`, body, { ...options });
    }

    public async changePasswordByUsername(
        username: string,
        body: UtentiUpdatePasswordBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.patch(`${this.route}/username/${username}/password`, body, { ...options });
    }

    public async askPasswordRecovery(username: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.post(`${this.route}/password-recovery`, { nomeUtente: username }, { ...options });
    }

    public async getUserByRecoveryToken(token: string, options: Record<string, any> = {}): Promise<UtentiReturned> {
        return this.axiosInstance.get(`${this.route}/password-recovery/${token}`, { ...options });
    }

    public async recoverPassword(
        token: string,
        body: UtentiUpdatePasswordBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        return this.axiosInstance.post(`${this.route}/password-recovery/${token}`, body, { ...options });
    }

    public async delete(uid: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${uid}`, { ...options });
    }

    public async deleteByUsername(username: string, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/username/${username}`, { ...options });
    }
}
