import { PrismaClient, Prisma, Fabbricato } from '@prisma/client';
import * as Joi from 'joi';

import { InvalidIdError, InvalidParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';

export class FabbricatoService {
    private readonly fabbricatoModel: Prisma.FabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    constructor() {
        const prisma = new PrismaClient();
        this.fabbricatoModel = prisma.fabbricato;
    }

    private validateId(id: any): void {
        const error = Joi.number().positive().validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError();
        }
    }

    private validateCodice(codice: any): void {
        const error = Joi.string().required().validate(codice).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidParamError('Invalid codice');
        }
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
}

export default new FabbricatoService();
