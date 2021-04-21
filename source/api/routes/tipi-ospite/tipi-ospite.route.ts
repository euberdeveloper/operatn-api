import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipoOspiteService from '@/services/tipo-ospite.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tipiOspite = await tipoOspiteService.getTipiOspite(queryParams);
            res.json(tipiOspite);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const tipoOspite = await tipoOspiteService.getTipoOspiteById(id, queryParams);
            res.json(tipoOspite);
        })
    );

    router.get(
        '/sigla/:sigla',
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const queryParams = req.query;
            const tipoOspite = await tipoOspiteService.getTipoOspiteBySigla(sigla, queryParams);
            res.json(tipoOspite);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipoOspiteService.postTipoOspite(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoOspiteService.putTipoOspiteById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoOspiteService.patchTipoOspiteById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipoOspiteService.delTipoOspiteById(id);
            res.json();
        })
    );

    router.delete(
        '/sigla/:sigla',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await tipoOspiteService.delTipoOspiteBySigla(sigla);
            res.json();
        })
    );

    return router;
}
