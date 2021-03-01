import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipoFabbricatoService from '@/services/tipo-fabbricato.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const tipiFabbricato = await tipoFabbricatoService.getTipiFabbricato();
            res.json(tipiFabbricato);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const tipiFabbricato = await tipoFabbricatoService.getTipoFabbricatoById(id);
            res.json(tipiFabbricato);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            const tipiFabbricato = await tipoFabbricatoService.getTipoFabbricatoByValue(value);
            res.json(tipiFabbricato);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipoFabbricatoService.postTipoFabbricato(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoFabbricatoService.putTipoFabbricatoById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipoFabbricatoService.delTipoFabbricatoById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await tipoFabbricatoService.delTipoFabbricatoByValue(value);
            res.json();
        })
    );

    return router;
}
