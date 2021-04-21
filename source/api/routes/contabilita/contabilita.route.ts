import { Router } from 'express';
import { authenticate } from '@/utils/auth';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import contabilitaService from '@/services/contabilita.service';

export default function (): Router {
    const router = Router();
    router.use(authenticate);

    router.post(
        '/bollette',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            await contabilitaService.sendBollette(queryParams);
            res.json();
        })
    );

    return router;
}
