import * as Joi from 'joi';
import prisma, { Prisma, Stanza, Piano } from '@/services/prisma.service';

import { InvalidBodyError, InvalidIdError, InvalidPathParamError, NotFoundError } from '@/errors';
import logger from '@/utils/logger';
import handlePrismaError from '@/utils/handlePrismaError';
import parseIncludeQueryParameters from '@/utils/includeQueryParams';

export class StanzaService {
    private readonly stanzaModel: Prisma.StanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    private readonly includeQueryParameters = [
        'tipoStanza',
        'postiLetto',
        'manutenzioni',
        'fabbricato',
        'fabbricato.tipoFabbricato'
    ].sort();
    private readonly includeQueryParametersSoftCheck = [
        /* TODO , 'stanze.postiLetto' */
    ];

    private readonly bodyValidator: Record<string, Joi.Schema> = {
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

    private readonly idValidator = Joi.number().integer().positive();
    private readonly stringValidator = Joi.string().min(1).required();

    private get postBodyValidator(): Joi.ObjectSchema<Stanza> {
        return Joi.object(this.bodyValidator).required().options({ presence: 'required' });
    }
    private get putBodyValidator(): Joi.ObjectSchema<Omit<Stanza, 'id'>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'required' });
    }
    private get patchBodyValidator(): Joi.ObjectSchema<Partial<Omit<Stanza, 'id'>>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    constructor() {
        this.stanzaModel = prisma.stanza;
    }

    private validateId(id: any): void {
        const error = this.idValidator.validate(id).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidIdError();
        }
    }

    private validateStringParam(val: any, name: string): void {
        const error = this.stringValidator.validate(val).error;
        if (error) {
            logger.warning('Validation error', error.message);
            throw new InvalidPathParamError(`Invalid ${name}`);
        }
    }

    private validateBody<T>(schema: Joi.Schema, body: any): T {
        const result = schema.validate(body);

        if (result.error) {
            logger.warning('Validation error', result.error.message);
            throw new InvalidBodyError();
        }

        return result.value;
    }

    private validatePostBody(body: any): Stanza & { id?: number } {
        return this.validateBody(this.postBodyValidator, body);
    }

    private validatePutBody(body: any): Omit<Stanza, 'id'> {
        return this.validateBody(this.putBodyValidator, body);
    }

    private validatePatchBody(body: any): Partial<Omit<Stanza, 'id'>> {
        return this.validateBody(this.patchBodyValidator, body);
    }

    public async getStanze(fid: number, queryParams: any): Promise<Stanza[]> {
        this.validateId(fid);
        const include = parseIncludeQueryParameters(
            queryParams,
            this.includeQueryParameters,
            this.includeQueryParametersSoftCheck
        );
        return this.stanzaModel.findMany({
            where: {
                idFabbricato: fid
            },
            include
        });
    }

    public async getStanzaById(fid: number, id: number, queryParams: any): Promise<Stanza> {
        this.validateId(fid);
        this.validateId(id);
        const include = parseIncludeQueryParameters(
            queryParams,
            this.includeQueryParameters,
            this.includeQueryParametersSoftCheck
        );

        const stanza = await this.stanzaModel.findFirst({
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
        this.validateId(fid);
        this.validateStringParam(unitaImmobiliare, 'unitaImmobiliare');
        this.validateStringParam(numeroStanza, 'numeroStanza');
        const include = parseIncludeQueryParameters(
            queryParams,
            this.includeQueryParameters,
            this.includeQueryParametersSoftCheck
        );

        const stanza = await this.stanzaModel.findUnique({
            where: {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                idFabbricato_unitaImmobiliare_numeroStanza: { idFabbricato: fid, unitaImmobiliare, numeroStanza }
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
            this.validateId(fid);
            const stanza = this.validatePostBody({ ...body, idFabbricato: fid });
            const created = await this.stanzaModel.create({ data: stanza });
            return created.id;
        });
    }

    public async putStanzaById(fid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            this.validateId(fid);

            if (!body.idFabbricato) {
                body.idFabbricato = fid;
            }

            const stanza = this.validatePutBody(body);
            await this.stanzaModel.upsert({
                where: { id },
                create: { id, ...stanza },
                update: stanza
            });
        });
    }

    public async patchStanzaById(fid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid);
            this.validateId(id);

            const stanzaExists = await this.stanzaModel.findFirst({ where: { id, idFabbricato: fid } });
            if (!stanzaExists || stanzaExists.eliminato) {
                throw new NotFoundError('Stanza not found');
            }

            const stanza = this.validatePatchBody(body);
            await this.stanzaModel.update({
                where: { id },
                data: stanza
            });
        });
    }

    public async delStanzaById(fid: number, id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid);
            this.validateId(id);

            const stanzaExists = await this.stanzaModel.findFirst({ where: { id, idFabbricato: fid } });
            if (!stanzaExists || stanzaExists.eliminato) {
                throw new NotFoundError('Stanza not found');
            }

            await this.stanzaModel.deleteMany({ where: { id } });
        });
    }

    public async delStanzaByEdificioAndNumero(
        fid: number,
        unitaImmobiliare: string,
        numeroStanza: string
    ): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid);

            await this.stanzaModel.delete({
                where: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    idFabbricato_unitaImmobiliare_numeroStanza: { idFabbricato: fid, unitaImmobiliare, numeroStanza }
                }
            });
        });
    }
}

export default new StanzaService();
