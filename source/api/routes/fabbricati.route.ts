import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import fabbricatoService from '@/services/fabbricato.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const fabbricati = await fabbricatoService.getFabbricati();
            res.json(fabbricati);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const fabbricati = await fabbricatoService.getFabbricatoById(id);
            res.json(fabbricati);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const fabbricati = await fabbricatoService.getFabbricatoByCodice(codice);
            res.json(fabbricati);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await fabbricatoService.postFabbricato(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await fabbricatoService.putFabbricatoById(id, body);
            res.json();
        })
    );

    router.put(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            const id = await fabbricatoService.putFabbricatoByCodice(codice, body);
            res.json(id);
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await fabbricatoService.patchFabbricatoById(id, body);
            res.json();
        })
    );

    router.patch(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            await fabbricatoService.patchFabbricatoByCodice(codice, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await fabbricatoService.delFabbricatoById(id);
            res.json();
        })
    );

    router.delete(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await fabbricatoService.delFabbricatoByCodice(codice);
            res.json();
        })
    );

    return router;
}
