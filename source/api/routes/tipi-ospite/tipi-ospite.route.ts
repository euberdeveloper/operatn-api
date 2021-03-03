import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipoOspite from '@/services/tipo-ospite.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contiRicaviConsumi = await tipoOspite.getTipiOspite(queryParams);
            res.json(contiRicaviConsumi);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const contoRicaviConsumi = await tipoOspite.getTipoOspiteById(id, queryParams);
            res.json(contoRicaviConsumi);
        })
    );

    router.get(
        '/sigla/:sigla',
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const queryParams = req.query;
            const contoRicaviConsumi = await tipoOspite.getTipoOspiteBySigla(sigla, queryParams);
            res.json(contoRicaviConsumi);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipoOspite.postTipoOspite(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoOspite.putTipoOspiteById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoOspite.patchTipoOspiteById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipoOspite.delTipoOspiteById(id);
            res.json();
        })
    );

    router.delete(
        '/sigla/:sigla',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await tipoOspite.delTipoOspiteBySigla(sigla);
            res.json();
        })
    );

    return router;
}
