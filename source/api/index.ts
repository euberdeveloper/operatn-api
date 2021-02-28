import { Router } from 'express';
import logger from '@/utils/logger';

import authRoute from './routes/auth.route';
import fabbricatiRoute from './routes/fabbricati.route';

export default function (): Router {
    const router = Router();

    logger.debug('/auth');
    router.use('/auth', authRoute());

    logger.debug('/fabbricati');
    router.use('/fabbricati', fabbricatiRoute());

    return router;
}
