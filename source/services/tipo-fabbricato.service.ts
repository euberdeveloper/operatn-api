import { PrismaClient, Prisma, TipoFabbricato } from '@prisma/client';
import * as Joi from 'joi';

import { InvalidBodyError, InvalidIdError, InvalidParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';
import handlePrismaError from '@/utils/handlePrismaError';

export class TipoFabbricatoService {
    private readonly tipoFabbricatoModel: Prisma.TipoFabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    private readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoFabbricato: Joi.string().min(1).required()
    };

    private readonly idValidator = Joi.number().integer().positive();
    private readonly codeValidator = Joi.string().min(1).required();

    get postBodyValidator(): Joi.ObjectSchema<TipoFabbricato> {
        return Joi.object<TipoFabbricato>(this.bodyValidator).required().options({ presence: 'required' });
    }
    get putBodyValidator(): Joi.ObjectSchema<Omit<TipoFabbricato, 'id'>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'required' });
    }
    get patchBodyValidator(): Joi.ObjectSchema<Partial<Omit<TipoFabbricato, 'id'>>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    constructor() {
        const prisma = new PrismaClient();
        this.tipoFabbricatoModel = prisma.tipoFabbricato;
    }

    private validateId(id: any): void {
        const error = this.idValidator.validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError();
        }
    }

    private validateTipoFabbricato(tipoFabbricato: any): void {
        const error = this.codeValidator.validate(tipoFabbricato).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidParamError('Invalid tipo fabbricato');
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

    private validatePostBody(body: any): TipoFabbricato & { id?: number } {
        return this.validateBody(this.postBodyValidator, body);
    }

    private validatePutBody(body: any): Omit<TipoFabbricato, 'id'> {
        return this.validateBody(this.putBodyValidator, body);
    }

    public async getTipiFabbricato(): Promise<TipoFabbricato[]> {
        return this.tipoFabbricatoModel.findMany();
    }

    public async getTipoFabbricatoById(id: number): Promise<TipoFabbricato> {
        this.validateId(id);

        const tipoFabbricato = await this.tipoFabbricatoModel.findUnique({ where: { id } });
        if (tipoFabbricato === null) {
            throw new NotFoundError('Tipo fabbricato not found');
        }
        return tipoFabbricato;
    }

    public async getTipoFabbricatoByValue(value: string): Promise<TipoFabbricato> {
        this.validateTipoFabbricato(value);

        const tipoFabbricato = await this.tipoFabbricatoModel.findUnique({ where: { tipoFabbricato: value } });
        if (tipoFabbricato === null) {
            throw new NotFoundError('Tipo fabbricato not found');
        }
        return tipoFabbricato;
    }

    public async postTipoFabbricato(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoFabbricato = this.validatePostBody(body);
            const created = await this.tipoFabbricatoModel.create({ data: tipoFabbricato });
            return created.id;
        });
    }

    public async putTipoFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const tipoFabbricato = this.validatePutBody(body);
            await this.tipoFabbricatoModel.upsert({
                where: { id },
                create: tipoFabbricato,
                update: tipoFabbricato
            });
        });
    }

    public async delTipoFabbricatoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            await this.tipoFabbricatoModel.delete({ where: { id } });
        });
    }

    public async delTipoFabbricatoByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateTipoFabbricato(value);
            await this.tipoFabbricatoModel.delete({ where: { tipoFabbricato: value } });
        });
    }
}

export default new TipoFabbricatoService();
