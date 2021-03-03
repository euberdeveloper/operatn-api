import prisma, { Prisma, TipoBolletta } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoBollettaService extends TableService {
    protected readonly model: Prisma.TipoBollettaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoBolletta: Joi.string().min(1),
        importo: Joi.number().positive().precision(2).allow(null).optional().options({ convert: false })
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoBolletta;
    }

    public async getTipiBolletta(): Promise<TipoBolletta[]> {
        return this.model.findMany();
    }

    public async getTipoBollettaById(id: number): Promise<TipoBolletta> {
        this.validateId(id, 'id');

        const tipoBolletta = await this.model.findUnique({ where: { id } });
        if (tipoBolletta === null) {
            throw new NotFoundError('Tipo bolletta not found');
        }
        return tipoBolletta;
    }

    public async getTipoBollettaByValue(value: string): Promise<TipoBolletta> {
        this.validateStringParam(value, 'tipoBolletta');

        const tipoBolletta = await this.model.findUnique({ where: { tipoBolletta: value } });
        if (tipoBolletta === null) {
            throw new NotFoundError('Tipo bolletta not found');
        }
        return tipoBolletta;
    }

    public async postTipoBolletta(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoBolletta = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoBolletta });
            return created.id;
        });
    }

    public async putTipoBollettaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoBolletta = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoBolletta },
                update: tipoBolletta
            });
        });
    }

    public async patchTipoBollettaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoBolletta = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: tipoBolletta
            });
        });
    }

    public async delTipoBollettaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoBollettaByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoBolletta');
            await this.model.delete({ where: { tipoBolletta: value } });
        });
    }
}

export default new TipoBollettaService();
