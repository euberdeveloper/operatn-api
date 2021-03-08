import prisma, { Prisma, Contratto } from '@/services/prisma.service';
import * as Joi from 'joi';

import { InvalidBodyError, NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import logger from '@/utils/logger';
import { TableService } from './table.service';

interface CreateContrattoBody {
    dataInizio: Date;
    dataFine: Date;
    idQuietanziante: number;
    idTariffa: number;
    idTipoContratto: number;
    idTipoRata: number;
    cauzione: boolean;
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

    protected includeQueryParameters = [];
    protected includeQueryParametersSoftCheck = [];

    constructor() {
        super();
        this.model = prisma.contratto;
    }

    private async getSpesaAmount(tipoBolletta: string, defaultValue: number): Promise<number> {
        const spesa = await prisma.tipoBolletta.findUnique({ where: { tipoBolletta } });
        return spesa?.importo ?? defaultValue;
    }

    public async getTipiRata(): Promise<Contratto[]> {
        return this.model.findMany();
    }

    private async validateCreateContrattoBody(body: any): Promise<CreateContrattoBody> {
        // Define joi schema
        const schema = Joi.object({
            dataInizio: Joi.date().iso(),
            dataFine: Joi.date().iso().greater(Joi.ref('dataInizio')),
            idQuietanziante: Joi.number().integer().positive(),
            idTariffa: Joi.number().integer().positive(),
            idTipoContratto: Joi.number().integer().positive(),
            idTipoRata: Joi.number().integer().positive(),
            cauzione: Joi.boolean(),
            ospiti: Joi.array()
                .items(
                    Joi.object({
                        idOspite: Joi.number().integer().positive(),
                        postiLetto: Joi.array().items(Joi.number().integer().positive()).min(1)
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

        // Check that there are no duplicated ospiti and that they can make a contract
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
        }

        // Check that there are no duplicated posti letto and that they are all available
        const postiLetto = validatedBody.ospiti.reduce<number[]>((acc, curr) => [...acc, ...curr.postiLetto], []);
        const duplicatesPostiLetto = validatedBody.ospiti.filter((el, index, arr) => arr.indexOf(el) != index);
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

    private getCreateContrattoBody(body: CreateContrattoBody, cauzione: number | null, checkout: number) {
        return {
            dataFine: body.dataFine,
            dataInizio: body.dataInizio,
            idQuietanziante: body.idQuietanziante,
            idTariffa: body.idTariffa,
            idTipoContratto: body.idTipoContratto,
            idTipoRata: body.idTipoRata,
            checkout,
            cauzione,
            createMany: {
                data: body.ospiti.map(ospite => ospite.idOspite)
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

    private getBollette(tipoRata: 'MENSILE' | 'UNICA' | 'DA_BANDO') {
        switch (tipoRata) {
            case 'MENSILE':
                break;
            case 'UNICA':
                break;
            case 'DA_BANDO':
                break;
        }
    }

    public async getContrattoById(id: number): Promise<Contratto> {
        this.validateId(id, 'id');

        const contratto = await this.model.findUnique({ where: { id } });
        if (contratto === null) {
            throw new NotFoundError('Contratto not found');
        }
        return contratto;
    }

    public async postContratto(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const validatedBody = await this.validateCreateContrattoBody(body);
            const cauzione = validatedBody.cauzione ? await this.getSpesaAmount('CAUZIONE', 360) : null;
            const checkout = await this.getSpesaAmount('CHECKOUT', 40);

            const createContrattoBody = this.getCreateContrattoBody(validatedBody, cauzione, checkout);

            const contratto = await this.model.create({
                data: createContrattoBody,
                include: {
                    tariffa: true,
                    tipoRata: true
                }
            });

            const {
                id,
                tariffa: { prezzoCanoni, prezzoConsumi },
                tipoRata: { tipoRata }
            } = contratto;

            const contrattoSuOspiteSuPostoLettoBody = this.getCreateContrattoPostiLettoBody(body, id);
            await prisma.contrattoSuOspiteSuPostoLetto.createMany({
                data: contrattoSuOspiteSuPostoLettoBody
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
