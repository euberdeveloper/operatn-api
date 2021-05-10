import prisma, { Prisma, ContoRicavi } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';

export class ContoRicaviService extends TableService {
    protected readonly model: Prisma.ContoRicaviDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().length(3),
        prg: Joi.number().integer().positive(),
        conto: Joi.string().min(1),
        descrizione: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contoRicavi;
    }

    public async getContiRicavi(): Promise<ContoRicavi[]> {
        return this.model.findMany();
    }

    public async getContoRicaviById(id: number): Promise<ContoRicavi> {
        this.validateId(id, 'id');

        const contoRicavi = await this.model.findUnique({ where: { id } });
        if (contoRicavi === null) {
            throw new NotFoundError('Conto ricavi not found');
        }
        return contoRicavi;
    }

    public async getContoRicaviByCodice(codice: string): Promise<ContoRicavi> {
        this.validateStringParam(codice, 'codice');

        const contoRicavi = await this.model.findUnique({ where: { codice } });
        if (contoRicavi === null) {
            throw new NotFoundError('Conto ricavi not found');
        }
        return contoRicavi;
    }

    public async getContoRicaviByConto(conto: string): Promise<ContoRicavi> {
        this.validateStringParam(conto, 'conto');

        const contoRicavi = await this.model.findUnique({ where: { conto } });
        if (contoRicavi === null) {
            throw new NotFoundError('Conto ricavi not found');
        }
        return contoRicavi;
    }

    public async postContoRicavi(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const contoRicavi = this.validatePostBody(body);
            const created = await this.model.create({ data: contoRicavi });
            return created.id;
        });
    }

    public async putContoRicaviById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const contoRicavi = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...contoRicavi },
                update: contoRicavi
            });
        });
    }

    public async delContoRicaviById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delContoRicaviByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            await this.model.delete({ where: { codice } });
        });
    }

    public async delContoRicaviByConto(conto: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(conto, 'conto');
            await this.model.delete({ where: { conto } });
        });
    }
}

export default new ContoRicaviService();
