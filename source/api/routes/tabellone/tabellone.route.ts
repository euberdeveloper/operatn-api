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

    router.get(
        '/tsv',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (_req, res) => {
            const filePath = await tabelloneService.getTabelloneTsv();
            res.download(filePath, 'tabellone.tsv');
        })
    );

    router.get(
        '/xlsx',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (_req, res) => {
            const filePath = await tabelloneService.getTabelloneXlsx();
            res.download(filePath, 'tabellone.xlsx');
        })
    );

    return router;
}
