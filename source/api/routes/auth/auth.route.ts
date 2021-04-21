import { Router } from 'express';
import { authenticateLocal } from '@/utils/auth';

import { Utente } from '@prisma/client';
import authService from '@/services/auth.service';

export default function (): Router {
    const router = Router();

    router.post('/login', authenticateLocal, (req, res) => {
        const user = req.user as Utente;
        const response = authService.generateAuthResponse(user);
        res.json(response);
    });

    return router;
}
