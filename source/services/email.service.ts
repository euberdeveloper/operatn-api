/* eslint-disable @typescript-eslint/naming-convention */
import { createTransport, Transporter } from 'nodemailer';
import { pugEngine } from 'nodemailer-pug-engine';

import { EmailError } from '@/errors';
import { Utente } from '@/services/prisma.service';
import filesystemService from '@/services/filesystem.service';
import logger from '@/utils/logger';
import { pdfContratto, pdfGetBuffer } from '@/utils/pdf';
import CONFIG from '@/config';

const EmailTemplates = {
    TABELLONE: 'tabellone',
    CONTRATTI: {
        FIRMA: 'contratti/firma',
        FIRMA_ACCETTA: 'contratti/firma_accetta',
        FIRMA_RIFIUTA: 'contratti/firma_rifiuta',
        FIRMATO: 'contratti/firmato'
    },
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

    public async contrattiFirma(contratto: any, token: string): Promise<void> {
        const to = contratto.contrattiSuOspite[0].ospite.email;
        const subject = 'OperaTN - Firma il tuo contratto';
        const template = EmailTemplates.CONTRATTI.FIRMA;
        const ctx = {
            nome: contratto.contrattiSuOspite[0].ospite.persona.nome,
            cognome: contratto.contrattiSuOspite[0].ospite.persona.cognome,
            link: `${CONFIG.FRONTEND.URL}/contratti/email-token/${token}/firma`
        };

        const pdfCreator = pdfContratto(contratto);
        const pdfBuffer = await pdfGetBuffer(pdfCreator);
        const filePath = await filesystemService.saveTempRandomName(pdfBuffer, 'pdf');

        const attachedPdf = {
            path: filePath,
            filename: 'contratto.pdf'
        };

        await this.sendEmail(to, subject, template, ctx, [attachedPdf]);
    }

    public async contrattiFirmato(contratto: any): Promise<void> {
        const to = contratto.contrattiSuOspite[0].ospite.email;
        const subject = 'OperaTN - Contratto firmato con successo';
        const template = EmailTemplates.CONTRATTI.FIRMATO;
        const ctx = {
            nome: contratto.contrattiSuOspite[0].ospite.persona.nome,
            cognome: contratto.contrattiSuOspite[0].ospite.persona.cognome
        };

        await this.sendEmail(to, subject, template, ctx);
    }

    public async contrattiFirmaAccetta(contratto: any): Promise<void> {
        const to = contratto.contrattiSuOspite[0].ospite.email;
        const subject = 'OperaTN - Firma contratto accettata';
        const template = EmailTemplates.CONTRATTI.FIRMA_ACCETTA;
        const ctx = {
            nome: contratto.contrattiSuOspite[0].ospite.persona.nome,
            cognome: contratto.contrattiSuOspite[0].ospite.persona.cognome
        };

        await this.sendEmail(to, subject, template, ctx);
    }

    public async contrattiFirmaRifiuta(contratto: any): Promise<void> {
        const to = contratto.contrattiSuOspite[0].ospite.email;
        const subject = 'OperaTN - Firma contratto rifiutata';
        const template = EmailTemplates.CONTRATTI.FIRMA_RIFIUTA;
        const ctx = {
            nome: contratto.contrattiSuOspite[0].ospite.persona.nome,
            cognome: contratto.contrattiSuOspite[0].ospite.persona.cognome
        };

        await this.sendEmail(to, subject, template, ctx);
    }
}

export default new EmailService();
