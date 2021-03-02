import prisma, { Prisma, TipoStanza } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoStanzaService extends TableService {
    protected readonly model: Prisma.TipoStanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        tipoStanza: Joi.string().min(1).required()
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.tipoStanza;
    }

    public async getTipiStanza(): Promise<TipoStanza[]> {
        return this.model.findMany();
    }

    public async getTipoStanzaById(id: number): Promise<TipoStanza> {
        this.validateId(id, 'id');

        const tipoStanza = await this.model.findUnique({ where: { id } });
        if (tipoStanza === null) {
            throw new NotFoundError('Tipo stanza not found');
        }
        return tipoStanza;
    }

    public async getTipoStanzaByValue(value: string): Promise<TipoStanza> {
        this.validateStringParam(value, 'tipoStanza');

        const tipoStanza = await this.model.findUnique({ where: { tipoStanza: value } });
        if (tipoStanza === null) {
            throw new NotFoundError('Tipo stanza not found');
        }
        return tipoStanza;
    }

    public async postTipoStanza(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tipoStanza = this.validatePostBody(body);
            const created = await this.model.create({ data: tipoStanza });
            return created.id;
        });
    }

    public async putTipoStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tipoStanza = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tipoStanza },
                update: tipoStanza
            });
        });
    }

    public async delTipoStanzaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoStanzaByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'tipoStanza');
            await this.model.delete({ where: { tipoStanza: value } });
        });
    }
}

export default new TipoStanzaService();
