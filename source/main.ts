import './utils/moduleAlias';

import * as express from 'express';
import CONFIG from '@/config';
import loadApp from '@/loaders';
import logger from '@/utils/logger';
import router from '@/api';

logger.hr();
logger.warning('OPERA-TN API');

const app = express();
loadApp(app);
app.use(router());

logger.info('Starting server...');
const port = CONFIG.SERVER.PORT;
app.listen(port, () => {
    logger.success(`Server listening on port ${port}`);
    logger.hr();
});
