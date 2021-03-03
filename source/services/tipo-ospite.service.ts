import prisma, { Prisma, TipoOspite } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoOspiteService extends TableService {
    protected readonly model: Prisma.TipoOspiteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = ['contoRicaviConsumi', 'contoRicaviCanoni'].sort();
    protected readonly includeQueryParametersSoftCheck = [];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        sigla: Joi.string().min(1),
        tipoOspite: Joi.string().min(1),
        idContoRicaviConsumi: Joi.number().integer().positive().optional(),
        idContoRicaviCanoni: Joi.number().integer().positive().optional()
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.tipoOspite;
    }

    public async getTipiOspite(queryParams: any): Promise<TipoOspite[]> {
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        return this.model.findMany({ include });
    }

    public async getTipoOspiteById(id: number, queryParams: any): Promise<TipoOspite> {
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const tipoOspite = await this.model.findUnique({ where: { id }, include });
        if (tipoOspite === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return tipoOspite;
    }

    public async getTipoOspiteBySigla(sigla: string, queryParams: any): Promise<TipoOspite> {
        this.validateStringParam(sigla, 'sigla');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const tipoOspite = await this.model.findUnique({ where: { sigla }, include });
        if (tipoOspite === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return tipoOspite;
    }

    public async postTipoOspite(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoOspite = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoOspite });
            return created.id;
        });
    }

    public async putTipoOspiteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoOspite = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoOspite },
                update: tipoOspite
            });
        });
    }

    public async patchTipoOspiteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoOspite = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: tipoOspite
            });
        });
    }

    public async delTipoOspiteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoOspiteBySigla(sigla: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(sigla, 'sigla');
            await this.model.delete({ where: { sigla } });
        });
    }
}

export default new TipoOspiteService();
