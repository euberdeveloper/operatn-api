/* eslint-disable @typescript-eslint/naming-convention */
import { createTransport, Transporter } from 'nodemailer';
import { pugEngine } from 'nodemailer-pug-engine';

import { EmailError } from '@/errors';
import logger from '@/utils/logger';
import CONFIG from '@/config';
import { Utente } from '@prisma/client';

const EmailTemplates = {
    TABELLONE: 'tabellone',
    USERS: {
        CREATION: 'users/creation',
        DELETION: 'users/deletion',
        PASSWORD_RECOVERY: 'users/password-recovery'
    }
};

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
        template: string,
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

    public async utenteCreated(to: string, utente: Pick<Utente, 'nomeUtente' | 'email' | 'ruolo'>): Promise<void> {
        const subject = 'OperaTN - Creato utente collegato al tuo indirizzo email';
        const template = EmailTemplates.USERS.CREATION;
        const ctx = utente;

        await this.sendEmail(to, subject, template, ctx);
    }

    public async utenteDeleted(to: string, utente: Pick<Utente, 'nomeUtente' | 'email' | 'ruolo'>): Promise<void> {
        const subject = 'OperaTN - Eliminato utente collegato a questo indirizzo email';
        const template = EmailTemplates.USERS.DELETION;
        const ctx = utente;

        await this.sendEmail(to, subject, template, ctx);
    }

    public async utentePasswordRecovery(
        to: string,
        utente: Pick<Utente, 'nomeUtente' | 'ruolo' | 'tokenRecuperoPassword'>
    ): Promise<void> {
        const subject = 'OperaTN - Richiesto recupero password';
        const template = EmailTemplates.USERS.PASSWORD_RECOVERY;
        const ctx = {
            ...utente,
            link: `${CONFIG.FRONTEND.URL}/password-recovery/${utente.tokenRecuperoPassword as string}`
        };

        await this.sendEmail(to, subject, template, ctx);
    }
}

export default new EmailService();
