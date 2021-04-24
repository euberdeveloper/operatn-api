import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente, Utente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import utenteService from '@/services/utente.service';

export default function (): Router {
    const router = Router();

    router.get(
        '/',
        authenticateJwt,
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (_req, res) => {
            const utenti = await utenteService.getUtenti();
            res.json(utenti);
        })
    );

    router.get('/me', authenticateJwt, (req, res) => {
        const user = req.user;
        const parsedUser = utenteService.purgeUtente(user);
        res.json(parsedUser);
    });

    router.get(
        '/:uid',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const uid = req.params.uid;
            const utente = await utenteService.getUtenteByUid(uid);
            res.json(utente);
        })
    );

    router.get(
        '/username/:username',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const username = req.params.username;
            const utente = await utenteService.getUtenteByNomeUtente(username);
            res.json(utente);
        })
    );

    router.post(
        '/',
        authenticateJwt,
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const uid = await utenteService.postUtente(body);
            res.json(uid);
        })
    );

    router.patch(
        '/:uid',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const uid = req.params.uid;
            const body = req.body;
            await utenteService.patchUtenteByUid(utente, uid, body);
            res.json();
        })
    );

    router.patch(
        '/username/:username',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const username = req.params.username;
            const body = req.body;
            await utenteService.patchUtenteByNomeUtente(utente, username, body);
            res.json();
        })
    );

    router.patch(
        '/:uid/ruolo',
        authenticateJwt,
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const uid = req.params.uid;
            const body = req.body;
            await utenteService.changeUtenteRoleByUid(utente, uid, body);
            res.json();
        })
    );

    router.patch(
        '/username/:username/ruolo',
        authenticateJwt,
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const username = req.params.username;
            const body = req.body;
            await utenteService.changeUtenteRoleByNomeUtente(utente, username, body);
            res.json();
        })
    );

    router.patch(
        '/:uid/password',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const uid = req.params.uid;
            const body = req.body;
            await utenteService.changeUtentePasswordByUid(utente, uid, body);
            res.json();
        })
    );

    router.patch(
        '/username/:username/password',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const username = req.params.username;
            const body = req.body;
            await utenteService.changeUtentePasswordByNomeUtente(utente, username, body);
            res.json();
        })
    );

    router.post(
        '/password-recovery',
        asyncHandler(async (req, res) => {
            const body = req.body;
            await utenteService.askPasswordRecovery(body);
            res.json();
        })
    );

    router.post(
        '/password-recovery/:token',
        asyncHandler(async (req, res) => {
            const token = req.params.token;
            const body = req.body;
            await utenteService.recoverPassword(token, body);
            res.json();
        })
    );

    router.delete(
        '/:uid',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const uid = req.params.uid;
            await utenteService.delUtenteByUid(utente, uid);
            res.json();
        })
    );

    router.delete(
        '/username/:username',
        authenticateJwt,
        asyncHandler(async (req, res) => {
            const utente = req.user as Utente;
            const username = req.params.username;
            await utenteService.delUtenteByNomeUtente(utente, username);
            res.json();
        })
    );

    return router;
}
