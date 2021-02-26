import * as cors from 'cors';
import { Express } from 'express';
import logger from '@/services/logger';

export default function loadMorgan(app: Express): void {
    logger.debug('Load cors');
    app.use(cors());
}
