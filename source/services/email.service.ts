import { createTransport, Transporter } from 'nodemailer';
import { pugEngine } from 'nodemailer-pug-engine';
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
        await this.mailer.sendMail({
            from: CONFIG.EMAIL.USER,
            to,
            subject,
            template,
            ctx: { ...ctx },
            attachments: [...attachments]
        } as any);
    }

    public async tabellone(): Promise<void> {
        const to = 'euberdeveloper@gmail.com';
        const subject = 'OperaTN - Tabellone';
        const template = EmailTemplates.TABELLONE;
        const ctx = { name: 'Eugenio' };

        await this.sendEmail(to, subject, template, ctx);
    }
}

export default new EmailService();
