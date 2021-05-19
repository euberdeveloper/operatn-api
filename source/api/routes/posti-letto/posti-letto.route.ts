import { Router } from 'express';
import { authenticateJwt } from '@/utils/auth';

import asyncHandler from '@/utils/asyncHandler';
import postoLettoService from '@/services/posto-letto.service';

export default function (): Router {
    const router = Router();
    router.use(authenticateJwt);

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const stanze = await postoLettoService.getAllPostiLetto(queryParams);
            res.json(stanze);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const id = +req.params.id;
            const stanze = await postoLettoService.getPostoLettoByIdGeneral(id, queryParams);
            res.json(stanze);
        })
    );

    return router;
}
