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
            console.log('ciao')
            const id = await fabbricatoService.postFabbricato(body);
            console.log('id', id)
            res.json(id);
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
        '/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await fabbricatoService.delFabbricatoByCodice(codice);
            res.json();
        })
    );

    return router;
}
