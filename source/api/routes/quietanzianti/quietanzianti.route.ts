import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import quietanzianteService from '@/services/quietanziante.service';

export default function (): Router {
    const router = Router();
    router.use(authenticate);

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const quietanzianti = await quietanzianteService.getQuietanzianti();
            res.json(quietanzianti);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const quietanziante = await quietanzianteService.getQuietanzianteById(id);
            res.json(quietanziante);
        })
    );

    router.get(
        '/value/:value',
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            const quietanziante = await quietanzianteService.getQuietanzianteByValue(value);
            res.json(quietanziante);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const id = await quietanzianteService.postQuietanziante(body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await quietanzianteService.putQuietanzianteById(id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            await quietanzianteService.delQuietanzianteById(id);
            res.json();
        })
    );

    router.delete(
        '/value/:value',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const value = req.params.value;
            await quietanzianteService.delQuietanzianteByValue(value);
            res.json();
        })
    );

    return router;
}
