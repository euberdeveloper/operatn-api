import prisma, { Prisma, ContoRicaviCanoni } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class ContoRicaviCanoniService extends TableService {
    protected readonly model: Prisma.ContoRicaviCanoniDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1),
        contoRicaviCanoni: Joi.string().min(1)
    };

    protected postValidatorExcludes = ['id'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contoRicaviCanoni;
    }

    public async getContiRicaviCanoni(): Promise<ContoRicaviCanoni[]> {
        return this.model.findMany();
    }

    public async getContoRicaviCanoniById(id: number): Promise<ContoRicaviCanoni> {
        this.validateId(id, 'id');

        const contoRicaviCanoni = await this.model.findUnique({ where: { id } });
        if (contoRicaviCanoni === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return contoRicaviCanoni;
    }

    public async getContoRicaviCanoniByCodice(codice: string): Promise<ContoRicaviCanoni> {
        this.validateStringParam(codice, 'codice');

        const contoRicaviCanoni = await this.model.findUnique({ where: { codice } });
        if (contoRicaviCanoni === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return contoRicaviCanoni;
    }

    public async postContoRicaviCanoni(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const contoRicaviCanoni = this.validatePostBody(body);
            const created = await this.model.create({ data: contoRicaviCanoni });
            return created.id;
        });
    }

    public async putContoRicaviCanoniById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const contoRicaviCanoni = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...contoRicaviCanoni },
                update: contoRicaviCanoni
            });
        });
    }

    public async delContoRicaviCanoniById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delContoRicaviCanoniByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            await this.model.delete({ where: { codice } });
        });
    }
}

export default new ContoRicaviCanoniService();
