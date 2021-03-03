import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contoRicaviConsumi from '@/services/conto-ricavi-consumi.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const tipiStanza = await contoRicaviConsumi.getContiRicaviConsumi();
            res.json(tipiStanza);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const tipoStanza = await contoRicaviConsumi.getContoRicaviConsumiById(id);
            res.json(tipoStanza);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const tipoStanza = await contoRicaviConsumi.getContoRicaviConsumiByCodice(codice);
            res.json(tipoStanza);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contoRicaviConsumi.postContoRicaviConsumi(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await contoRicaviConsumi.putContoRicaviConsumiById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contoRicaviConsumi.delContoRicaviConsumiById(id);
            res.json();
        })
    );

    router.delete(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await contoRicaviConsumi.delContoRicaviConsumiByCodice(codice);
            res.json();
        })
    );

    return router;
}
