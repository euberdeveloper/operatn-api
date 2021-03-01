import { Router } from 'express';
import logger from '@/utils/logger';

import authRoute from './routes/auth.route';
import fabbricatiRoute from './routes/fabbricati.route';
import tipiFabbricatoRoute from './routes/tipi-fabbricato.route';

export default function (): Router {
    const router = Router();

    logger.debug('/auth');
    router.use('/auth', authRoute());

    logger.debug('/fabbricati');
    router.use('/fabbricati', fabbricatiRoute());

    logger.debug('/tipi-fabbricato');
    router.use('/tipi-fabbricato', tipiFabbricatoRoute());

    return router;
}
