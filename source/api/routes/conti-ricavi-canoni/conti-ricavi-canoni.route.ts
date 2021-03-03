import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contoRicaviCanoni from '@/services/conto-ricavi-canoni.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

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

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contoRicaviCanoni.postContoRicaviCanoni(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await contoRicaviCanoni.putContoRicaviCanoniById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contoRicaviCanoni.delContoRicaviCanoniById(id);
            res.json();
        })
    );

    router.delete(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await contoRicaviCanoni.delContoRicaviCanoniByCodice(codice);
            res.json();
        })
    );

    return router;
}
