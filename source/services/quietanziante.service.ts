import prisma, { Prisma, Quietanziante } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class QuietanzianteService extends TableService {
    protected readonly model: Prisma.QuietanzianteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        quietanziante: Joi.string().min(1),
        denominazione: Joi.string().min(1).allow(null).optional(),
        sesso: Joi.string().min(1).allow(null).optional(),
        dataNascita: Joi.date().iso().allow(null).optional(),
        comuneNascita: Joi.string().min(1).allow(null).optional(),
        indirizzo: Joi.string().min(1).allow(null).optional(),
        cap: Joi.string().length(5).allow(null).optional(),
        citta: Joi.string().min(1).allow(null).optional(),
        siglaProvincia: Joi.string().length(2).allow(null).optional(),
        codiceFiscale: Joi.string().min(1).allow(null).optional(),
        numeroTelefono: Joi.string().min(1).allow(null).optional(),
        email: Joi.string().min(1).allow(null).optional()
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.quietanziante;
    }

    public async getQuietanzianti(): Promise<Quietanziante[]> {
        return this.model.findMany();
    }

    public async getQuietanzianteById(id: number): Promise<Quietanziante> {
        this.validateId(id, 'id');

        const quietanziante = await this.model.findUnique({ where: { id } });
        if (quietanziante === null) {
            throw new NotFoundError('Quietanziante not found');
        }
        return quietanziante;
    }

    public async getQuietanzianteByValue(value: string): Promise<Quietanziante> {
        this.validateStringParam(value, 'quietanziante');

        const quietanziante = await this.model.findUnique({ where: { quietanziante: value } });
        if (quietanziante === null) {
            throw new NotFoundError('Quietanziante not found');
        }
        return quietanziante;
    }

    public async postQuietanziante(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const quietanziante = this.validatePostBody(body);
            const created = await this.model.create({ data: quietanziante });
            return created.id;
        });
    }

    public async putQuietanzianteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const quietanziante = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...quietanziante },
                update: quietanziante
            });
        });
    }

    public async delQuietanzianteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await prisma.$executeRaw`DELETE FROM quietanziante WHERE id = ${id}`;
        });
    }

    public async delQuietanzianteByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'quietanziante');
            await this.model.delete({ where: { quietanziante: value } });
        });
    }
}

export default new QuietanzianteService();
