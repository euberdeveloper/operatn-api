import prisma, { Prisma, DipartimentoUnitn } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';

export class DipartimentoUnitnService extends TableService {
    protected readonly model: Prisma.DipartimentoUnitnDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [];
    protected readonly includeQueryParametersSoftCheck = [];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        codice: Joi.string().length(4),
        sigla: Joi.string().min(1).allow(null),
        nome: Joi.string().min(1),
        provincia: Joi.string().min(1),
        comune: Joi.string().min(1),
        cap: Joi.string().length(5),
        indirizzo: Joi.string().min(1),
        nCivico: Joi.string().min(1),
        sitoWeb: Joi.string().min(1).uri()
    };
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['codice'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.dipartimentoUnitn;
    }

    public async getDipartimentiUnitn() {
        return this.model.findMany();
    }

    public async getDipartimentoUnitnByCodice(codice: string): Promise<DipartimentoUnitn> {
        this.validateStringParam(codice, 'codice');

        const dipartimentoUnitn = await this.model.findUnique({ where: { codice } });
        if (dipartimentoUnitn === null) {
            throw new NotFoundError('Dipatimento unitn not found');
        }
        return dipartimentoUnitn;
    }

    public async getDipartimentoUnitnBySigla(sigla: string): Promise<DipartimentoUnitn> {
        this.validateStringParam(sigla, 'sigla');

        const dipartimentoUnitn = await this.model.findUnique({ where: { sigla } });
        if (dipartimentoUnitn === null) {
            throw new NotFoundError('Dipartimento unitn not found');
        }
        return dipartimentoUnitn;
    }

    public async postDipartimentoUnitn(body: any): Promise<string> {
        return handlePrismaError(async () => {
            const dipartimentoUnitn = this.validatePostBody(body);
            const created = await this.model.create({ data: dipartimentoUnitn });
            return created.codice;
        });
    }

    public async putDipartimentoUnitnByCodice(codice: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            const dipartimentoUnitn = this.validatePutBody(body);
            await this.model.upsert({
                where: { codice },
                create: { codice, ...dipartimentoUnitn },
                update: dipartimentoUnitn
            });
        });
    }

    public async patchDipartimentoUnitnByCodice(codice: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            const dipartimentoUnitn = this.validatePatchBody(body);
            await this.checkIfExistsByParam(codice, 'codice', 'Dipartimento unitn');
            await this.model.update({
                where: { codice },
                data: dipartimentoUnitn
            });
        });
    }

    public async patchDipartimentoUnitnBySigla(sigla: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            const dipartimentoUnitn = this.validatePatchBody(body);
            await this.checkIfExistsByParam(sigla, 'sigla', 'Dipartimento unitn');
            await this.model.update({
                where: { sigla },
                data: dipartimentoUnitn
            });
        });
    }

    public async delDipartimentoUnitnByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            await this.checkIfExistsByParam(codice, 'codice', 'Dipartimento unitn');
            await this.model.delete({ where: { codice } });
        });
    }

    public async delDipartimentoUnitnBySigla(sigla: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            await this.checkIfExistsByParam(sigla, 'sigla', 'Dipartimento unitn');
            await this.model.delete({ where: { sigla } });
        });
    }
}

export default new DipartimentoUnitnService();
