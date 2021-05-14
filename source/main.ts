import './utils/moduleAlias';

import * as express from 'express';
import { Loader } from '@/loaders';
import router from '@/api';
import logger from '@/utils/logger';
import CONFIG from '@/config';

async function startServer(): Promise<void> {
    logger.hr();
    logger.warning('OPERA-TN API');

    const app = express();

    /* TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/
    // TODO: to remove, because stored assets will be served statically by nginx. So the ngxinx, same way of the frontend, will use a docker volume for this stored folder and serve it under /stored.
    // eslint-disable-next-line
    app.use(require('cors')())
    app.use('/api/stored', express.static('./stored'));
    /* TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO */

    const loader = new Loader(app, router);
    loader.loadMiddlewares();
    loader.loadRouter();
    loader.loadErrorHandler();
    loader.loadSubscribers();
    await loader.loadJobs();

    logger.info('Starting server...');
    const port = CONFIG.SERVER.PORT;
    app.listen(port, () => {
        logger.success(`Server listening on port ${port}`);
        logger.hr();
    });
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
startServer();
