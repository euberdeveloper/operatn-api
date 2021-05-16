import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contrattoService from '@/services/contratto.service';

import bolletteRouter from './bollette/bollette.route';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContratti(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/da-firmare',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContrattiDaFirmare(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/da-visionare',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContrattiDaVisionare(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/firmati',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContrattiFirmati(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const contratto = await contrattoService.getContrattoById(id, queryParams);
            res.json(contratto);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contrattoService.postContratto(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = +req.params.id;
            await contrattoService.putContratto(id, body);
            res.json();
        })
    );

    router.post(
        '/:id/email-firma',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contrattoService.postEmailFirma(id);
            res.json();
        })
    );

    router.post(
        '/:id/chiusura-anticipata',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = +req.params.id;
            await contrattoService.postChiusuraAnticipata(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await contrattoService.delContrattoById(id);
            res.json();
        })
    );

    router.use('/:cid/bollette', bolletteRouter());

    return router;
}
