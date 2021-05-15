import * as express from 'express';
import * as cors from 'cors';
import CONFIG from '@/config';

export default function (app: express.Express): void {
    if (CONFIG.NODE_ENV === 'development') {
        app.use(cors());
        app.use('/api/stored', express.static(CONFIG.STORED.PATH));
    }
}
