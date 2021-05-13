import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tabelloneService from '@/services/tabellone.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tabellone = await tabelloneService.getTabellone(queryParams);
            res.json(tabellone);
        })
    );

    router.get(
        '/cronology',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const tabellone = await tabelloneService.getTabelloneCronology();
            res.json(tabellone);
        })
    );

    router.get(
        '/tsv',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const filePath = await tabelloneService.getTabelloneTsv(queryParams);
            res.download(filePath, 'tabellone.tsv');
        })
    );

    router.get(
        '/xlsx',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const filePath = await tabelloneService.getTabelloneXlsx(queryParams);
            res.download(filePath, 'tabellone.xlsx');
        })
    );

    return router;
}
