import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tariffaService from '@/services/tariffa.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tariffe = await tariffaService.getTariffe(queryParams);
            res.json(tariffe);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const tariffa = await tariffaService.getTariffaById(id, queryParams);
            res.json(tariffa);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tariffaService.postTariffa(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tariffaService.putTariffaById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.RAGIONERIA]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tariffaService.patchTariffaById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tariffaService.delTariffaById(id);
            res.json();
        })
    );

    return router;
}
