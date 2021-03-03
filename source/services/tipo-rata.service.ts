import prisma, { Prisma, TipoRata } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoRataService extends TableService {
    protected readonly model: Prisma.TipoRataDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoRata: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoRata;
    }

    public async getTipiRata(): Promise<TipoRata[]> {
        return this.model.findMany();
    }

    public async getTipoRataById(id: number): Promise<TipoRata> {
        this.validateId(id, 'id');

        const tipoRata = await this.model.findUnique({ where: { id } });
        if (tipoRata === null) {
            throw new NotFoundError('Tipo rata not found');
        }
        return tipoRata;
    }

    public async getTipoRataByValue(value: string): Promise<TipoRata> {
        this.validateStringParam(value, 'tipoRata');

        const tipoRata = await this.model.findUnique({ where: { tipoRata: value } });
        if (tipoRata === null) {
            throw new NotFoundError('Tipo rata not found');
        }
        return tipoRata;
    }

    public async postTipoRata(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoRata = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoRata });
            return created.id;
        });
    }

    public async putTipoRataById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoRata = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoRata },
                update: tipoRata
            });
        });
    }

    public async delTipoRataById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoRataByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoRata');
            await this.model.delete({ where: { tipoRata: value } });
        });
    }
}

export default new TipoRataService();
