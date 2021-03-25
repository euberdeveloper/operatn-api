import jobs from '@/jobs';
import logger from '@/utils/logger';

export default async function loadJobs(): Promise<void> {
    logger.debug('Initialize jobs');
    jobs.loadJobs();
    logger.debug('Start tabellone job');
    await jobs.addTabellone();
}
