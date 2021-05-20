import { Router } from 'express';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import manutenzioneService from '@/services/manutenzione.service';

export default function (): Router {
    const router = Router({ mergeParams: true });

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const stanze = await manutenzioneService.getManutenzioni(fid, sid, queryParams);
            res.json(stanze);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = +req.params.id;
            const stanze = await manutenzioneService.getManutenzioneById(fid, sid, id, queryParams);
            res.json(stanze);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = await manutenzioneService.postManutenzione(fid, sid, body);
            res.json(id);
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN, RuoloUtente.SPORTELLO]),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = +req.params.id;
            await manutenzioneService.delManutenzioneById(fid, sid, id);
            res.json();
        })
    );

    return router;
}
