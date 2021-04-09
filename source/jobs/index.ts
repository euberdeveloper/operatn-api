import * as Bull from 'bull';
import CONFIG from '@/config';
import { loadTabellone, addTabellone } from './tabellone.job';

export class Jobs {
    private readonly queueName = 'jobs';
    private readonly bull: Bull.Queue;

    constructor() {
        this.bull = new Bull(this.queueName, {
            redis: {
                host: CONFIG.REDIS.HOST,
                port: +CONFIG.REDIS.PORT
            }
        });
    }

    public loadJobs(): void {
        loadTabellone(this.bull);
    }

    public async addTabellone(): Promise<void> {
        return await addTabellone(this.bull);
    }
}
export default new Jobs();
