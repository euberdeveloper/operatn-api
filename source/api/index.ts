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
import tipiRataRouter from './routes/tipi-rata/tipi-rata.route';
import tipiBollettaRouter from './routes/tipi-bolletta/tipi-bolletta.route';
import quietanziantiRouter from './routes/quietanzianti/quietanzianti.route';

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

    logger.debug('/tipi-rata');
    router.use('/tipi-rata', tipiRataRouter());

    logger.debug('/tipi-bolletta');
    router.use('/tipi-bolletta', tipiBollettaRouter());

    logger.debug('/quietanzianti');
    router.use('/quietanzianti', quietanziantiRouter());

    return router;
}
