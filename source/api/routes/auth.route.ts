import { Router } from 'express';
import * as passport from 'passport';

import { Utente } from '@prisma/client';
import * as UtenteService from '@/services/utente';

export default function (): Router {
    const router = Router();

    router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
        const user = req.user as Utente | null;

        if (user === null) {
            return;
        }

        const response = UtenteService.generateAuthResponse(user);

        res.json(response);
    });

    return router;
}
