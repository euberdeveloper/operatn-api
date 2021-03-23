import { Router } from 'express';
import * as passport from 'passport';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contrattoService from '@/services/contratto.service';

import bolletteRouter from './bollette/bollette.route';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContratti(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/da-firmare',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContrattiDaFirmare(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/firmati',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const contratti = await contrattoService.getContrattiFirmati(queryParams);
            res.json(contratti);
        })
    );

    router.get(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const queryParams = req.query;
            const contratto = await contrattoService.getContrattoById(id, queryParams);
            res.json(contratto);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await contrattoService.postContratto(body);
            res.json(id);
        })
    );

    router.use('/:cid/bollette', bolletteRouter());

    return router;
}
