import * as Bull from 'bull';

import { loadTabellone, addTabellone } from './tabellone.job';

export class Jobs {
    private readonly queueName = 'jobs';
    private readonly bull: Bull.Queue;

    constructor() {
        this.bull = new Bull(this.queueName);
    }

    public async loadJobs(): Promise<void> {
        await loadTabellone(this.bull);
    }

    public async addTabellone(): Promise<void> {
        return await addTabellone(this.bull);
    }
}
export default new Jobs();
