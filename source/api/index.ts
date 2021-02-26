import { Router } from 'express';
import logger from '@/utils/logger';
import authRoute from './routes/auth.route';

export default function (): Router {
    logger.hr();
    logger.info('Handling routes...');
    const router = Router();
    logger.br();

    logger.debug('/auth');
    router.use('/auth', authRoute());

    logger.br();
    logger.success('Handled routes');
    logger.hr();
    return router;
}
