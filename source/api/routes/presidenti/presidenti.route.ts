import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import presidenteService from '@/services/presidente.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const presidenti = await presidenteService.getPresidenti(queryParams);
            res.json(presidenti);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const presidente = await presidenteService.getPresidenteById(id, queryParams);
            res.json(presidente);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await presidenteService.postPresidente(body);
            res.json(id);
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await presidenteService.patchPresidenteById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await presidenteService.delPresidenteById(id);
            res.json();
        })
    );

    return router;
}
