import prisma, { Prisma, RuoloUtente, Utente } from '@/services/prisma.service';
import * as bcrypt from 'bcrypt';
import * as Joi from 'joi';
import { v4 as uuid } from 'uuid';

import emitter from '@/subscribers';
import handlePrismaError from '@/utils/handlePrismaError';
import { InvalidTokenError, NotFoundError, UniqueRootError, UserNotAuthorizedError } from '@/errors';

import { TableService } from './table.service';
import emailService from './email.service';

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
            .regex(/^[\w.]+$/),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/),
        email: Joi.string().email(),
        ruolo: Joi.string().valid(...Object.values(RuoloUtente))
    };
    private readonly changeRoleValidator = Joi.object({
        ruolo: Joi.string()
            .valid(...Object.values(RuoloUtente))
            .required()
    }).required();
    private readonly changePasswordValidator = Joi.object({
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/)
    }).required();
    private readonly askPasswordRecoveryValidator = Joi.object({
        nomeUtente: Joi.string().min(1)
    }).required();
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['ruolo', 'password'];
    protected patchValidatorExcludes = ['ruolo', 'password'];

    public readonly selectedColumns = { uid: true, nomeUtente: true, email: true, ruolo: true, dataCreazione: true };

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
            const utente: Utente = this.validatePostBody(body);

            // You cannot create a root user
            if (utente.ruolo === RuoloUtente.ROOT) {
                throw new UniqueRootError();
            }

            const created = await this.model.create({
                data: { ...utente, password: this.hashPassword(utente.password) }
            });

            emitter.emitUserCreated(utente);

            return created.uid;
        });
    }

    public async patchUtenteByUid(utenteRichiesta: Utente, uid: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(uid, 'uid');

            const vecchioUtente = await this.getUtenteByUid(uid);

            // If you are the user itself, you can always change the data
            if (utenteRichiesta.uid !== uid) {
                // If you are not root or admin, you can change only your self data
                if (![RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(utenteRichiesta.ruolo as any)) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to change');
                }
                // If you are not root, you cannot change data of other admins.
                if (
                    [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any) &&
                    utenteRichiesta.ruolo !== RuoloUtente.ROOT
                ) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to change');
                }
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

            const vecchioUtente = await this.getUtenteByNomeUtente(nomeUtente);

            // If you are the user itself, you can always change the data
            if (utenteRichiesta.nomeUtente !== nomeUtente) {
                // If you are not root or admin, you can change only your self data
                if (![RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(utenteRichiesta.ruolo as any)) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to change');
                }
                // If you are not root, you cannot change data of other admins.
                if (
                    [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any) &&
                    utenteRichiesta.ruolo !== RuoloUtente.ROOT
                ) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to change');
                }
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

            // Only root can change the role of other admins. Admin can change roles of less powerful users.
            if (
                utenteRichiesta.ruolo !== RuoloUtente.ROOT &&
                [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any)
            ) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            // Root user cannot be downgraded
            if (vecchioUtente.ruolo === RuoloUtente.ROOT) {
                throw new UniqueRootError();
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

            // Only root can change the role of other admins. Admin can change roles of less powerful users.
            if (
                utenteRichiesta.ruolo !== RuoloUtente.ROOT &&
                [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any)
            ) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            // Root user cannot be downgraded
            if (vecchioUtente.ruolo === RuoloUtente.ROOT) {
                throw new UniqueRootError();
            }

            await this.model.update({
                where: { nomeUtente },
                data: { ruolo }
            });
        });
    }

    public async changeUtentePasswordByUid(utenteRichiesta: Utente, uid: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            const { password } = this.validateBody(this.changePasswordValidator, body);

            // Only root can change the password of everyone. All the other users can change only their password.
            if (utenteRichiesta.ruolo !== RuoloUtente.ROOT && utenteRichiesta.uid !== uid) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            await this.model.update({
                where: { uid },
                data: { password: this.hashPassword(password) }
            });
        });
    }

    public async changeUtentePasswordByNomeUtente(
        utenteRichiesta: Utente,
        nomeUtente: string,
        body: any
    ): Promise<void> {
        return handlePrismaError(async () => {
            const { password } = this.validateBody(this.changePasswordValidator, body);

            // Only root can change the password of everyone. All the other users can change only their password.
            if (utenteRichiesta.ruolo !== RuoloUtente.ROOT && utenteRichiesta.nomeUtente !== nomeUtente) {
                throw new UserNotAuthorizedError('You are not authorized to change the role of another admin');
            }

            await this.model.update({
                where: { nomeUtente },
                data: { password: this.hashPassword(password) }
            });
        });
    }

    public async askPasswordRecovery(body: any): Promise<void> {
        return handlePrismaError(async () => {
            const { nomeUtente } = this.validateBody(this.askPasswordRecoveryValidator, body);
            const vecchioUtente = await this.getUtenteByNomeUtente(nomeUtente);
            const tokenRecuperoPassword = uuid();

            await emailService.utentePasswordRecovery(vecchioUtente.email, {
                nomeUtente,
                ruolo: vecchioUtente.ruolo,
                tokenRecuperoPassword
            });

            await this.model.update({
                where: { nomeUtente },
                data: { tokenRecuperoPassword }
            });
        });
    }

    public async getRecoveryPasswordUtente(tokenRecuperoPassword: string) {
        return handlePrismaError(async () => {
            const utente = await this.model.findFirst({
                where: { tokenRecuperoPassword },
                select: this.selectedColumns
            });

            if (utente === null) {
                throw new NotFoundError('Utente not found');
            }

            return utente;
        });
    }

    public async recoverPassword(tokenRecuperoPassword: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            const { password } = this.validateBody(this.changePasswordValidator, body);

            const utente = await this.model.findFirst({
                where: { tokenRecuperoPassword }
            });

            if (utente === null) {
                throw new InvalidTokenError();
            }

            await this.model.update({
                where: { uid: utente.uid },
                data: { password: this.hashPassword(password), tokenRecuperoPassword: null }
            });
        });
    }

    public async delUtenteByUid(utenteRichiesta: Utente, uid: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(uid, 'uid');
            const vecchioUtente = await this.getUtenteByUid(uid);

            // If you are the user itself, you can always delete yourself
            if (utenteRichiesta.uid !== uid) {
                // If you are not root or admin, delete only your self data
                if (![RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(utenteRichiesta.ruolo as any)) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to delete');
                }
                // If you are not root, you cannot delete other admins.
                if (
                    [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any) &&
                    utenteRichiesta.ruolo !== RuoloUtente.ROOT
                ) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to delete');
                }
            }

            // Root user cannot be deleted
            if (vecchioUtente.ruolo === RuoloUtente.ROOT) {
                throw new UniqueRootError();
            }

            emitter.emitUserDeleted(vecchioUtente as Utente);

            await this.model.delete({ where: { uid } });
        });
    }

    public async delUtenteByNomeUtente(utenteRichiesta: Utente, nomeUtente: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(nomeUtente, 'nomeUtente');

            const vecchioUtente = await this.getUtenteByNomeUtente(nomeUtente);

            // If you are the user itself, you can always delete yourself
            if (utenteRichiesta.nomeUtente !== nomeUtente) {
                // If you are not root or admin, delete only your self data
                if (![RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(utenteRichiesta.ruolo as any)) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to delete');
                }
                // If you are not root, you cannot delete other admins.
                if (
                    [RuoloUtente.ROOT, RuoloUtente.ADMIN].includes(vecchioUtente.ruolo as any) &&
                    utenteRichiesta.ruolo !== RuoloUtente.ROOT
                ) {
                    throw new UserNotAuthorizedError('You are not the user you are trying to delete');
                }
            }

            // Root user cannot be deleted
            if (vecchioUtente.ruolo === RuoloUtente.ROOT) {
                throw new UniqueRootError();
            }

            emitter.emitUserDeleted(vecchioUtente as Utente);

            await this.model.delete({ where: { nomeUtente } });
        });
    }
}

export default new UtenteService();
