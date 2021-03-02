import prisma, { Prisma, Fabbricato } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';

export class FabbricatoService extends TableService {
    protected readonly model: Prisma.FabbricatoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'tipoFabbricato',
        'stanze',
        'stanze.tipoStanza',
        'stanze.postiLetto',
        'stanze.manutenzioni'
    ].sort();
    protected readonly includeQueryParametersSoftCheck = ['stanze', 'stanze.postiLetto'];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1).alphanum(),
        nome: Joi.string().min(1),
        idTipoFabbricato: Joi.number().integer().positive(),
        provincia: Joi.string().length(2).alphanum(),
        comune: Joi.string().min(1),
        cap: Joi.string().length(5).pattern(/^\d+$/),
        indirizzo: Joi.string().min(1),
        nCivico: Joi.string().min(1),
        oldCode: Joi.number()
    };
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.fabbricato;
    }

    public async getFabbricati(queryParams: any) {
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        return this.model.findMany({ include });
    }

    public async getFabbricatoById(id: number, queryParams: any): Promise<Fabbricato> {
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const fabbricato = await this.model.findUnique({ where: { id }, include });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async getFabbricatoByCodice(codice: string): Promise<Fabbricato> {
        this.validateStringParam(codice, 'codice');

        const fabbricato = await this.model.findFirst({
            where: { codice },
            include: { tipoFabbricato: true }
        });
        if (fabbricato === null) {
            throw new NotFoundError('Fabbricato not found');
        }
        return fabbricato;
    }

    public async postFabbricato(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const fabbricato = this.validatePostBody(body);
            const created = await this.model.create({ data: fabbricato });
            return created.id;
        });
    }

    public async putFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const fabbricato = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...fabbricato },
                update: fabbricato
            });
        });
    }

    public async putFabbricatoByCodice(codice: string, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            const fabbricato = this.validatePutBody(body);
            const result = await this.model.upsert({
                where: { codice },
                create: fabbricato,
                update: fabbricato
            });
            return result.id;
        });
    }

    public async patchFabbricatoById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const fabbricato = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: fabbricato
            });
        });
    }

    public async patchFabbricatoByCodice(codice: string, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateStringParam(codice, 'codice');
            const fabbricato = this.validatePatchBody(body);
            await this.model.update({
                where: { codice },
                data: fabbricato
            });
        });
    }

    public async delFabbricatoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');

            const deletePostiLetto = prisma.postoLetto.deleteMany({ where: { stanza: { idFabbricato: id } } });
            const deleteStanza = prisma.stanza.deleteMany({ where: { idFabbricato: id } });
            const deleteFabbricato = this.model.delete({ where: { id } });

            await prisma.$transaction([deletePostiLetto, deleteStanza, deleteFabbricato]);
        });
    }

    public async delFabbricatoByCodice(codice: string): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(codice, 'codice');
            const deletePostiLetto = prisma.postoLetto.deleteMany({ where: { stanza: { fabbricato: { codice } } } });
            const deleteStanza = prisma.stanza.deleteMany({ where: { fabbricato: { codice } } });
            const deleteFabbricato = this.model.delete({ where: { codice } });

            await prisma.$transaction([deletePostiLetto, deleteStanza, deleteFabbricato]);
        });
    }
}

export default new FabbricatoService();
