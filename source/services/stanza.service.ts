import * as Joi from 'joi';
import prisma, { Prisma, Stanza, Piano } from '@/services/prisma.service';

import { InvalidQueryParamError, NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';
import { Sesso } from '@prisma/client';

interface StanzaLiberaParams {
    dataInizio: Date;
    dataFine: Date;
    bagno?: boolean;
    handicap?: boolean;
    idTipoStanza?: number;
    sesso?: Sesso;
    doppiaUsoSingola?: boolean;
}

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
    protected readonly includeQueryParametersSoftCheck = ['postiLetto', 'manutenzioni'];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idFabbricato: Joi.number().integer().positive(),
        unitaImmobiliare: Joi.string().min(1).alphanum(),
        numeroStanza: Joi.string()
            .min(1)
            .regex(/^[\w]+$/),
        idTipoStanza: Joi.number().integer().positive(),
        centroDiCosto: Joi.string().min(1),
        gestioneDiretta: Joi.boolean(),
        handicap: Joi.boolean(),
        bagno: Joi.boolean(),
        piano: Joi.string()
            .valid(...Object.values(Piano))
            .allow(null),
        note: Joi.string().min(1).allow(null).optional()
    };
    protected postValidatorExcludes = ['idFabbricato'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.stanza;
    }

    private getStanzaLiberaParams(queryParams: any): StanzaLiberaParams {
        function validateDate(value: any, name: string): Date {
            const result = new Date(value);
            if (isNaN(+result)) {
                throw new InvalidQueryParamError(`Invalid query param ${name}`);
            }
            return result;
        }
        function validateNumber(value: any, name: string): number | undefined {
            if (value === undefined) {
                return undefined;
            }

            const result = +value;
            if (isNaN(result)) {
                throw new InvalidQueryParamError(`Invalid query param ${name}`);
            }
            return result;
        }
        function validateBool(value: any, name: string): boolean | undefined {
            if (value !== undefined && !['true', 'false'].includes(value)) {
                throw new InvalidQueryParamError(`Invalid query param ${name}`);
            }
            return value === undefined ? value : value === 'true';
        }
        function validateSex(value: any, name: string): Sesso | undefined {
            if (value !== undefined && !Object.values(Sesso).includes(value)) {
                throw new InvalidQueryParamError(`Invalid query param ${name}`);
            }
            return value;
        }

        const dataInizio = validateDate(this.extractSingleQueryParam(queryParams.dataInizio), 'dataInizio');
        const dataFine = validateDate(this.extractSingleQueryParam(queryParams.dataFine), 'dataFine');
        const bagno = validateBool(this.extractSingleQueryParam(queryParams.bagno), 'bagno');
        const handicap = validateBool(this.extractSingleQueryParam(queryParams.handicap), 'handicap');
        const idTipoStanza = validateNumber(queryParams.idTipoStanza, 'idTipoStanza');
        const sesso = validateSex(this.extractSingleQueryParam(queryParams.sesso), 'sesso');
        const doppiaUsoSingola = validateBool(
            this.extractSingleQueryParam(queryParams.doppiaUsoSingola),
            'doppiaUsoSingola'
        );

        return {
            dataInizio,
            dataFine,
            bagno,
            handicap,
            sesso,
            idTipoStanza,
            doppiaUsoSingola
        };
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

    public async getStanzeLibere(fid: number, queryParams: any): Promise<Stanza[]> {
        this.validateId(fid, 'fid');
        const params = this.getStanzaLiberaParams(queryParams);

        const result = await prisma.stanza.findMany({
            where: {
                // controlla fabbricato
                idFabbricato: fid,
                // controlla altri filtri
                bagno: params.bagno,
                handicap: params.handicap,
                idTipoStanza: params.idTipoStanza,
                // Se è doppia, controlla che nessun posto letto sia occupato da un M/F
                // eslint-disable-next-line @typescript-eslint/naming-convention
                postiLetto:
                    params.sesso || params.doppiaUsoSingola
                        ? {
                              every: {
                                  contrattiSuOspiteSuPostoLetto: {
                                      none: {
                                          contrattoSuOspite: {
                                              ospite: !params.doppiaUsoSingola
                                                  ? {
                                                        persona: {
                                                            sesso: { not: params.sesso }
                                                        }
                                                    }
                                                  : undefined,
                                              contratto: {
                                                  // eslint-disable-next-line @typescript-eslint/naming-convention
                                                  NOT: [
                                                      { dataInizio: { gt: params.dataFine } },
                                                      { dataFine: { lt: params.dataInizio } }
                                                  ]
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                        : undefined,
                // Non ha menutenzioni
                manutenzioni: {
                    none: {
                        eliminato: null
                    }
                }
            },
            // includi tutti i posti letto liberi
            include: {
                tipoStanza: true,
                postiLetto: {
                    where: {
                        contrattiSuOspiteSuPostoLetto: {
                            every: {
                                contrattoSuOspite: {
                                    contratto: {
                                        // eslint-disable-next-line @typescript-eslint/naming-convention
                                        OR: [
                                            { dataInizio: { gt: params.dataFine } },
                                            { dataFine: { lt: params.dataInizio } }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        return result.filter(stanza =>
            params.doppiaUsoSingola ? stanza.postiLetto.length === 2 : stanza.postiLetto.length > 0
        );
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

            const deletePostiLetto = prisma.postoLetto.deleteMany({ where: { idStanza: id } });
            const deleteStanza = this.model.deleteMany({ where: { id } });

            await prisma.$transaction([deletePostiLetto, deleteStanza]);
        });
    }

    public async delStanzaByEdificioAndNumero(
        fid: number,
        unitaImmobiliare: string,
        numeroStanza: string
    ): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');

            const deletePostiLetto = prisma.postoLetto.deleteMany({
                where: {
                    stanza: {
                        idFabbricato: fid,
                        unitaImmobiliare,
                        numeroStanza
                    }
                }
            });
            const deleteManutenzioni = prisma.manutenzione.deleteMany({
                where: {
                    stanza: {
                        idFabbricato: fid,
                        unitaImmobiliare,
                        numeroStanza
                    }
                }
            });
            const deleteStanza = this.model.deleteMany({
                where: {
                    idFabbricato: fid,
                    unitaImmobiliare,
                    numeroStanza
                }
            });

            await prisma.$transaction([deletePostiLetto, deleteManutenzioni, deleteStanza]);
        });
    }
}

export default new StanzaService();
