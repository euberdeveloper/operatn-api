import prisma, { Prisma, Provincia } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class ProvinciaService extends TableService {
    protected readonly model: Prisma.ProvinciaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        sigla: Joi.string().length(2),
        denominazione: Joi.string().min(1),
        regione: Joi.string().min(1),
        codiceStato: Joi.string().length(2)
    };

    protected postValidatorExcludes = [];
    protected putValidatorExcludes = [];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.provincia;
    }

    public async getProvince(): Promise<Provincia[]> {
        return this.model.findMany();
    }

    public async getProvinciaBySigla(sigla: string): Promise<Provincia> {
        this.validateStringParam(sigla, 'sigla');

        const provincia = await this.model.findUnique({ where: { sigla } });
        if (provincia === null) {
            throw new NotFoundError('Provincia not found');
        }
        return provincia;
    }

    public async postProvincia(body: any): Promise<string> {
        return handlePrismaError(async () => {
            const provincia = this.validatePostBody(body);
            const created = await this.model.create({ data: provincia });
            return created.sigla;
        });
    }

    public async putProvinciaBySigla(sigla: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            const provincia = this.validatePutBody(body);
            await this.model.upsert({
                where: { sigla },
                create: { sigla, ...provincia },
                update: provincia
            });
        });
    }

    public async patchProvinciaBySigla(sigla: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            const stato = this.validatePatchBody(body);
            await this.model.update({
                where: { sigla },
                data: stato
            });
        });
    }

    public async delProvinciaBySigla(sigla: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            await this.model.delete({ where: { sigla } });
        });
    }
}

export default new ProvinciaService();
