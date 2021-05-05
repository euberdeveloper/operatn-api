import prisma, { Prisma, ContoRicaviConsumi } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class ContoRicaviConsumiService extends TableService {
    protected readonly model: Prisma.ContoRicaviConsumiDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1),
        sigla: Joi.string().min(1),
        contoRicaviConsumi: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contoRicaviConsumi;
    }

    public async getContiRicaviConsumi(): Promise<ContoRicaviConsumi[]> {
        return this.model.findMany();
    }

    public async getContoRicaviConsumiById(id: number): Promise<ContoRicaviConsumi> {
        this.validateId(id, 'id');

        const contoRicaviConsumi = await this.model.findUnique({ where: { id } });
        if (contoRicaviConsumi === null) {
            throw new NotFoundError('Conto ricavi consumi not found');
        }
        return contoRicaviConsumi;
    }

    public async getContoRicaviConsumiByCodice(codice: string): Promise<ContoRicaviConsumi> {
        this.validateStringParam(codice, 'codice');

        const contoRicaviConsumi = await this.model.findUnique({ where: { codice } });
        if (contoRicaviConsumi === null) {
            throw new NotFoundError('Conto ricavi consumi not found');
        }
        return contoRicaviConsumi;
    }

    public async getContoRicaviConsumiBySigla(sigla: string): Promise<ContoRicaviConsumi> {
        this.validateStringParam(sigla, 'sigla');

        const contoRicaviConsumi = await this.model.findUnique({ where: { sigla } });
        if (contoRicaviConsumi === null) {
            throw new NotFoundError('Conto ricavi consumi not found');
        }
        return contoRicaviConsumi;
    }

    public async postContoRicaviConsumi(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const contoRicaviConsumi = this.validatePostBody(body);
            const created = await this.model.create({ data: contoRicaviConsumi });
            return created.id;
        });
    }

    public async putContoRicaviConsumiById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const contoRicaviConsumi = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...contoRicaviConsumi },
                update: contoRicaviConsumi
            });
        });
    }

    public async delContoRicaviConsumiById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delContoRicaviConsumiByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            await this.model.delete({ where: { codice } });
        });
    }

    public async delContoRicaviConsumiBySigla(sigla: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            await this.model.delete({ where: { sigla } });
        });
    }
}

export default new ContoRicaviConsumiService();
