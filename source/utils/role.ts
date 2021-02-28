import { UserNotAuthorizedError } from '@/errors';
import { RuoloUtente, Utente } from '@prisma/client';
import { Handler } from 'express';

export default function (roles: RuoloUtente | RuoloUtente[]): Handler {
    return (req, _res) => {
        if (!Array.isArray(roles)) {
            roles = [roles];
        }

        const user = req.user as Utente;

        if (!roles.includes(user.ruolo)) {
            throw new UserNotAuthorizedError();
        }
    };
}
