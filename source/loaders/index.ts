import { Express } from 'express';

import logger from '@/utils/logger';

import loadMorgan from './morgan';
import loadHelmet from './helmet';
import loadCors from './cors';
import loadBodyParser from './bodyParser';
import loadPassport from './passport';

export default function load(app: Express): void {
    logger.hr();
    logger.info('Loading middlewares');
    logger.br();

    loadMorgan(app);
    loadCors(app);
    loadHelmet(app);
    loadBodyParser(app);
    loadPassport(app);

    logger.br();
    logger.success('All middlewares loaded');
    logger.hr();
}
