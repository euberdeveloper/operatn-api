import prisma, { Prisma, TipoStudente } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoStudenteService extends TableService {
    protected readonly model: Prisma.TipoStudenteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoStudente: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoStudente;
    }

    public async getTipiStudente(): Promise<TipoStudente[]> {
        return this.model.findMany();
    }

    public async getTipoStudenteById(id: number): Promise<TipoStudente> {
        this.validateId(id, 'id');

        const tipoStudente = await this.model.findUnique({ where: { id } });
        if (tipoStudente === null) {
            throw new NotFoundError('Tipo studente not found');
        }
        return tipoStudente;
    }

    public async getTipoStudenteByValue(value: string): Promise<TipoStudente> {
        this.validateStringParam(value, 'tipoStudente');

        const tipoStudente = await this.model.findUnique({ where: { tipoStudente: value } });
        if (tipoStudente === null) {
            throw new NotFoundError('Tipo studente not found');
        }
        return tipoStudente;
    }

    public async postTipoStudente(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoStudente = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoStudente });
            return created.id;
        });
    }

    public async putTipoStudenteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoStudente = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoStudente },
                update: tipoStudente
            });
        });
    }

    public async delTipoStudenteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoStudenteByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoStudente');
            await this.model.delete({ where: { tipoStudente: value } });
        });
    }
}

export default new TipoStudenteService();
