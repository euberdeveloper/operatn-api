import { Router } from 'express';
import * as passport from 'passport';

import asyncHandler from '@/utils/asyncHandler';
import fabbricatoService from '@/services/fabbricato.service';

export default function (): Router {
    const router = Router();
    router.use(passport.authenticate('jwt', { session: false }));

    router.get(
        '/',
        asyncHandler(async (_req, res) => {
            const fabbricati = await fabbricatoService.getFabbricati();
            res.json(fabbricati);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const fabbricati = await fabbricatoService.getFabbricatoById(id);
            res.json(fabbricati);
        })
    );

    router.get(
        '/codice/:codice',
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const fabbricati = await fabbricatoService.getFabbricatoByCodice(codice);
            res.json(fabbricati);
        })
    );

    return router;
}
