import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import fabbricatoService from '@/services/fabbricato.service';

import stanzeRouter from './stanze/stanze.route';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fabbricati = await fabbricatoService.getFabbricati(queryParams);
            res.json(fabbricati);
        })
    );

    router.get(
        '/:fid',
        asyncHandler(async (req, res) => {
            const id = +req.params.fid;
            const queryParams = req.query;
            const fabbricati = await fabbricatoService.getFabbricatoById(id, queryParams);
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
        '/:fid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.fid;
            const body = req.body;
            await fabbricatoService.putFabbricatoById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:fid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.fid;
            const body = req.body;
            await fabbricatoService.patchFabbricatoById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:fid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.fid;
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

    router.use('/:fid/stanze', stanzeRouter());

    return router;
}
