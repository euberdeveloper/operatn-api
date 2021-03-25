import { Queue } from 'bull';
import tabelloneService from '@/services/tabellone.service';
import emailService from '@/services/email.service';
import CONFIG from '@/config';

export const JOB_NAME = 'tabellone';

export function loadTabellone(bull: Queue): void {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    bull.process(JOB_NAME, async () => {
        const recipients = await tabelloneService.getRecipients();
        const { filePath, fileName } = await tabelloneService.storeTabelloneTsv();
        await emailService.tabellone(recipients, filePath, fileName);
    });
}

export async function addTabellone(bull: Queue): Promise<void> {
    const cron = CONFIG.JOBS.TABELLONE_CRON;
    await bull.removeRepeatableByKey(JOB_NAME);
    await bull.add(JOB_NAME, null, { repeat: { cron } });
}
