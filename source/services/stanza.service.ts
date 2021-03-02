import * as Joi from 'joi';
import prisma, { Prisma, Stanza, Piano } from '@/services/prisma.service';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';

export class StanzaService extends TableService {
    protected readonly model: Prisma.StanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'tipoStanza',
        'postiLetto',
        'manutenzioni',
        'fabbricato',
        'fabbricato.tipoFabbricato'
    ].sort();
    protected readonly includeQueryParametersSoftCheck = ['stanze.postiLetto'];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idFabbricato: Joi.number().integer().positive(),
        unitaImmobiliare: Joi.string().min(1).alphanum(),
        numeroStanza: Joi.string().min(1).alphanum(),
        idTipoStanza: Joi.number().integer().positive(),
        centroDiCosto: Joi.string().min(1),
        gestioneDiretta: Joi.boolean(),
        handicap: Joi.boolean(),
        bagno: Joi.boolean(),
        piano: Joi.string()
            .valid(...Object.values(Piano))
            .allow(null),
        dataCreazione: Joi.date().iso().less('now').optional(),
        eliminato: Joi.date().iso().greater(Joi.ref('dataCreazione')).optional()
    };
    protected postValidatorExcludes = ['idFabbricato'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = ['id'];

    constructor() {
        super();
        this.model = prisma.stanza;
    }

    public async getStanze(fid: number, queryParams: any): Promise<Stanza[]> {
        this.validateId(fid, 'fid');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        return this.model.findMany({
            where: {
                idFabbricato: fid
            },
            include
        });
    }

    public async getStanzaById(fid: number, id: number, queryParams: any): Promise<Stanza> {
        this.validateId(fid, 'fid');
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const stanza = await this.model.findFirst({
            where: { id, idFabbricato: fid },
            include
        });
        if (stanza === null) {
            throw new NotFoundError('Stanza not found');
        }
        return stanza;
    }

    public async getStanzaByEdificioAndNumero(
        fid: number,
        unitaImmobiliare: string,
        numeroStanza: string,
        queryParams: any
    ): Promise<Stanza> {
        this.validateId(fid, 'fid');
        this.validateStringParam(unitaImmobiliare, 'unitaImmobiliare');
        this.validateStringParam(numeroStanza, 'numeroStanza');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const stanza = await this.model.findFirst({
            where: {
                idFabbricato: fid,
                unitaImmobiliare,
                numeroStanza
            },
            include
        });
        if (stanza === null) {
            throw new NotFoundError('Stanza not found');
        }
        return stanza;
    }

    public async postStanza(fid: number, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');

            const stanza = this.validatePostBody({ ...body });
            stanza.idFabbricato = fid;

            const created = await this.model.create({ data: stanza });
            return created.id;
        });
    }

    public async putStanzaById(fid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            this.validateId(fid, 'fid');

            if (!body.idFabbricato) {
                body.idFabbricato = fid;
            }

            const stanza = this.validatePutBody(body);

            await this.model.upsert({
                where: { id },
                create: { id, ...stanza },
                update: stanza
            });
        });
    }

    public async patchStanzaById(fid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(id, 'id');

            const stanzaExists = await this.model.findFirst({ where: { id, idFabbricato: fid } });
            if (!stanzaExists || stanzaExists.eliminato) {
                throw new NotFoundError('Stanza not found');
            }

            const stanza = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: stanza
            });
        });
    }

    public async delStanzaById(fid: number, id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(id, 'id');

            const stanzaExists = await this.model.findFirst({ where: { id, idFabbricato: fid } });
            if (!stanzaExists || stanzaExists.eliminato) {
                throw new NotFoundError('Stanza not found');
            }

            await this.model.deleteMany({ where: { id } });
        });
    }

    public async delStanzaByEdificioAndNumero(
        fid: number,
        unitaImmobiliare: string,
        numeroStanza: string
    ): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');

            await this.model.deleteMany({
                where: {
                    idFabbricato: fid,
                    unitaImmobiliare,
                    numeroStanza
                }
            });
        });
    }
}

export default new StanzaService();
