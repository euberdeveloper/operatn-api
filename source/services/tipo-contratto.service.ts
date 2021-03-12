import prisma, { Prisma, TipoContratto } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoContrattoService extends TableService {
    protected readonly model: Prisma.TipoContrattoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idTipoStudente: Joi.number().integer().positive(),
        sigla: Joi.string().min(1),
        nome: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = ['tipoStudente'];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoContratto;
    }

    public async getTipiContratto(queryParams: any): Promise<TipoContratto[]> {
        const include = this.parseIncludeQueryParameters(queryParams);
        return this.model.findMany({ include });
    }

    public async getTipoContrattoById(id: number, queryParams: any): Promise<TipoContratto> {
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams);

        const tipoContratto = await this.model.findUnique({ where: { id }, include });
        if (tipoContratto === null) {
            throw new NotFoundError('Tipo contratto not found');
        }
        return tipoContratto;
    }

    public async getTipoContrattoBySigla(value: string, queryParams: any): Promise<TipoContratto> {
        this.validateStringParam(value, 'sigla');
        const include = this.parseIncludeQueryParameters(queryParams);

        const tipoContratto = await this.model.findUnique({ where: { sigla: value }, include });
        if (tipoContratto === null) {
            throw new NotFoundError('Tipo contratto not found');
        }
        return tipoContratto;
    }

    public async postTipoContratto(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoContratto = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoContratto });
            return created.id;
        });
    }

    public async putTipoContrattoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoContratto = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoContratto },
                update: tipoContratto
            });
        });
    }

    public async delTipoContrattoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoContrattoBySigla(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'sigla');
            await this.model.delete({ where: { sigla: value } });
        });
    }
}

export default new TipoContrattoService();
