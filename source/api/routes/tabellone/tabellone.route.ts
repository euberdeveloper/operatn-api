import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tabelloneService from '@/services/tabellone.service';

export default function (): Router {
    const router = Router();
    router.use(authenticate);

    router.get(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tabellone = await tabelloneService.getTabellone(queryParams);
            res.json(tabellone);
        })
    );

    router.get(
        '/tsv',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const filePath = await tabelloneService.getTabelloneTsv(queryParams);
            res.download(filePath, 'tabellone.tsv');
        })
    );

    router.get(
        '/xlsx',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const filePath = await tabelloneService.getTabelloneXlsx(queryParams);
            res.download(filePath, 'tabellone.xlsx');
        })
    );

    return router;
}
