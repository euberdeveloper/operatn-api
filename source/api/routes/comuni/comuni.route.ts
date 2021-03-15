import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import comuneService from '@/services/comune.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const comuni = await comuneService.getComuni();
            res.json(comuni);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const comune = await comuneService.getComuneById(id);
            res.json(comune);
        })
    );

    router.get(
        '/codice-catastale/:codiceCatastale',
        asyncHandler(async (req, res) => {
            const codiceCatastale = req.params.codiceCatastale;
            const comune = await comuneService.getComuneByCodiceCatastale(codiceCatastale);
            res.json(comune);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await comuneService.postComune(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await comuneService.putComuneById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await comuneService.patchComuneById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await comuneService.delComuneById(id);
            res.json();
        })
    );

    router.delete(
        '/codice-catastale/:codiceCatastale',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codiceCatastale = req.params.codiceCatastale;
            await comuneService.delComuneByCodiceCatastale(codiceCatastale);
            res.json();
        })
    );

    return router;
}
