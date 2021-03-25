import { Queue } from 'bull';

export const JOB_NAME = 'tabellone';

export async function loadTabellone(bull: Queue): Promise<void> {
    console.log('ciao');
    await Promise.resolve('a');
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    bull.process(JOB_NAME, async job => {
        const data = await Promise.resolve(job.data);
        console.log('Data is', data);
        return null;
    });
    console.log('come va');
}

export async function addTabellone(bull: Queue): Promise<void> {
    const cron = '0 0 8 * * *';
    await bull.add(JOB_NAME, 'data', { repeat: { cron } });
}
