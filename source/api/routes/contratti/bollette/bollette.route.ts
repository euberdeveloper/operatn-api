import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import bollettaService from '@/services/bolletta.service';

export default function (): Router {
    const router = Router({ mergeParams: true });
    router.use(authenticate);

    router.get(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const cid = +req.params.cid;
            const queryParams = req.query;
            const bollette = await bollettaService.getBollette(cid, queryParams);
            res.send(bollette);
        })
    );

    router.get(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const cid = +req.params.cid;
            const id = +req.params.id;
            const queryParams = req.query;
            const bolletta = await bollettaService.getBollettaById(cid, id, queryParams);
            res.send(bolletta);
        })
    );

    return router;
}
