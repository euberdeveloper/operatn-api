import prisma, { Prisma, Fabbricato } from '@/services/prisma.service';
import * as Joi from 'joi';

import { InvalidBodyError, InvalidIdError, InvalidPathParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';
import handlePrismaError from '@/utils/handlePrismaError';
import parseIncludeQueryParameters from '@/utils/includeQueryParams';

export class FabbricatoService {
    private readonly fabbricatoModel: Prisma.FabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    private readonly includeQueryParameters = [
        'tipoFabbricato',
        'stanze',
        'stanze.tipoStanza',
        'stanze.postiLetto',
        'stanze.manutenzioni'
    ].sort();
    private readonly includeQueryParametersSoftCheck = ['stanze' /* TODO , 'stanze.postiLetto' */];

    private readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1).alphanum(),
        nome: Joi.string().min(1),
        idTipoFabbricato: Joi.number().integer().positive(),
        provincia: Joi.string().length(2).alphanum(),
        comune: Joi.string().min(1),
        cap: Joi.string().length(5).pattern(/^\d+$/),
        indirizzo: Joi.string().min(1),
        nCivico: Joi.string().min(1),
        oldCode: Joi.number()
    };

    private readonly idValidator = Joi.number().integer().positive();
    private readonly codeValidator = Joi.string().min(1).required();

    private get postBodyValidator(): Joi.ObjectSchema<Fabbricato> {
        return Joi.object<Fabbricato>(this.bodyValidator).required().options({ presence: 'required' });
    }
    private get putBodyValidator(): Joi.ObjectSchema<Omit<Fabbricato, 'id'>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'required' });
    }
    private get patchBodyValidator(): Joi.ObjectSchema<Partial<Omit<Fabbricato, 'id'>>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    constructor() {
        this.fabbricatoModel = prisma.fabbricato;
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

    private validatePostBody(body: any): Fabbricato & { id?: number } {
        return this.validateBody(this.postBodyValidator, body);
    }

    private validatePutBody(body: any): Omit<Fabbricato, 'id'> {
        return this.validateBody(this.putBodyValidator, body);
    }

    private validatePatchBody(body: any): Partial<Omit<Fabbricato, 'id'>> {
        return this.validateBody(this.patchBodyValidator, body);
    }

    public async getFabbricati(queryParams: any) {
        const include = parseIncludeQueryParameters(
            queryParams,
            this.includeQueryParameters,
            this.includeQueryParametersSoftCheck
        );
        return this.fabbricatoModel.findMany({ include });
    }

    public async getFabbricatoById(id: number, queryParams: any): Promise<Fabbricato> {
        this.validateId(id);
        const include = parseIncludeQueryParameters(
            queryParams,
            this.includeQueryParameters,
            this.includeQueryParametersSoftCheck
        );

        const fabbricato = await this.fabbricatoModel.findUnique({ where: { id }, include });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async getFabbricatoByCodice(codice: string): Promise<Fabbricato> {
        this.validateCodice(codice);

        const fabbricato = await this.fabbricatoModel.findFirst({
            where: { codice },
            include: { tipoFabbricato: true }
        });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async postFabbricato(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const fabbricato = this.validatePostBody(body);
            const created = await this.fabbricatoModel.create({ data: fabbricato });
            return created.id;
        });
    }

    public async putFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const fabbricato = this.validatePutBody(body);
            await this.fabbricatoModel.upsert({
                where: { id },
                create: { id, ...fabbricato },
                update: fabbricato
            });
        });
    }

    // TODO
    public async putFabbricatoByCodice(codice: string, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateCodice(codice);
            const fabbricato = this.validatePutBody(body);
            const result = await this.fabbricatoModel.upsert({
                where: { id: 0 },
                create: fabbricato,
                update: fabbricato
            });
            return result.id;
        });
    }

    public async patchFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const fabbricato = this.validatePatchBody(body);
            await this.fabbricatoModel.update({
                where: { id },
                data: fabbricato
            });
        });
    }

    // TODO
    public async patchFabbricatoByCodice(codice: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateCodice(codice);
            const fabbricato = this.validatePatchBody(body);
            await this.fabbricatoModel.update({
                where: { id: 0 },
                data: fabbricato
            });
        });
    }

    public async delFabbricatoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            await this.fabbricatoModel.delete({ where: { id } });
        });
    }

    // TODO
    public async delFabbricatoByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(codice);
            await this.fabbricatoModel.delete({ where: { id: 0 } });
        });
    }
}

export default new FabbricatoService();
