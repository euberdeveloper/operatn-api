import { Router } from 'express';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import postoLettoService from '@/services/posto-letto.service';

export default function (): Router {
    const router = Router({ mergeParams: true });

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const stanze = await postoLettoService.getPostiLetto(fid, sid, queryParams);
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
            const stanze = await postoLettoService.getPostoLettoById(fid, sid, id, queryParams);
            res.json(stanze);
        })
    );

    router.post(
        '/',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = await postoLettoService.postPostoLetto(fid, sid, body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = +req.params.id;
            const body = req.body;
            await postoLettoService.putPostoLettoById(fid, sid, id, body);
            res.json();
        })
    );

    router.patch(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = +req.params.id;
            const body = req.body;
            await postoLettoService.patchPostoLettoById(fid, sid, id, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission([RuoloUtente.ROOT, RuoloUtente.ADMIN]),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const sid = +req.params.sid;
            const id = +req.params.id;
            await postoLettoService.delPostoLettoById(fid, sid, id);
            res.json();
        })
    );

    return router;
}
