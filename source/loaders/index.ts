import { Express } from 'express';

import loadMorgan from './morgan';
import loadHelmet from './helmet';
import loadCors from './cors';
import loadBodyParser from './bodyParser';
import logger from '@/services/logger';

export default function load(app: Express): void {
    logger.hr();
    logger.info('Loading middlewares');
    logger.br();

    loadMorgan(app);
    loadCors(app);
    loadHelmet(app);
    loadBodyParser(app);

    logger.br();
    logger.success('All middlewares loaded');
    logger.hr();
}
