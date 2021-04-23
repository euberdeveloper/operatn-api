import emitter from '@/subscribers';
import logger from '@/utils/logger';

export default function loadJobs(): void {
    logger.debug('Initialize subscribers');
    emitter.loadSubscribers();
}
