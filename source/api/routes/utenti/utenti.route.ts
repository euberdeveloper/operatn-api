import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import utenteService from '@/services/utente.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const utenti = await utenteService.getUtenti();
            res.json(utenti);
        })
    );

    router.get(
        '/:uid',
        asyncHandler(async (req, res) => {
            const uid = req.params.uid;
            const utente = await utenteService.getUtenteByUid(uid);
            res.json(utente);
        })
    );

    router.get(
        '/username/:username',
        asyncHandler(async (req, res) => {
            const username = req.params.username;
            const utente = await utenteService.getUtenteByNomeUtente(username);
            res.json(utente);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const uid = await utenteService.postUtente(body);
            res.json(uid);
        })
    );

    router.put(
        '/:uid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const uid = req.params.uid;
            const body = req.body;
            await utenteService.putUtenteByUid(uid, body);
            res.json();
        })
    );

    router.patch(
        '/:uid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const uid = req.params.uid;
            const body = req.body;
            await utenteService.patchUtenteByUid(uid, body);
            res.json();
        })
    );

    router.patch(
        '/username/:username',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const username = req.params.username;
            const body = req.body;
            await utenteService.patchUtenteByNomeUtente(username, body);
            res.json();
        })
    );

    router.delete(
        '/:uid',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const uid = req.params.uid;
            await utenteService.delUtenteByUid(uid);
            res.json();
        })
    );

    router.delete(
        '/username/:username',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const username = req.params.username;
            await utenteService.delUtenteByNomeUtente(username);
            res.json();
        })
    );

    return router;
}
