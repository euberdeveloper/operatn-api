import prisma, { Prisma, Comune } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class ComuneService extends TableService {
    protected readonly model: Prisma.ComuneDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codiceCatastale: Joi.string().length(4),
        codiceIstat: Joi.string().length(6),
        denominazione: Joi.string().min(1),
        siglaProvincia: Joi.string().length(2),
        dataIstituzione: Joi.date().iso(),
        eliminato: Joi.date().iso().allow(null)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.comune;
    }

    public async getComuni(): Promise<Comune[]> {
        return this.model.findMany();
    }

    public async getComuneById(id: number): Promise<Comune> {
        this.validateId(id, 'id');

        const comune = await this.model.findUnique({ where: { id } });
        if (comune === null) {
            throw new NotFoundError('Comune not found');
        }
        return comune;
    }

    public async getComuneByCodiceIstat(codiceIstat: string): Promise<Comune> {
        this.validateStringParam(codiceIstat, 'codiceIstat');

        const comune = await this.model.findUnique({ where: { codiceIstat } });
        if (comune === null) {
            throw new NotFoundError('Comune not found');
        }
        return comune;
    }

    public async getComuneByCodiceCatastale(codiceCatastale: string): Promise<Comune> {
        this.validateStringParam(codiceCatastale, 'codiceCatastale');

        const comune = await this.model.findUnique({ where: { codiceCatastale } });
        if (comune === null) {
            throw new NotFoundError('Comune not found');
        }
        return comune;
    }

    public async getComuneByDenominazione(denominazione: string): Promise<Comune> {
        this.validateStringParam(denominazione, 'denominazione');

        const comune = await this.model.findUnique({ where: { denominazione } });
        if (comune === null) {
            throw new NotFoundError('Comune not found');
        }
        return comune;
    }

    public async postComune(body: any): Promise<string> {
        return handlePrismaError(async () => {
            const comune = this.validatePostBody(body);
            const created = await this.model.create({ data: comune });
            return created.codiceCatastale;
        });
    }

    public async putComuneById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const comune = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...comune },
                update: comune
            });
        });
    }

    public async patchComuneById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const stato = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: stato
            });
        });
    }

    public async delComuneById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delComuneByCodiceIstat(codiceIstat: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codiceIstat, 'codiceIstat');
            await this.model.delete({ where: { codiceIstat } });
        });
    }

    public async delComuneByCodiceCatastale(codiceCatastale: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codiceCatastale, 'codiceCatastale');
            await this.model.delete({ where: { codiceCatastale } });
        });
    }

    public async delComuneByDenominazione(denominazione: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(denominazione, 'denominazione');
            await this.model.delete({ where: { denominazione } });
        });
    }
}

export default new ComuneService();
