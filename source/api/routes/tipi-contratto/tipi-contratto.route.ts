import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipoContrattoService from '@/services/tipo-contratto.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tipiContratto = await tipoContrattoService.getTipiContratto(queryParams);
            res.json(tipiContratto);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const id = +req.params.id;
            const tipoContratto = await tipoContrattoService.getTipoContrattoById(id, queryParams);
            res.json(tipoContratto);
        })
    );

    router.get(
        '/sigla/:sigla',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const sigla = req.params.sigla;
            const tipoContratto = await tipoContrattoService.getTipoContrattoBySigla(sigla, queryParams);
            res.json(tipoContratto);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipoContrattoService.postTipoContratto(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipoContrattoService.putTipoContrattoById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipoContrattoService.delTipoContrattoById(id);
            res.json();
        })
    );

    router.delete(
        '/sigla/:sigla',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await tipoContrattoService.delTipoContrattoBySigla(sigla);
            res.json();
        })
    );

    return router;
}
