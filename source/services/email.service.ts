import { createTransport, Transporter } from 'nodemailer';
import { pugEngine } from 'nodemailer-pug-engine';

import { EmailError } from '@/errors';
import logger from '@/utils/logger';
import CONFIG from '@/config';

enum EmailTemplates {
    TABELLONE = 'tabellone'
}

export class EmailService {
    private readonly mailer: Transporter;

    constructor() {
        this.mailer = createTransport({
            service: 'Gmail',
            auth: {
                type: CONFIG.EMAIL.TYPE,
                user: CONFIG.EMAIL.USER,
                clientId: CONFIG.EMAIL.CLIENT_ID,
                clientSecret: CONFIG.EMAIL.CLIENT_SECRET,
                refreshToken: CONFIG.EMAIL.REFRESH_TOKEN,
                accessToken: CONFIG.EMAIL.ACCESS_TOKEN,
                expires: CONFIG.EMAIL.EXPIRES
            }
        } as any);
        this.mailer.use(
            'compile',
            pugEngine({
                templateDir: CONFIG.EMAIL.TEMPLATES_PATH
            })
        );
    }

    private async sendEmail(
        to: string | string[],
        subject: string,
        template: EmailTemplates,
        ctx: any,
        attachments: any[] = []
    ) {
        try {
            await this.mailer.sendMail({
                from: CONFIG.EMAIL.USER,
                to,
                subject,
                template,
                ctx: { ...ctx },
                attachments: [...attachments]
            } as any);
        } catch (error) {
            logger.error('Email error', error);
            throw new EmailError();
        }
    }

    public async tabellone(to: string[], filePath: string, fileName: string): Promise<void> {
        const subject = 'OperaTN - Tabellone';
        const template = EmailTemplates.TABELLONE;
        const ctx = { fileName };
        const attachments = [
            {
                path: filePath,
                filename: fileName
            }
        ];

        await this.sendEmail(to, subject, template, ctx, attachments);
    }
}

export default new EmailService();
