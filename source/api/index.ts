import { Router } from 'express';
import logger from '@/utils/logger';
import authRoute from './routes/auth.route';

export default function (): Router {
    const router = Router();

    logger.debug('/auth');
    router.use('/auth', authRoute());

    return router;
}
