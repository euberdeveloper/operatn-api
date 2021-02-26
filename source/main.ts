import './services/moduleAlias';

import * as express from 'express';
import CONFIG from '@/config';
import loadApp from '@/loaders';
import logger from '@/services/logger';

logger.hr();
logger.warning('OPERA-TN API');
const app = express();
loadApp(app);

logger.info('Starting server...');
const port = CONFIG.SERVER.PORT;
app.listen(port, () => {
    logger.success(`Server listening on port ${port}`);
    logger.hr();
});
