import * as Joi from 'joi';
import prisma, { Prisma, Stanza, Piano } from '@/services/prisma.service';

import {
    InvalidBodyError,
    InvalidIdError,
    InvalidPathParamError,
    InvalidQueryParamError,
    NotFoundError
} from '@/errors';
import logger from '@/utils/logger';
import handlePrismaError from '@/utils/handlePrismaError';

export class StanzaService {
    private readonly stanzaModel: Prisma.StanzaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    private readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codice: Joi.string().min(1).alphanum(),
        nome: Joi.string().min(1),
        idTipoStanza: Joi.number().integer().positive(),
        provincia: Joi.string().length(2).alphanum(),
        comune: Joi.string().min(1),
        cap: Joi.string().length(5).pattern(/^\d+$/),
        indirizzo: Joi.string().min(1),
        nCivico: Joi.string().min(1),
        oldCode: Joi.number()
    };

    private readonly idValidator = Joi.number().integer().positive();
    private readonly stringValidator = Joi.string().min(1).required();

    get postBodyValidator(): Joi.ObjectSchema<Stanza> {
        return Joi.object<Stanza>({
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
        })
            .required()
            .options({ presence: 'required' });
    }
    get putBodyValidator(): Joi.ObjectSchema<Omit<Stanza, 'id'>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'required' });
    }
    get patchBodyValidator(): Joi.ObjectSchema<Partial<Omit<Stanza, 'id'>>> {
        const validator = { ...this.bodyValidator };
        delete validator.id;

        return Joi.object(validator).required().options({ presence: 'optional' });
    }

    constructor() {
        this.stanzaModel = prisma.stanza;
    }

    private validateBoolQueryParam(parameter: string | string[] | undefined, name: string): boolean {
        parameter = Array.isArray(parameter) ? parameter[0] : parameter;

        if (parameter === undefined) {
            return false;
        }

        if (typeof parameter === 'string' && !['true', 'false'].includes(parameter)) {
            throw new InvalidQueryParamError(`Invalid query param ${name}`);
        }

        return parameter === 'true';
    }

    private parseQueryParams(
        queryParams: Record<string, string | string[]>
    ): { tipoStanza: boolean; fabbricato: boolean; manutenzioni: boolean; postiLetto: boolean } {
        let { tipoStanza, fabbricato, postiLetto, manutenzioni } = queryParams;

        return {
            tipoStanza: this.validateBoolQueryParam(tipoStanza, 'tipoStanza'),
            fabbricato: this.validateBoolQueryParam(fabbricato, 'fabbricato'),
            postiLetto: this.validateBoolQueryParam(postiLetto, 'postiLetto'),
            manutenzioni: this.validateBoolQueryParam(manutenzioni, 'manutenzioni')
        };
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
        const include = this.parseQueryParams(queryParams);
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
        const include = this.parseQueryParams(queryParams);

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
        const include = this.parseQueryParams(queryParams);

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

    public async putStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const stanza = this.validatePutBody(body);
            await this.stanzaModel.upsert({
                where: { id },
                create: { id, ...stanza },
                update: stanza
            });
        });
    }

    // TODO
    public async putStanzaByCodice(codice: string, body: any): Promise<number> {
        return handlePrismaError(async () => {
            //this.validateCodice(codice);
            const stanza = this.validatePutBody(body);
            const result = await this.stanzaModel.upsert({
                where: { id: 0 },
                create: stanza,
                update: stanza
            });
            return result.id;
        });
    }

    public async patchStanzaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
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

            const stanzaExists = await this.stanzaModel.count({ where: { id, idFabbricato: fid } });
            if (!stanzaExists) {
                throw new NotFoundError('Stanza not found');
            }

            await this.stanzaModel.delete({ where: { id } });
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
