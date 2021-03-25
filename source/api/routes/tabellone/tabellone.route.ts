import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tabelloneService from '@/services/tabellone.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (_req, res) => {
            await tabelloneService.getTabellone();
            res.json();
        })
    );

    return router;
}