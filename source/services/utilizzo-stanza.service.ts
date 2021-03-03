import prisma, { Prisma, UtilizzoStanza } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class UtilizzoStanzaService extends TableService {
    protected readonly model: Prisma.UtilizzoStanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        utilizzoStanza: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.utilizzoStanza;
    }

    public async getUtilizziStanza(): Promise<UtilizzoStanza[]> {
        return this.model.findMany();
    }

    public async getUtilizzoStanzaById(id: number): Promise<UtilizzoStanza> {
        this.validateId(id, 'id');

        const utilizzoStanza = await this.model.findUnique({ where: { id } });
        if (utilizzoStanza === null) {
            throw new NotFoundError('Utilizzo stanza not found');
        }
        return utilizzoStanza;
    }

    public async getUtilizzoStanzaByValue(value: string): Promise<UtilizzoStanza> {
        this.validateStringParam(value, 'utilizzoStanza');

        const utilizzoStanza = await this.model.findUnique({ where: { utilizzoStanza: value } });
        if (utilizzoStanza === null) {
            throw new NotFoundError('Utilizzo stanza not found');
        }
        return utilizzoStanza;
    }

    public async postUtilizzoStanza(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const utilizzoStanza = this.validatePostBody(body);
            const created = await this.model.create({ data: utilizzoStanza });
            return created.id;
        });
    }

    public async putUtilizzoStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const utilizzoStanza = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...utilizzoStanza },
                update: utilizzoStanza
            });
        });
    }

    public async delUtilizzoStanzaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delUtilizzoStanzaByValue(value: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(value, 'utilizzoStanza');
            await this.model.delete({ where: { utilizzoStanza: value } });
        });
    }
}

export default new UtilizzoStanzaService();
