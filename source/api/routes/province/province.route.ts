import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import provinciaService from '@/services/provincia.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const province = await provinciaService.getProvince();
            res.json(province);
        })
    );

    router.get(
        '/:sigla',
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const provincia = await provinciaService.getProvinciaBySigla(sigla);
            res.json(provincia);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const sigla = await provinciaService.postProvincia(body);
            res.json(sigla);
        })
    );

    router.put(
        '/:sigla',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const body = req.body;
            await provinciaService.putProvinciaBySigla(sigla, body);
            res.json();
        })
    );

    router.patch(
        '/:sigla',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            const body = req.body;
            await provinciaService.patchProvinciaBySigla(sigla, body);
            res.json();
        })
    );

    router.delete(
        '/:sigla',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const sigla = req.params.sigla;
            await provinciaService.delProvinciaBySigla(sigla);
            res.json();
        })
    );

    return router;
}
