import prisma, { Prisma, Stato } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class StatoService extends TableService {
    protected readonly model: Prisma.StatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        codiceIso: Joi.string().length(2),
        codiceStato: Joi.string().min(1),
        codiceIstat: Joi.string().length(3),
        denominazione: Joi.string().min(1)
    };

    protected postValidatorExcludes = [];
    protected putValidatorExcludes = [];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.stato;
    }

    public async getStati(): Promise<Stato[]> {
        return this.model.findMany();
    }

    public async getStatoByCodiceIso(codiceIso: string): Promise<Stato> {
        this.validateStringParam(codiceIso, 'codiceIso');

        const stato = await this.model.findUnique({ where: { codiceIso } });
        if (stato === null) {
            throw new NotFoundError('Stato not found');
        }
        return stato;
    }

    public async postStato(body: any): Promise<string> {
        return handlePrismaError(async () => {
            const stato = this.validatePostBody(body);
            const created = await this.model.create({ data: stato });
            return created.codiceIso;
        });
    }

    public async putStatoByCodiceIso(codiceIso: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codiceIso, 'codiceIso');
            const stato = this.validatePutBody(body);
            await this.model.upsert({
                where: { codiceIso },
                create: { codiceIso, ...stato },
                update: stato
            });
        });
    }

    public async patchStatoByCodiceIso(codiceIso: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codiceIso, 'codiceIso');
            const stato = this.validatePatchBody(body);
            await this.model.update({
                where: { codiceIso },
                data: stato
            });
        });
    }

    public async delStatoByCodiceIso(codiceIso: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codiceIso, 'codiceIso');
            await this.model.delete({ where: { codiceIso } });
        });
    }
}

export default new StatoService();
