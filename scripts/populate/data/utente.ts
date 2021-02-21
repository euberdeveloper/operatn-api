import { Utente, RuoloUtente } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import CONFIG from '../../config';

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, CONFIG.SECURITY.SALT_ROUNDS);
}

const UTENTI: Omit<Utente, 'uid' | 'token_recupero_password'>[] = [
    {
        nome_utente: 'admin',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nome_utente: 'root',
        password: hashPassword('password'),
        email: 'euberspam@gmail.com',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nome_utente: 'carlinux',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nome_utente: 'sportello',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nome_utente: 'sportello2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nome_utente: 'portineria',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nome_utente: 'portineria2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.PORTINERIA
    },
    {
        nome_utente: 'alloggi',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.CONTROLLO_ALLOGGI
    },
    {
        nome_utente: 'alloggi2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.CONTROLLO_ALLOGGI
    }
];

export default UTENTI;