import { Router } from 'express';
import logger from '@/utils/logger';

import authRoute from './routes/auth/auth.route';
import fabbricatiRoute from './routes/fabbricati/fabbricati.route';
import tipiFabbricatoRoute from './routes/tipi-fabbricato/tipi-fabbricato.route';
import tipiStanzaRoute from './routes/tipi-stanza/tipi-stanza.route';
import contiRicaviConsumiRoute from './routes/conti-ricavi-consumi/conti-ricavi-consumi.route';

export default function (): Router {
    const router = Router();

    logger.debug('/auth');
    router.use('/auth', authRoute());

    logger.debug('/fabbricati');
    router.use('/fabbricati', fabbricatiRoute());

    logger.debug('/tipi-fabbricato');
    router.use('/tipi-fabbricato', tipiFabbricatoRoute());

    logger.debug('/tipi-stanza');
    router.use('/tipi-stanza', tipiStanzaRoute());

    logger.debug('/conti-ricavi-consumi');
    router.use('/conti-ricavi-consumi', contiRicaviConsumiRoute());

    return router;
}
