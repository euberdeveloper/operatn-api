import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Utente } from '@prisma/client';
import * as UtenteModel from '@/models/utente';
import CONFIG from '@/config';

interface AuthResponse {
    token: string;
    user: Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'>;
}

export async function verifyUsernameAndPassword(username: string, password: string): Promise<Utente> {
    const utente = await UtenteModel.findByNomeUtente(username);
    if (utente === null) {
        throw new Error('Wrong username or password');
    }
    await bcrypt.compare(password, utente.password);
    return utente;
}

export async function verifyUserWithJwt(jwtPayload: any): Promise<Utente> {
    const uid: string | null = jwtPayload?.sub;
    if (uid === null) {
        throw new Error('Invalid token');
    }
    const utente = await UtenteModel.findByUid(uid);
    if (utente === null) {
        throw new Error('Invalid token');
    }
    return utente;
}

export function generateAuthResponse(user: Utente): AuthResponse {
    const sub = user.uid;
    const token = jwt.sign({ sub }, CONFIG.SECURITY.JWT.PASSWORD, { expiresIn: CONFIG.SECURITY.JWT.EXPIRATION });

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
