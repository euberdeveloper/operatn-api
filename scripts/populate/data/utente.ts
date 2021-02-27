import { Utente, RuoloUtente } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import CONFIG from '../../config';

function hashPassword(password: string): string {
    return bcrypt.hashSync(password, CONFIG.SECURITY.SALT_ROUNDS);
}

const UTENTI: Omit<Utente, 'uid' | 'tokenRecuperoPassword'>[] = [
    {
        nomeUtente: 'admin',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nomeUtente: 'root',
        password: hashPassword('password'),
        email: 'euberspam@gmail.com',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nomeUtente: 'carlinux',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.ADMIN
    },
    {
        nomeUtente: 'sportello',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nomeUtente: 'sportello2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nomeUtente: 'portineria',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.SPORTELLO
    },
    {
        nomeUtente: 'portineria2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.PORTINERIA
    },
    {
        nomeUtente: 'alloggi',
        password: hashPassword('password'),
        email: 'euberdeveloper@gmail.com',
        ruolo: RuoloUtente.CONTROLLO_ALLOGGI
    },
    {
        nomeUtente: 'alloggi2',
        password: hashPassword('password'),
        email: 'carlo.agostini@unitn.it',
        ruolo: RuoloUtente.CONTROLLO_ALLOGGI
    }
];

export default UTENTI;