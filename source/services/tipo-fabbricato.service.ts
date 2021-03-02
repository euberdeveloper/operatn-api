import prisma, { Prisma, TipoFabbricato } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoFabbricatoService extends TableService {
    protected readonly model: Prisma.TipoFabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoFabbricato: Joi.string().min(1).required()
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoFabbricato;
    }

    public async getTipiFabbricato(): Promise<TipoFabbricato[]> {
        return this.model.findMany();
    }

    public async getTipoFabbricatoById(id: number): Promise<TipoFabbricato> {
        this.validateId(id, 'id');

        const tipoFabbricato = await this.model.findUnique({ where: { id } });
        if (tipoFabbricato === null) {
            throw new NotFoundError('Tipo fabbricato not found');
        }
        return tipoFabbricato;
    }

    public async getTipoFabbricatoByValue(value: string): Promise<TipoFabbricato> {
        this.validateStringParam(value, 'tipoFabbricato');

        const tipoFabbricato = await this.model.findUnique({ where: { tipoFabbricato: value } });
        if (tipoFabbricato === null) {
            throw new NotFoundError('Tipo fabbricato not found');
        }
        return tipoFabbricato;
    }

    public async postTipoFabbricato(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoFabbricato = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoFabbricato });
            return created.id;
        });
    }

    public async putTipoFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoFabbricato = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoFabbricato },
                update: tipoFabbricato
            });
        });
    }

    public async delTipoFabbricatoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoFabbricatoByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoFabbricato');
            await this.model.delete({ where: { tipoFabbricato: value } });
        });
    }
}

export default new TipoFabbricatoService();
