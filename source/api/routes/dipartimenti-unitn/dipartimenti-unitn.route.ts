import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import dipartimentoUnitnService from '@/services/dipartimento-unitn.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const dipartimentiUnitn = await dipartimentoUnitnService.getDipartimentiUnitn();
            res.json(dipartimentiUnitn);
        })
    );

    router.get(
        '/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const dipartimentoUnitn = await dipartimentoUnitnService.getDipartimentoUnitnByCodice(codice);
            res.json(dipartimentoUnitn);
        })
    );

    router.get(
        '/sigla/:sigla',
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const dipartimentoUnitn = await dipartimentoUnitnService.getDipartimentoUnitnBySigla(sigla);
            res.json(dipartimentoUnitn);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const codice = await dipartimentoUnitnService.postDipartimentoUnitn(body);
            res.json(codice);
        })
    );

    router.put(
        '/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            await dipartimentoUnitnService.putDipartimentoUnitnByCodice(codice, body);
            res.json();
        })
    );

    router.patch(
        '/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            await dipartimentoUnitnService.patchDipartimentoUnitnByCodice(codice, body);
            res.json();
        })
    );

    router.patch(
        '/sigla/:sigla',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const body = req.body;
            await dipartimentoUnitnService.patchDipartimentoUnitnBySigla(sigla, body);
            res.json();
        })
    );

    router.delete(
        '/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            await dipartimentoUnitnService.delDipartimentoUnitnByCodice(codice);
            res.json();
        })
    );

    router.delete(
        '/sigla/:sigla',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await dipartimentoUnitnService.delDipartimentoUnitnBySigla(sigla);
            res.json();
        })
    );

    return router;
}
