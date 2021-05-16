/* eslint-disable @typescript-eslint/naming-convention */
import prisma, { Prisma, Contratto, TipoRata, Bolletta } from '@/services/prisma.service';
import { v4 as uuid } from 'uuid';
import * as Joi from 'joi';
import * as dayjs from 'dayjs';

import { BadRequestError, InternalServerError, InvalidBodyError, NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import logger from '@/utils/logger';

import bollettaService from './bolletta.service';
import { TableService } from './table.service';
import emailService from './email.service';

interface CreateContrattoBody {
    dataInizio: Date;
    dataFine: Date;
    idQuietanziante: number;
    idTariffa: number;
    idTipoContratto: number;
    tipoRata: TipoRata;
    cauzione: boolean;
    checkout: boolean;
    note?: string | null;
    ospiti: {
        idOspite: number;
        postiLetto: number[];
    }[];
}

export class ContrattoService extends TableService {
    protected readonly model: Prisma.ContrattoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly bodyValidator = {};
    private readonly chiusuraAnticipataValidator = Joi.object({
        dataChiusura: Joi.date().iso()
    });

    protected postValidatorExcludes = [];
    protected putValidatorExcludes = [];
    protected patchValidatorExcludes = [];

    protected includeQueryParameters = [
        'quietanziante',
        'tariffa',
        'tariffa.tipoTariffa',
        'tariffa.utilizzoStanza',
        'tariffa.tipoOspite',
        'tariffa.tipoOspite.contoRicaviConsumi',
        'tariffa.tipoOspite.contoRicaviCanoni',
        'tariffa.tipoFabbricato',
        'tipoContratto',
        'tipoContratto.tipoStudente',
        'contrattiSuOspite',
        'contrattiSuOspite.ospite',
        'contrattiSuOspite.ospite.persona',
        'contrattiSuOspite.ospite.persona.residenza',
        'contrattiSuOspite.ospite.persona.luogoDiNascita',
        'contrattiSuOspite.contrattiSuOspiteSuPostoLetto',
        'contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto',
        'contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto.stanza',
        'contrattiSuOspite.contrattiSuOspiteSuPostoLetto.postoLetto.stanza.fabbricato',
        'bollette',
        'bollette.tipoBolletta'
    ];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contratto;
    }

    private async getSpesaAmount(
        tipoBolletta: string,
        tipoImporto: 'importoCanone' | 'importoConsumi',
        defaultValue: number
    ): Promise<number> {
        const spesa = await prisma.tipoBolletta.findUnique({ where: { tipoBolletta } });
        return spesa?.[tipoImporto] ?? defaultValue;
    }

    private async validateCreateContrattoBody(body: any, id?: number): Promise<CreateContrattoBody> {
        // Define joi schema
        const schema = Joi.object({
            dataInizio: Joi.date().iso(),
            dataFine: Joi.alternatives().try(
                Joi.date().iso().greater(Joi.ref('dataInizio')),
                Joi.date().iso().equal(Joi.ref('dataInizio'))
            ),
            idQuietanziante: Joi.number().integer().positive(),
            idTariffa: Joi.number().integer().positive(),
            idTipoContratto: Joi.number().integer().positive(),
            tipoRata: Joi.valid(...Object.values(TipoRata)),
            cauzione: Joi.boolean(),
            checkout: Joi.boolean(),
            note: Joi.string().min(1).allow(null).optional(),
            ospiti: Joi.array()
                .items(
                    Joi.object({
                        idOspite: Joi.number().integer().positive(),
                        postiLetto: Joi.array().items(Joi.number().integer().positive()).min(1).max(2)
                    })
                )
                .min(1)
        });
        // Validate with joi
        const validationResult = schema.validate(body, { presence: 'required' });
        if (validationResult.error) {
            logger.warning('Validation error', validationResult.error.message);
            throw new InvalidBodyError();
        }

        // Get the validated body
        const validatedBody: CreateContrattoBody = validationResult.value;

        // Check that there are no duplicated ospiti and that they can make a contract and that if an ospite takes multiple posti letto, they are a doppia uso singola
        const duplicatesOspiti = validatedBody.ospiti.filter(
            (ospite, index, arr) => arr.findIndex(el => el.idOspite === ospite.idOspite) != index
        );
        if (duplicatesOspiti.length > 0) {
            logger.warning('Validation error, duplicated ospiti', duplicatesOspiti);
            throw new InvalidBodyError('Duplicated ospiti');
        }
        for (const ospite of validatedBody.ospiti) {
            const exists = await prisma.contrattoSuOspite.findFirst({
                where: {
                    idOspite: ospite.idOspite,
                    contratto: {
                        dataChiusuraAnticipata: null,
                        NOT: {
                            OR: [
                                { dataFine: { lte: validatedBody.dataInizio } },
                                { dataInizio: { gte: validatedBody.dataFine } },
                                ...(id !== undefined ? [{ dataFirmaContratto: null, id: id }] : [])
                            ]
                        }
                    }
                }
            });
            if (exists) {
                logger.warning('Validation error, ospite already has contract', {
                    ospiteId: ospite.idOspite,
                    contrattoId: exists.idContratto
                });
                throw new InvalidBodyError('Validation error, ospite already has contract');
            }

            if (ospite.postiLetto.length === 2) {
                const postiLetto = await prisma.postoLetto.findMany({
                    where: { id: { in: ospite.postiLetto } },
                    select: { idStanza: true }
                });
                const notSameStanza = postiLetto.some(x => postiLetto.find(y => x.idStanza !== y.idStanza));
                if (notSameStanza) {
                    logger.warning('Validation error, posti letto are not in the same stanza', postiLetto);
                    throw new InvalidBodyError('Validation error, posti letto are not in the same stanza');
                }
            }
        }

        // Check that there are no duplicated posti letto and that they are all available
        const postiLetto = validatedBody.ospiti.reduce<number[]>((acc, curr) => [...acc, ...curr.postiLetto], []);
        const duplicatesPostiLetto = postiLetto.filter((el, index, arr) => arr.indexOf(el) != index);
        if (duplicatesPostiLetto.length > 0) {
            logger.warning('Validation error, duplicated posti letto', duplicatesPostiLetto);
            throw new InvalidBodyError('Duplicated posti letto');
        }
        for (const postoLetto of postiLetto) {
            const exists = await prisma.contrattoSuOspiteSuPostoLetto.findFirst({
                where: {
                    idPostoLetto: postoLetto,
                    contrattoSuOspite: {
                        contratto: {
                            dataChiusuraAnticipata: null,
                            NOT: {
                                OR: [
                                    { dataFine: { lte: validatedBody.dataInizio } },
                                    { dataInizio: { gte: validatedBody.dataFine } },
                                    ...(id !== undefined ? [{ dataFirmaContratto: null, id: id }] : [])
                                ]
                            }
                        }
                    }
                }
            });
            if (exists) {
                logger.warning('Validation error, posto letto already in contract', {
                    postoLettoId: postoLetto,
                    contrattoId: exists.idContratto
                });
                throw new InvalidBodyError('Validation error, posto letto already in contract');
            }
        }
        // Check that there are not manutenzioni on the stanze (Note: actually manutenzioni should have a prefixed end date and not _eliminato...)
        for (const postoLetto of postiLetto) {
            const exists = await prisma.manutenzione.findFirst({
                where: {
                    eliminato: null,
                    stanza: {
                        postiLetto: {
                            some: {
                                id: postoLetto
                            }
                        }
                    }
                }
            });
            if (exists) {
                logger.warning('Validation error, posto letto is in manutenzione', {
                    postoLettoId: postoLetto,
                    manutenzioneId: exists.id
                });
                throw new InvalidBodyError('Validation error, is in manutenzione');
            }
        }

        return validatedBody;
    }

    private getCreateContrattoBody(
        body: CreateContrattoBody,
        cauzione: number | null,
        checkout: number | null,
        idContratto?: number
    ) {
        return {
            id: idContratto,
            dataFine: body.dataFine,
            dataInizio: body.dataInizio,
            idQuietanziante: body.idQuietanziante,
            idTariffa: body.idTariffa,
            idTipoContratto: body.idTipoContratto,
            tipoRata: body.tipoRata,
            checkout,
            cauzione,
            note: body.note,
            contrattiSuOspite: {
                createMany: {
                    data: body.ospiti.map(ospite => ({ idOspite: ospite.idOspite }))
                }
            }
        };
    }

    private getCreateContrattoPostiLettoBody(body: CreateContrattoBody, idContratto: number) {
        return body.ospiti
            .map(ospite =>
                ospite.postiLetto.map(postoLetto => ({
                    idContratto,
                    idOspite: ospite.idOspite,
                    idPostoLetto: postoLetto
                }))
            )
            .reduce((acc, curr) => [...acc, ...curr], []);
    }

    private async getCentroDiCosto(validatedBody: CreateContrattoBody): Promise<string> {
        const idFirstPostoLetto = validatedBody.ospiti[0].postiLetto[0];
        const postoLetto = await prisma.postoLetto.findUnique({
            where: { id: idFirstPostoLetto },
            include: { stanza: { select: { centroDiCosto: true } } }
        });

        if (!postoLetto) {
            throw new InternalServerError('Centro di costo not found');
        }

        return postoLetto.stanza.centroDiCosto;
    }

    private getInclude(queryParams: any): any {
        const include = this.parseIncludeQueryParameters(queryParams);
        return {
            ...include,
            contrattiSuOspite: {
                include: {
                    contrattiSuOspiteSuPostoLetto: {
                        include: {
                            postoLetto: {
                                include: {
                                    stanza: {
                                        include: {
                                            fabbricato: true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    ospite: {
                        include: { persona: true }
                    }
                }
            }
        };
    }

    private async pushContratto(body: any, idContratto?: number): Promise<number> {
        const validatedBody = await this.validateCreateContrattoBody(body, idContratto);
        let cauzione = validatedBody.cauzione ? await this.getSpesaAmount('CAUZIONE', 'importoCanone', 360) : null;
        const checkout = validatedBody.checkout ? await this.getSpesaAmount('CHECKOUT', 'importoConsumi', 40) : null;
        const createContrattoBody = this.getCreateContrattoBody(validatedBody, cauzione, checkout, idContratto);
        let ospiteId = Infinity;

        if (idContratto !== undefined) {
            try {
                await this.delContrattoById(idContratto);
            } catch (error) {}
        }

        const contratto = await this.model.create({
            data: createContrattoBody,
            include: {
                tariffa: {
                    include: {
                        tipoOspite: true,
                        tipoTariffa: true
                    }
                },
                tipoContratto: true
            }
        });

        const {
            id,
            tipoRata,
            dataInizio,
            dataFine,
            tariffa: {
                prezzoCanoni,
                prezzoConsumi,
                tipoTariffa,
                tipoOspite: { idContoRicaviCanoni, idContoRicaviConsumi }
            },
            tipoContratto
        } = contratto;

        const contrattoSuOspiteSuPostoLettoBody = this.getCreateContrattoPostiLettoBody(body, id);
        await prisma.contrattoSuOspiteSuPostoLetto.createMany({
            data: contrattoSuOspiteSuPostoLettoBody
        });

        if (contratto.tariffa.tipoOspite.sigla !== 'GS') {
            if (cauzione) {
                ospiteId = validatedBody.ospiti[0].idOspite;
                const possiedeCauzione = (
                    await prisma.ospite.findUnique({
                        where: { id: ospiteId },
                        select: { possiedeCauzione: true }
                    })
                )?.possiedeCauzione;

                if (possiedeCauzione) {
                    cauzione = null;
                }
            }

            const centroDiCosto = await this.getCentroDiCosto(validatedBody);

            const bollette = await bollettaService.calcBollette(
                tipoRata,
                dataInizio,
                dataFine,
                cauzione,
                checkout,
                prezzoCanoni,
                prezzoConsumi,
                validatedBody.ospiti.length,
                idContoRicaviCanoni,
                idContoRicaviConsumi,
                centroDiCosto,
                tipoTariffa.tipoTariffa as 'MENSILE' | 'GIORNALIERA',
                tipoContratto.sigla,
                id,
                validatedBody.ospiti.length === 1 ? validatedBody.ospiti[0].idOspite : null,
                validatedBody.idQuietanziante
            );
            await prisma.bolletta.createMany({
                data: bollette
            });

            if (cauzione) {
                await prisma.ospite.update({ where: { id: ospiteId }, data: { possiedeCauzione: true } });
            }
        }

        return id;
    }

    private getDatesWhere(dataInizio?: Date, dataFine?: Date): any {
        return {
            AND: [
                dataFine ? { dataFine: { lte: dataFine } } : { id: undefined },
                dataInizio ? { dataInizio: { gte: dataInizio } } : { id: undefined }
            ]
        };
    }

    protected parseFilterQueryParameters(
        queryParams: Record<string, string | string[]>
    ): { dataInizio?: Date; dataFine?: Date } {
        const dataInizio = this.parseQueryParamsDate(queryParams.dataInizio, 'dataInizio');
        const dataFine = this.parseQueryParamsDate(queryParams.dataFine, 'dataFine');
        return { dataInizio, dataFine };
    }

    public async getContratti(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const { dataInizio, dataFine } = this.parseFilterQueryParameters(queryParams);
        const contratti = await this.model.findMany({
            where: {
                ...this.getDatesWhere(dataInizio, dataFine)
            },
            include
        });
        return contratti;
    }

    public async getContrattiDaFirmare(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const { dataInizio, dataFine } = this.parseFilterQueryParameters(queryParams);
        const contratti = await this.model.findMany({
            where: {
                ...this.getDatesWhere(dataInizio, dataFine),
                dataFirmaContratto: null
            },
            include
        });
        return contratti;
    }

    public async getContrattiDaVisionare(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const { dataInizio, dataFine } = this.parseFilterQueryParameters(queryParams);
        const contratti = await this.model.findMany({
            where: {
                ...this.getDatesWhere(dataInizio, dataFine),
                dataFirmaContratto: null,
                dataRispostaEmail: { not: null },
                file: { not: null }
            },
            include
        });
        return contratti;
    }

    public async getContrattiFirmati(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const { dataInizio, dataFine } = this.parseFilterQueryParameters(queryParams);
        const contratti = await this.model.findMany({
            where: {
                ...this.getDatesWhere(dataInizio, dataFine),
                dataFirmaContratto: { not: null }
            },
            include
        });
        return contratti;
    }

    public async getContrattoById(id: number, queryParams: any): Promise<Contratto> {
        this.validateId(id, 'id');
        const include = this.getInclude(queryParams);

        const contratto = await this.model.findUnique({ where: { id }, include });
        if (contratto === null) {
            throw new NotFoundError('Contratto not found');
        }
        return contratto;
    }

    public async getContrattoByToken(token: string, queryParams: any): Promise<Contratto> {
        this.validateStringParam(token, 'token');
        const include = this.getInclude(queryParams);

        const contratto = await this.model.findFirst({ where: { tokenEmail: token }, include });
        if (contratto === null) {
            throw new NotFoundError('Contratto not found');
        }
        return contratto;
    }

    public async postContratto(body: any): Promise<number> {
        return handlePrismaError(async () => {
            return this.pushContratto(body);
        });
    }

    public async putContratto(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            await this.pushContratto(body, id);
        });
    }

    public async postChiusuraAnticipata(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            const handledBody: { dataChiusura: Date } = this.validateBody(this.chiusuraAnticipataValidator, body);
            const { dataChiusura } = handledBody;

            const contratto = await this.model.findUnique({
                where: { id },
                include: {
                    bollette: {
                        where: {
                            tipoBolletta: { tipoBolletta: { startsWith: 'RATA' } }
                        }
                    },
                    tariffa: {
                        include: {
                            tipoTariffa: true
                        }
                    },
                    contrattiSuOspite: {
                        select: {
                            idContratto: true
                        }
                    }
                }
            });

            if (!contratto) {
                throw new NotFoundError('Contratto not found');
            }

            if (contratto.dataChiusuraAnticipata) {
                throw new InvalidBodyError('Contratto is already chiuso');
            }

            if (contratto.dataFine < dataChiusura || contratto.dataInizio > dataChiusura) {
                throw new InvalidBodyError('Data chiusura must be in the contratto lifetime');
            }

            let bolletteToDelete: Bolletta[] = [],
                daStornare: Bolletta[] = [],
                newBollette: Omit<
                    Bolletta,
                    'id' | 'idBollettaStornata' | 'dataInvioEusis' | 'dataRegistrazione'
                >[] = [];

            if (contratto.bollette.length) {
                bolletteToDelete = contratto.bollette.filter(b => b.dataInvioEusis === null);
                const bolletteContabilizzate = contratto.bollette
                    .filter(b => b.dataInvioEusis !== null)
                    .sort((x, y) => +x.competenzaAl - +y.competenzaAl);

                const firstBollettaDaStornareIndex = bolletteContabilizzate.findIndex(
                    b => b.competenzaAl > dataChiusura
                );

                let newDataInizio: Date;
                if (firstBollettaDaStornareIndex !== -1) {
                    daStornare = bolletteContabilizzate.slice(firstBollettaDaStornareIndex);
                    newDataInizio = bolletteContabilizzate[firstBollettaDaStornareIndex].competenzaDal;
                } else {
                    newDataInizio = bolletteContabilizzate.length
                        ? dayjs(bolletteContabilizzate[0].competenzaAl).add(1, 'day').toDate()
                        : contratto.dataInizio;
                }

                newBollette = await bollettaService.calcBollette(
                    contratto.tipoRata,
                    newDataInizio,
                    dataChiusura,
                    null,
                    null,
                    contratto.tariffa.prezzoCanoni,
                    contratto.tariffa.prezzoConsumi,
                    contratto.contrattiSuOspite.length,
                    contratto.bollette[0].idContoRicaviCanoni as number,
                    contratto.bollette[0].idContoRicaviConsumi as number,
                    contratto.bollette[0].centroDiCosto as string,
                    contratto.tariffa.tipoTariffa.tipoTariffa as 'MENSILE' | 'GIORNALIERA',
                    contratto.bollette[0].siglaTipoContratto,
                    contratto.id,
                    contratto.bollette[0].idOspite,
                    contratto.idQuietanziante
                );
            }

            const actions = [
                prisma.contratto.update({ where: { id }, data: { dataChiusuraAnticipata: dataChiusura } }),
                prisma.bolletta.deleteMany({
                    where: {
                        id: { in: bolletteToDelete.map(b => b.id) }
                    }
                }),
                prisma.bolletta.createMany({
                    data: newBollette
                }),
                ...(daStornare.length
                    ? [
                          prisma.bolletta.createMany({
                              data: daStornare.map(b => ({
                                  ...b,
                                  id: undefined,
                                  dataInvioEusis: null,
                                  importoCanoni: b.importoCanoni ? -b.importoCanoni : 0,
                                  importoConsumi: b.importoConsumi ? -b.importoConsumi : 0,
                                  importoTotale: -b.importoTotale,
                                  idBollettaStornata: b.id
                              }))
                          })
                      ]
                    : []),
                prisma.bolletta.updateMany({
                    where: {
                        idContratto: id,
                        dataInvioEusis: null,
                        tipoBolletta: {
                            tipoBolletta: 'CHECKOUT'
                        }
                    },
                    data: {
                        dataScadenza: dataChiusura,
                        competenzaDal: dayjs(dataChiusura).date(1).subtract(1, 'day').date(1).toDate(),
                        competenzaAl: dataChiusura
                    }
                })
            ];

            await prisma.$transaction(actions);
        });
    }

    public async postEmailFirma(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id);
            const contratto = await this.getContrattoById(id, {
                contrattiSuOspite: {
                    ospite: { persona: 'true' },
                    contrattiSuOspiteSuPostoLetto: {
                        postoLetto: 'true'
                    }
                }
            });

            if (contratto.dataFirmaContratto) {
                throw new BadRequestError('Contratto already firmato');
            }

            const token = uuid();
            await this.model.update({
                where: { id },
                data: {
                    tokenEmail: token,
                    dataInvioEmail: new Date()
                }
            });
            await emailService.contrattiFirma(contratto, token);
        });
    }

    public async delContrattoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await prisma.$executeRaw`DELETE FROM contratto WHERE id = ${id}`;
        });
    }
}

export default new ContrattoService();
