import prisma, { Prisma, TipoUtente } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
export class TipoUtenteService extends TableService {
    protected readonly model: Prisma.TipoUtenteDelegate<
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

    public async getContiRicaviCanoni(): Promise<TipoUtente[]> {
        return this.model.findMany();
    }

    public async getTipoUtenteById(id: number): Promise<TipoUtente> {
        this.validateId(id, 'id');

        const contoRicaviCanoni = await this.model.findUnique({ where: { id } });
        if (contoRicaviCanoni === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return contoRicaviCanoni;
    }

    public async getTipoUtenteByCodice(codice: string): Promise<TipoUtente> {
        this.validateStringParam(codice, 'codice');

        const contoRicaviCanoni = await this.model.findUnique({ where: { codice } });
        if (contoRicaviCanoni === null) {
            throw new NotFoundError('Conto ricavi canoni not found');
        }
        return contoRicaviCanoni;
    }

    public async postTipoUtente(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const contoRicaviCanoni = this.validatePostBody(body);
            const created = await this.model.create({ data: contoRicaviCanoni });
            return created.id;
        });
    }

    public async putTipoUtenteById(id: number, body: any): Promise<void> {
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

    public async delTipoUtenteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }

    public async delTipoUtenteByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            await this.model.delete({ where: { codice } });
        });
    }
}

export default new TipoUtenteService();
