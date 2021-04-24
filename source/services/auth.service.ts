import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import prisma, { Prisma, Utente } from '@/services/prisma.service';
import { InvalidCredentialsError } from '@/errors';
import CONFIG from '@/config';

interface AuthResponse {
    token: string;
    user: Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo' | 'dataCreazione'>;
}
export class AuthService {
    private readonly jwtPassword: string;
    private readonly jwtExpiration: string;
    private readonly utenteModel: Prisma.UtenteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    constructor() {
        this.jwtPassword = CONFIG.SECURITY.JWT.PASSWORD;
        this.jwtExpiration = CONFIG.SECURITY.JWT.EXPIRATION;

        this.utenteModel = prisma.utente;
    }

    private async findByUid(uid: string): Promise<Utente | null> {
        return this.utenteModel.findUnique({ where: { uid } });
    }

    private async findByNomeUtente(nomeUtente: string): Promise<Utente | null> {
        return this.utenteModel.findUnique({ where: { nomeUtente: nomeUtente } });
    }

    public async verifyUsernameAndPassword(username: string, password: string): Promise<Utente> {
        const utente = await this.findByNomeUtente(username);
        if (utente === null) {
            throw new InvalidCredentialsError('Wrong username or password');
        }
        const rightPassword = await bcrypt.compare(password, utente.password);
        if (!rightPassword) {
            throw new InvalidCredentialsError('Wrong username or password');
        }
        return utente;
    }

    public async verifyUserWithJwt(jwtPayload: any): Promise<Utente> {
        const uid: string | null = jwtPayload?.sub;
        if (uid === null) {
            throw new InvalidCredentialsError('Invalid token');
        }
        const utente = await this.findByUid(uid);
        if (utente === null) {
            throw new InvalidCredentialsError('Invalid token');
        }
        return utente;
    }

    public generateAuthResponse(user: Utente): AuthResponse {
        const sub = user.uid;
        const token = jwt.sign({ sub }, this.jwtPassword, { expiresIn: this.jwtExpiration });

        const response: AuthResponse = {
            token,
            user: {
                uid: user.uid,
                nomeUtente: user.nomeUtente,
                email: user.email,
                ruolo: user.ruolo,
                dataCreazione: user.dataCreazione
            }
        };
        return response;
    }
}

export default new AuthService();
