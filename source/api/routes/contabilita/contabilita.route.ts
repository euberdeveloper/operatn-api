import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contabilitaService from '@/services/contabilita.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/cronology',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (_req, res) => {
            const result = await contabilitaService.getContabilitaCronology();
            res.json(result);
        })
    );

    router.get(
        '/bollette',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const result = await contabilitaService.getBollette(queryParams);
            res.json(result);
        })
    );

    router.get(
        '/bollette/count',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const result = await contabilitaService.getBolletteCount(queryParams);
            res.json(result);
        })
    );

    router.post(
        '/bollette',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const result = await contabilitaService.sendBollette(queryParams);
            res.json(result);
        })
    );

    return router;
}
