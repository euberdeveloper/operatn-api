import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import tipiTariffaService from '@/services/tipo-tariffa.service';

export default function (): Router {
    const router = Router();
    router.use(authenticate);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const tipiTariffa = await tipiTariffaService.getTipiTariffa();
            res.json(tipiTariffa);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const tipiTariffa = await tipiTariffaService.getTipoTariffaById(id);
            res.json(tipiTariffa);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            const tipiTariffa = await tipiTariffaService.getTipoTariffaByValue(value);
            res.json(tipiTariffa);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await tipiTariffaService.postTipoTariffa(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await tipiTariffaService.putTipoTariffaById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await tipiTariffaService.delTipoTariffaById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await tipiTariffaService.delTipoTariffaByValue(value);
            res.json();
        })
    );

    return router;
}
