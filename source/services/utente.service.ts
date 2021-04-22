import prisma, { Prisma } from '@/services/prisma.service';
import * as bcrypt from 'bcrypt';
import * as Joi from 'joi';

import { NotFoundError, UserNotAuthorizedError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';
import { RuoloUtente, Utente } from '@prisma/client';

import CONFIG from '@/config';

export class UtenteService extends TableService {
    protected readonly model: Prisma.UtenteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [];
    protected readonly includeQueryParametersSoftCheck = [];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        uid: Joi.string().min(1).optional(),
        nomeUtente: Joi.string()
            .min(1)
            .regex(/^[\w\.]+$/),
        password: Joi.string().min(8).max(16),
        email: Joi.string().email(),
        ruolo: Joi.string().valid(...Object.values(RuoloUtente))
    };
    private readonly changeRoleValidator = Joi.object({
        ruolo: Joi.string()
            .valid(...Object.values(RuoloUtente))
            .required()
    }).required();
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = [];
    protected patchValidatorExcludes = ['ruolo'];

    public readonly selectedColumns = { uid: true, nomeUtente: true, email: true, ruolo: true };

    constructor() {
        super();
        this.model = prisma.utente;
    }

    private hashPassword(password: string): string {
        return bcrypt.hashSync(password, CONFIG.SECURITY.SALT_ROUNDS);
    }

    public purgeUtente(utente: any): Pick<Utente, 'uid' | 'nomeUtente' | 'email' | 'ruolo'> {
        return Object.keys(this.selectedColumns).reduce<any>((acc, key) => ({ ...acc, [key]: utente[key] }), {});
    }

    public async getUtenti() {
        return this.model.findMany({ select: this.selectedColumns });
    }

    public async getUtenteByUid(uid: string) {
        this.validateStringParam(uid, 'uid');

        const utente = await this.model.findUnique({ where: { uid }, select: this.selectedColumns });
        if (utente === null) {
            throw new NotFoundError('Utente not found');
        }
        return utente;
    }

    public async getUtenteByNomeUtente(nomeUtente: string) {
        this.validateStringParam(nomeUtente, 'nomeUtente');

        const utente = await this.model.findUnique({ where: { nomeUtente }, select: this.selectedColumns });
        if (utente === null) {
            throw new NotFoundError('Utente not found');
        }
        return utente;
    }

    public async postUtente(body: any): Promise<string> {
        return handlePrismaError(async () => {
            const utente = this.validatePostBody(body);
            const created = await this.model.create({
                data: { ...utente, password: this.hashPassword(utente.password) }
            });
            return created.uid;
        });
    }

    public async patchUtenteByUid(utenteRichiesta: Utente, uid: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(uid, 'uid');

            if (utenteRichiesta.uid !== uid && utenteRichiesta.ruolo !== RuoloUtente.ADMIN) {
                throw new UserNotAuthorizedError('You are not the user you are trying to change');
            }

            const utente = this.validatePatchBody(body);
            utente.password = utente.password ? this.hashPassword(utente.password) : undefined;
            await this.checkIfExistsByParam(uid, 'uid', 'Utente');
            await this.model.update({
                where: { uid },
                data: utente
            });
        });
    }

    public async patchUtenteByNomeUtente(utenteRichiesta: Utente, nomeUtente: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(nomeUtente, 'nomeUtente');

            if (utenteRichiesta.nomeUtente !== nomeUtente && utenteRichiesta.ruolo !== RuoloUtente.ADMIN) {
                throw new UserNotAuthorizedError('You are not the user you are trying to change');
            }

            const utente = this.validatePatchBody(body);
            await this.checkIfExistsByParam(nomeUtente, 'nomeUtente', 'Utente');
            await this.model.update({
                where: { nomeUtente },
                data: utente
            });
        });
    }

    public async changeUtenteRoleByUid(utenteRichiesta: Utente, uid: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            const { ruolo } = this.validateBody(this.changeRoleValidator, body);

            const vecchioUtente = await this.getUtenteByUid(uid);
            if (utenteRichiesta.uid !== uid && vecchioUtente.ruolo === RuoloUtente.ADMIN) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            await this.model.update({
                where: { uid },
                data: { ruolo }
            });
        });
    }

    public async changeUtenteRoleByNomeUtente(utenteRichiesta: Utente, nomeUtente: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            const { ruolo } = this.validateBody(this.changeRoleValidator, body);

            const vecchioUtente = await this.getUtenteByNomeUtente(nomeUtente);
            if (utenteRichiesta.nomeUtente !== nomeUtente && vecchioUtente.ruolo === RuoloUtente.ADMIN) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            await this.model.update({
                where: { nomeUtente },
                data: { ruolo }
            });
        });
    }

    public async delUtenteByUid(uid: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(uid, 'uid');
            await this.checkIfExistsByParam(uid, 'uid', 'Utente');
            await this.model.delete({ where: { uid } });
        });
    }

    public async delUtenteByNomeUtente(nomeUtente: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(nomeUtente, 'nomeUtente');
            await this.checkIfExistsByParam(nomeUtente, 'nomeUtente', 'Utente');
            await this.model.delete({ where: { nomeUtente } });
        });
    }
}

export default new UtenteService();
