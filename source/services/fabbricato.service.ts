import { PrismaClient, Prisma, Fabbricato } from '@prisma/client';
import * as Joi from 'joi';

import { InvalidBodyError, InvalidIdError, InvalidParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UniqueConstraintError } from '@/errors/client/UniqueConstraintError';

export class FabbricatoService {
    private readonly fabbricatoModel: Prisma.FabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    constructor() {
        const prisma = new PrismaClient();
        this.fabbricatoModel = prisma.fabbricato;
    }

    private validateId(id: any): void {
        const error = Joi.number().integer().positive().validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError();
        }
    }

    private validateCodice(codice: any): void {
        const error = Joi.string().min(1).required().validate(codice).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidParamError('Invalid codice');
        }
    }

    private validatePostBody(body: any): Fabbricato {
        const result = Joi.object<Fabbricato>({
            id: Joi.number().integer().positive().optional(),
            codice: Joi.string().min(1).alphanum().required(),
            nome: Joi.string().min(1).required(),
            idTipoFabbricato: Joi.number().integer().positive().required(),
            provincia: Joi.string().length(2).alphanum().required(),
            comune: Joi.string().min(1).required(),
            cap: Joi.string().length(5).pattern(/^\d+$/).required(),
            indirizzo: Joi.string().min(1).required(),
            nCivico: Joi.string().min(1).required(),
            oldCode: Joi.number().required()
        })
            .required()
            .validate(body);

        if (result.error) {
            logger.warning('Validation error', result.error.message);
            throw new InvalidBodyError();
        }

        return result.value;
    }

    public async getFabbricati(): Promise<Fabbricato[]> {
        return this.fabbricatoModel.findMany();
    }

    public async getFabbricatoById(id: number): Promise<Fabbricato> {
        this.validateId(id);

        const fabbricato = await this.fabbricatoModel.findUnique({ where: { id } });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async getFabbricatoByCodice(codice: string): Promise<Fabbricato> {
        this.validateCodice(codice);

        const fabbricato = await this.fabbricatoModel.findFirst({ where: { codice } });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async postFabbricato(body: any): Promise<number> {
        const fabbricato = this.validatePostBody(body);
        try {
            const created = await this.fabbricatoModel.create({ data: fabbricato });
            return created.id;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                logger.warning('Unique constraint error', error);
                throw new UniqueConstraintError();
            } else {
                throw error;
            }
        }
    }

    public async delFabbricatoById(id: number): Promise<void> {
        this.validateId(id);
        await this.fabbricatoModel.delete({ where: { id } });
    }

    // TODO
    public async delFabbricatoByCodice(codice: string): Promise<void> {
        this.validateId(codice);
        await this.fabbricatoModel.delete({ where: { id: 0 } });
    }
}

export default new FabbricatoService();
