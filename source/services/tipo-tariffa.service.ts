import prisma, { Prisma, TipoTariffa } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoTariffaService extends TableService {
    protected readonly model: Prisma.TipoTariffaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoTariffa: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoTariffa;
    }

    public async getTipiTariffa(): Promise<TipoTariffa[]> {
        return this.model.findMany();
    }

    public async getTipoTariffaById(id: number): Promise<TipoTariffa> {
        this.validateId(id, 'id');

        const tipoTariffa = await this.model.findUnique({ where: { id } });
        if (tipoTariffa === null) {
            throw new NotFoundError('Tipo tariffa not found');
        }
        return tipoTariffa;
    }

    public async getTipoTariffaByValue(value: string): Promise<TipoTariffa> {
        this.validateStringParam(value, 'tipoTariffa');

        const tipoTariffa = await this.model.findUnique({ where: { tipoTariffa: value } });
        if (tipoTariffa === null) {
            throw new NotFoundError('Tipo tariffa not found');
        }
        return tipoTariffa;
    }

    public async postTipoTariffa(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoTariffa = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoTariffa });
            return created.id;
        });
    }

    public async putTipoTariffaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoTariffa = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoTariffa },
                update: tipoTariffa
            });
        });
    }

    public async delTipoTariffaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoTariffaByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoTariffa');
            await this.model.delete({ where: { tipoTariffa: value } });
        });
    }
}

export default new TipoTariffaService();
