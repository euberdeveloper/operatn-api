import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contoRicaviCanoni from '@/services/conto-ricavi-canoni.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const contiRicaviConsumi = await contoRicaviCanoni.getContiRicaviCanoni();
            res.json(contiRicaviConsumi);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const contoRicaviConsumi = await contoRicaviCanoni.getContoRicaviCanoniById(id);
            res.json(contoRicaviConsumi);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const contoRicaviConsumi = await contoRicaviCanoni.getContoRicaviCanoniByCodice(codice);
            res.json(contoRicaviConsumi);
        })
    );

    router.get(
        '/sigla/:sigla',
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const contoRicaviConsumi = await contoRicaviCanoni.getContoRicaviCanoniBySigla(sigla);
            res.json(contoRicaviConsumi);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contoRicaviCanoni.postContoRicaviCanoni(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await contoRicaviCanoni.putContoRicaviCanoniById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contoRicaviCanoni.delContoRicaviCanoniById(id);
            res.json();
        })
    );

    router.delete(
        '/codice/:codice',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await contoRicaviCanoni.delContoRicaviCanoniByCodice(codice);
            res.json();
        })
    );

    router.delete(
        '/sigla/:sigla',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await contoRicaviCanoni.delContoRicaviCanoniBySigla(sigla);
            res.json();
        })
    );

    return router;
}
