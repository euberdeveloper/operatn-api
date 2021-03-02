import { Router } from 'express';

import { RuoloUtente } from '@prisma/client';
import permission from '@/utils/permission';
import asyncHandler from '@/utils/asyncHandler';
import fabbricatoService from '@/services/fabbricato.service';
import stanzaService from '@/services/stanza.service';

export default function (): Router {
    const router = Router({ mergeParams: true });

    router.get(
        '/',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fid = +req.params.fid;
            const stanze = await stanzaService.getStanze(fid, queryParams);
            res.json(stanze);
        })
    );

    router.get(
        '/:id',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const id = +req.params.id;
            const fid = +req.params.fid;
            const stanze = await stanzaService.getStanzaById(fid, id, queryParams);
            res.json(stanze);
        })
    );

    router.get(
        '/unita-immobiliare/:unitaImmobiliare/numero-stanza/:numeroStanza',
        asyncHandler(async (req, res) => {
            const queryParams = req.query;
            const fid = +req.params.fid;
            const { unitaImmobiliare, numeroStanza } = req.params;
            const stanze = await stanzaService.getStanzaByEdificioAndNumero(
                fid,
                unitaImmobiliare,
                numeroStanza,
                queryParams
            );
            res.json(stanze);
        })
    );

    router.post(
        '/',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const body = req.body;
            const fid = +req.params.fid;
            const id = await stanzaService.postStanza(fid, body);
            res.json(id);
        })
    );

    router.put(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await fabbricatoService.putFabbricatoById(id, body);
            res.json();
        })
    );

    router.put(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            const id = await fabbricatoService.putFabbricatoByCodice(codice, body);
            res.json(id);
        })
    );

    router.patch(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const id = +req.params.id;
            const body = req.body;
            await fabbricatoService.patchFabbricatoById(id, body);
            res.json();
        })
    );

    router.patch(
        '/codice/:codice',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const codice = req.params.codice;
            const body = req.body;
            await fabbricatoService.patchFabbricatoByCodice(codice, body);
            res.json();
        })
    );

    router.delete(
        '/:id',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const id = +req.params.id;
            await stanzaService.delStanzaById(fid, id);
            res.json();
        })
    );

    router.delete(
        '/unita-immobiliare/:unitaImmobiliare/numero-stanza/:numeroStanza',
        permission(RuoloUtente.ADMIN),
        asyncHandler(async (req, res) => {
            const fid = +req.params.fid;
            const { unitaImmobiliare, numeroStanza } = req.params;
            await stanzaService.delStanzaByEdificioAndNumero(fid, unitaImmobiliare, numeroStanza);
            res.json();
        })
    );

    return router;
}
