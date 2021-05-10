import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contoRicavi from '@/services/conto-ricavi.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const contiRicaviConsumi = await contoRicavi.getContiRicavi();
            res.json(contiRicaviConsumi);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const contoRicaviConsumi = await contoRicavi.getContoRicaviById(id);
            res.json(contoRicaviConsumi);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const contoRicaviConsumi = await contoRicavi.getContoRicaviByCodice(codice);
            res.json(contoRicaviConsumi);
        })
    );

    router.get(
        '/conto/:conto',
        asyncHandler(async (req, res) => {
            const conto = req.params.conto;
            const contoRicaviConsumi = await contoRicavi.getContoRicaviByConto(conto);
            res.json(contoRicaviConsumi);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contoRicavi.postContoRicavi(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await contoRicavi.putContoRicaviById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contoRicavi.delContoRicaviById(id);
            res.json();
        })
    );

    router.delete(
        '/codice/:codice',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await contoRicavi.delContoRicaviByCodice(codice);
            res.json();
        })
    );

    router.delete(
        '/conto/:conto',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const conto = req.params.conto;
            await contoRicavi.delContoRicaviByConto(conto);
            res.json();
        })
    );

    return router;
}
