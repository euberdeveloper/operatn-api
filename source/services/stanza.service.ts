import { PrismaClient, Prisma, Stanza } from '@prisma/client';
import * as Joi from 'joi';

import { InvalidBodyError, InvalidIdError, InvalidPathParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';
import handlePrismaError from '@/utils/handlePrismaError';

export class StanzaService {
    private readonly stanzaModel: Prisma.StanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    private readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1).alphanum(),
        nome: Joi.string().min(1),
        idTipoStanza: Joi.number().integer().positive(),
        provincia: Joi.string().length(2).alphanum(),
        comune: Joi.string().min(1),
        cap: Joi.string().length(5).pattern(/^\d+$/),
        indirizzo: Joi.string().min(1),
        nCivico: Joi.string().min(1),
        oldCode: Joi.number()
    };

    private readonly idValidator = Joi.number().integer().positive();
    private readonly codeValidator = Joi.string().min(1).required();

    get postBodyValidator(): Joi.ObjectSchema<Stanza> {
        return Joi.object<Stanza>(this.bodyValidator).required().options({ presence: 'required' });
    }
    get putBodyValidator(): Joi.ObjectSchema<Omit<Stanza, 'id'>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'required' });
    }
    get patchBodyValidator(): Joi.ObjectSchema<Partial<Omit<Stanza, 'id'>>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    constructor() {
        const prisma = new PrismaClient();
        this.stanzaModel = prisma.stanza;
    }

    private validateId(id: any): void {
        const error = this.idValidator.validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError();
        }
    }

    private validateCodice(codice: any): void {
        const error = this.codeValidator.validate(codice).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidPathParamError('Invalid codice');
        }
    }

    private validateBody<T>(schema: Joi.Schema, body: any): T {
        const result = schema.validate(body);

        if (result.error) {
            logger.warning('Validation error', result.error.message);
            throw new InvalidBodyError();
        }

        return result.value;
    }

    private validatePostBody(body: any): Stanza & { id?: number } {
        return this.validateBody(this.postBodyValidator, body);
    }

    private validatePutBody(body: any): Omit<Stanza, 'id'> {
        return this.validateBody(this.putBodyValidator, body);
    }

    private validatePatchBody(body: any): Partial<Omit<Stanza, 'id'>> {
        return this.validateBody(this.patchBodyValidator, body);
    }

    public async getStanze(fid: number): Promise<Stanza[]> {
        this.validateId(fid);
        return this.stanzaModel.findMany({
            where: {
                idFabbricato: fid
            }
        });
    }

    public async getStanzaById(id: number): Promise<Stanza> {
        this.validateId(id);

        const stanza = await this.stanzaModel.findUnique({ where: { id } });
        if (stanza === null) {
            throw new NotFoundError('Stanza not found');
        }
        return stanza;
    }

    public async getStanzaByCodice(codice: string): Promise<Stanza> {
        this.validateCodice(codice);

        const stanza = await this.stanzaModel.findFirst({ where: { id: +codice } });
        if (stanza === null) {
            throw new NotFoundError('Stanza not found');
        }
        return stanza;
    }

    public async postStanza(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const stanza = this.validatePostBody(body);
            const created = await this.stanzaModel.create({ data: stanza });
            return created.id;
        });
    }

    public async putStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const stanza = this.validatePutBody(body);
            await this.stanzaModel.upsert({
                where: { id },
                create: { id, ...stanza },
                update: stanza
            });
        });
    }

    // TODO
    public async putStanzaByCodice(codice: string, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateCodice(codice);
            const stanza = this.validatePutBody(body);
            const result = await this.stanzaModel.upsert({
                where: { id: 0 },
                create: stanza,
                update: stanza
            });
            return result.id;
        });
    }

    public async patchStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const stanza = this.validatePatchBody(body);
            await this.stanzaModel.update({
                where: { id },
                data: stanza
            });
        });
    }

    // TODO
    public async patchStanzaByCodice(codice: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateCodice(codice);
            const stanza = this.validatePatchBody(body);
            await this.stanzaModel.update({
                where: { id: 0 },
                data: stanza
            });
        });
    }

    public async delStanzaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            await this.stanzaModel.delete({ where: { id } });
        });
    }

    // TODO
    public async delStanzaByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(codice);
            await this.stanzaModel.delete({ where: { id: 0 } });
        });
    }
}

export default new StanzaService();
