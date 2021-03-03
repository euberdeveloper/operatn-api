import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipiRataService from '@/services/tipo-rata.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const tipiRata = await tipiRataService.getTipiRata();
            res.json(tipiRata);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const tipiRata = await tipiRataService.getTipoRataById(id);
            res.json(tipiRata);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            const tipiRata = await tipiRataService.getTipoRataByValue(value);
            res.json(tipiRata);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipiRataService.postTipoRata(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipiRataService.putTipoRataById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipiRataService.delTipoRataById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await tipiRataService.delTipoRataByValue(value);
            res.json();
        })
    );

    return router;
}
