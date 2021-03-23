import prisma, { Prisma, Contratto, TipoRata } from '@/services/prisma.service';
import * as Joi from 'joi';

import { InternalServerError, InvalidBodyError, NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import logger from '@/utils/logger';

import BollettaService from './bolletta.service';
import { TableService } from './table.service';

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
        'bollette',
        'bollette.tipoBolletta'
    ];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contratto;
    }

    private async getSpesaAmount(tipoBolletta: string, defaultValue: number): Promise<number> {
        const spesa = await prisma.tipoBolletta.findUnique({ where: { tipoBolletta } });
        return spesa?.importo ?? defaultValue;
    }

    private async validateCreateContrattoBody(body: any): Promise<CreateContrattoBody> {
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

        // Check that there are no duplicated ospiti and that they can make a contractand that if an ospite takes multiple posti letto, they are a doppia uso singola
        const duplicatesOspiti = validatedBody.ospiti.filter(
            (ospite, index, arr) => arr.findIndex(el => el.idOspite === ospite.idOspite) != index
        );
        if (duplicatesOspiti.length > 0) {
            logger.warning('Validation error, duplicated ospiti', duplicatesOspiti);
            throw new InvalidBodyError('Duplicated ospiti');
        }
        for (const ospite of validatedBody.ospiti) {
            const exists = await prisma.contrattoSuOspite.findFirst({
                where: { idOspite: ospite.idOspite, dataCheckout: null }
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

        // Check that there are no duplicated posti letto, that they are all available
        const postiLetto = validatedBody.ospiti.reduce<number[]>((acc, curr) => [...acc, ...curr.postiLetto], []);
        const duplicatesPostiLetto = postiLetto.filter((el, index, arr) => arr.indexOf(el) != index);
        if (duplicatesPostiLetto.length > 0) {
            logger.warning('Validation error, duplicated posti letto', duplicatesPostiLetto);
            throw new InvalidBodyError('Duplicated posti letto');
        }
        for (const postoLetto of postiLetto) {
            const exists = await prisma.contrattoSuOspiteSuPostoLetto.findFirst({
                where: { idPostoLetto: postoLetto, contrattoSuOspite: { dataCheckout: null } }
            });
            if (exists) {
                logger.warning('Validation error, posto letto already in contract', {
                    postoLettoId: postoLetto,
                    contrattoId: exists.idContratto
                });
                throw new InvalidBodyError('Validation error, posto letto already in contract');
            }
        }

        return validatedBody;
    }

    private getCreateContrattoBody(body: CreateContrattoBody, cauzione: number | null, checkout: number | null) {
        return {
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

    public async getContratti(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const contratti = await this.model.findMany({
            where: { dataInizio: { lte: new Date() }, dataFine: { gte: new Date() } },
            include
        });
        return contratti;
    }

    public async getContrattiDaFirmare(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const contratti = await this.model.findMany({
            where: { dataInizio: { lte: new Date() }, dataFine: { gte: new Date() }, dataFirmaContratto: null },
            include
        });
        return contratti;
    }

    public async getContrattiFirmati(queryParams: any): Promise<Contratto[]> {
        const include = this.getInclude(queryParams);
        const contratti = await this.model.findMany({
            where: {
                dataInizio: { lte: new Date() },
                dataFine: { gte: new Date() },
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

    public async postContratto(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const validatedBody = await this.validateCreateContrattoBody(body);
            const cauzione = validatedBody.cauzione ? await this.getSpesaAmount('CAUZIONE', 360) : null;
            const checkout = validatedBody.checkout ? await this.getSpesaAmount('CHECKOUT', 40) : null;
            const createContrattoBody = this.getCreateContrattoBody(validatedBody, cauzione, checkout);

            const contratto = await this.model.create({
                data: createContrattoBody,
                include: {
                    tariffa: {
                        include: {
                            tipoOspite: { include: { contoRicaviCanoni: true, contoRicaviConsumi: true } },
                            tipoTariffa: true
                        }
                    }
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
                    tipoOspite: { contoRicaviCanoni, contoRicaviConsumi }
                }
            } = contratto;

            const contrattoSuOspiteSuPostoLettoBody = this.getCreateContrattoPostiLettoBody(body, id);
            await prisma.contrattoSuOspiteSuPostoLetto.createMany({
                data: contrattoSuOspiteSuPostoLettoBody
            });

            const centroDiCosto = await this.getCentroDiCosto(validatedBody);

            const bollette = await BollettaService.calcBollette(
                tipoRata,
                dataInizio,
                dataFine,
                cauzione,
                checkout,
                prezzoCanoni,
                prezzoConsumi,
                validatedBody.ospiti.length,
                contoRicaviCanoni.codice,
                contoRicaviConsumi.codice,
                centroDiCosto,
                tipoTariffa.tipoTariffa as 'MENSILE' | 'GIORNALIERA',
                id,
                validatedBody.idQuietanziante
            );
            await prisma.bolletta.createMany({
                data: bollette
            });

            return id;
        });
    }

    public async delContrattoById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.model.delete({ where: { id } });
        });
    }
}

export default new ContrattoService();
