import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { PrismaClient, Prisma, Utente } from '@prisma/client';
import { InvalidCredentials } from '@/errors/client/InvalidCredentials';
import CONFIG from '@/config';

interface AuthResponse {
    token: string;
    user: Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;
}
export class UserService {
    private readonly jwtPassword: string;
    private readonly jwtExpiration: string;
    private readonly utenteModel: Prisma.UtenteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    constructor() {
        this.jwtPassword = CONFIG.SECURITY.JWT.PASSWORD;
        this.jwtExpiration = CONFIG.SECURITY.JWT.EXPIRATION;

        const prisma = new PrismaClient();
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
            throw new InvalidCredentials('Wrong username or password');
        }
        const rightPassword = await bcrypt.compare(password, utente.password);
        if (!rightPassword) {
            throw new InvalidCredentials('Wrong username or password');
        }
        return utente;
    }

    public async verifyUserWithJwt(jwtPayload: any): Promise<Utente> {
        const uid: string | null = jwtPayload?.sub;
        if (uid === null) {
            throw new InvalidCredentials('Invalid token');
        }
        const utente = await this.findByUid(uid);
        if (utente === null) {
            throw new InvalidCredentials('Invalid token');
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
                ruolo: user.ruolo
            }
        };
        return response;
    }
}

export default new UserService();
