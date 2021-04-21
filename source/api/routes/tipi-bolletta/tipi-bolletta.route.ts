import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipiBollettaService from '@/services/tipo-bolletta.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const tipiBolletta = await tipiBollettaService.getTipiBolletta(queryParams);
            res.json(tipiBolletta);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const id = +req.params.id;
            const tipiBolletta = await tipiBollettaService.getTipoBollettaById(id, queryParams);
            res.json(tipiBolletta);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const value = req.params.value;
            const tipiBolletta = await tipiBollettaService.getTipoBollettaByValue(value, queryParams);
            res.json(tipiBolletta);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipiBollettaService.postTipoBolletta(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipiBollettaService.putTipoBollettaById(id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipiBollettaService.patchTipoBollettaById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipiBollettaService.delTipoBollettaById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await tipiBollettaService.delTipoBollettaByValue(value);
            res.json();
        })
    );

    return router;
}
