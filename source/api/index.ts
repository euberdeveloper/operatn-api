import { Router } from 'express';
import logger from '@/utils/logger';

import authRouter from './routes/auth/auth.route';
import fabbricatiRouter from './routes/fabbricati/fabbricati.route';
import tipiFabbricatoRouter from './routes/tipi-fabbricato/tipi-fabbricato.route';
import tipiStanzaRouter from './routes/tipi-stanza/tipi-stanza.route';
import utilizziStanzaRouter from './routes/utilizzi-stanza/utilizzi-stanza.route';
import contiRicaviConsumiRouter from './routes/conti-ricavi-consumi/conti-ricavi-consumi.route';
import contiRicaviCanoniRouter from './routes/conti-ricavi-canoni/conti-ricavi-canoni.route';
import tipiTariffaRouter from './routes/tipi-tariffa/tipi-tariffa.route';
import tipiBollettaRouter from './routes/tipi-bolletta/tipi-bolletta.route';
import tipiOspiteRouter from './routes/tipi-ospite/tipi-ospite.route';
import quietanziantiRouter from './routes/quietanzianti/quietanzianti.route';
import tariffeRouter from './routes/tariffe/tariffe.route';
import diparitmentiUnitnRouter from './routes/dipartimenti-unitn/dipartimenti-unitn.route';
import presidentiRouter from './routes/presidenti/presidenti.route';
import ospitiRouter from './routes/ospiti/ospiti.route';
import contrattiRouter from './routes/contratti/contratti.route';
import utentiRouter from './routes/utenti/utenti.route';

export default function (): Router {
    const router = Router();

    logger.debug('/auth');
    router.use('/auth', authRouter());

    logger.debug('/fabbricati');
    router.use('/fabbricati', fabbricatiRouter());

    logger.debug('/tipi-fabbricato');
    router.use('/tipi-fabbricato', tipiFabbricatoRouter());

    logger.debug('/tipi-stanza');
    router.use('/tipi-stanza', tipiStanzaRouter());

    logger.debug('/utilizzi-stanza');
    router.use('/utilizzi-stanza', utilizziStanzaRouter());

    logger.debug('/conti-ricavi-consumi');
    router.use('/conti-ricavi-consumi', contiRicaviConsumiRouter());

    logger.debug('/conti-ricavi-canoni');
    router.use('/conti-ricavi-canoni', contiRicaviCanoniRouter());

    logger.debug('/tipi-tariffa');
    router.use('/tipi-tariffa', tipiTariffaRouter());

    logger.debug('/tipi-bolletta');
    router.use('/tipi-bolletta', tipiBollettaRouter());

    logger.debug('/tipi-ospite');
    router.use('/tipi-ospite', tipiOspiteRouter());

    logger.debug('/quietanzianti');
    router.use('/quietanzianti', quietanziantiRouter());

    logger.debug('/tariffe');
    router.use('/tariffe', tariffeRouter());

    logger.debug('/dipartimenti-unitn');
    router.use('/dipartimenti-unitn', diparitmentiUnitnRouter());

    logger.debug('/presidenti');
    router.use('/presidenti', presidentiRouter());

    logger.debug('/ospiti');
    router.use('/ospiti', ospitiRouter());

    logger.debug('/contratti');
    router.use('/contratti', contrattiRouter());

    logger.debug('/utenti');
    router.use('/utenti', utentiRouter());

    return router;
}
