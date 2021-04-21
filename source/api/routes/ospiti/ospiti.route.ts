import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import ospiteService from '@/services/ospite.service';

export default function (): Router {
    const router = Router();
    router.use(authenticate);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const ospiti = await ospiteService.getOspiti(queryParams);
            res.json(ospiti);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const ospite = await ospiteService.getOspiteById(id, queryParams);
            res.json(ospite);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await ospiteService.postOspite(body);
            res.json(id);
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await ospiteService.patchOspiteById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await ospiteService.delOspiteById(id);
            res.json();
        })
    );

    return router;
}
