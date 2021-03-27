import { Queue } from 'bull';
import tabelloneService from '@/services/tabellone.service';
import emailService from '@/services/email.service';
import CONFIG from '@/config';

export const JOB_NAME = 'tabellone';

export function loadTabellone(bull: Queue): void {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    bull.process(JOB_NAME, async () => {
        const recipients = await tabelloneService.getRecipients();
        const { filePath, fileName } = await tabelloneService.storeTabelloneXlsx();
        await emailService.tabellone(Array.from(recipients.values()), filePath, fileName);
    });
}

export async function addTabellone(bull: Queue): Promise<void> {
    await tabelloneService.storeTabelloneXlsx();
    const cron = CONFIG.JOBS.TABELLONE_CRON;

    const oldJobsKeys = (await bull.getRepeatableJobs()).filter(j => j.name === JOB_NAME).map(j => j.key);
    for (const oldJobKey of oldJobsKeys) {
        await bull.removeRepeatableByKey(oldJobKey);
    }

    await bull.add(JOB_NAME, null, { repeat: { cron } });
}
