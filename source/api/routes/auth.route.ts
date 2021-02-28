import { Router } from 'express';
import * as passport from 'passport';

import { Utente } from '@prisma/client';
import utenteService from '@/services/utente.service';

export default function (): Router {
    const router = Router();

    router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
        const user = req.user as Utente;
        const response = utenteService.generateAuthResponse(user);
        res.json(response);
    });

    return router;
}
