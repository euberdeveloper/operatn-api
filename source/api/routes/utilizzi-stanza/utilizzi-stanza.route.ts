import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import utilizzoStanzaService from '@/services/utilizzo-stanza.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const tipiStanza = await utilizzoStanzaService.getUtilizziStanza();
            res.json(tipiStanza);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const utilizzoStanza = await utilizzoStanzaService.getUtilizzoStanzaById(id);
            res.json(utilizzoStanza);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            const utilizzoStanza = await utilizzoStanzaService.getUtilizzoStanzaByValue(value);
            res.json(utilizzoStanza);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await utilizzoStanzaService.postUtilizzoStanza(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await utilizzoStanzaService.putUtilizzoStanzaById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await utilizzoStanzaService.delUtilizzoStanzaById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await utilizzoStanzaService.delUtilizzoStanzaByValue(value);
            res.json();
        })
    );

    return router;
}
