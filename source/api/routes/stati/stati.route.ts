import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import statoService from '@/services/stato.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const stati = await statoService.getStati();
            res.json(stati);
        })
    );

    router.get(
        '/:codiceIso',
        asyncHandler(async (req, res) => {
            const codiceIso = req.params.codiceIso;
            const stato = await statoService.getStatoByCodiceIso(codiceIso);
            res.json(stato);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const codiceIso = await statoService.postStato(body);
            res.json(codiceIso);
        })
    );

    router.put(
        '/:codiceIso',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codiceIso = req.params.codiceIso;
            const body = req.body;
            await statoService.putStatoByCodiceIso(codiceIso, body);
            res.json();
        })
    );

    router.patch(
        '/:codiceIso',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codiceIso = req.params.codiceIso;
            const body = req.body;
            await statoService.patchStatoByCodiceIso(codiceIso, body);
            res.json();
        })
    );

    router.delete(
        '/:codiceIso',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codiceIso = req.params.codiceIso;
            await statoService.delStatoByCodiceIso(codiceIso);
            res.json();
        })
    );

    return router;
}
