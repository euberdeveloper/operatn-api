import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contoRicaviConsumi from '@/services/conto-ricavi-consumi.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const contiRicaviConsumi = await contoRicaviConsumi.getContiRicaviConsumi();
            res.json(contiRicaviConsumi);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const contoRicaviCanoni = await contoRicaviConsumi.getContoRicaviConsumiById(id);
            res.json(contoRicaviCanoni);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const contoRicaviCanoni = await contoRicaviConsumi.getContoRicaviConsumiByCodice(codice);
            res.json(contoRicaviCanoni);
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
