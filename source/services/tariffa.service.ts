import prisma, { Prisma, Tariffa } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';

export class TariffaService extends TableService {
    protected readonly model: Prisma.TariffaDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'tipoOspite',
        'utilizzoStanza',
        'tipoFabbricato',
        'tipoTariffa'
    ].sort();
    protected readonly includeQueryParametersSoftCheck = [];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idTipoOspite: Joi.number().integer().positive(),
        idUtilizzoStanza: Joi.number().integer().positive().allow(null),
        idTipoFabbricato: Joi.number().integer().positive().allow(null),
        idTipoTariffa: Joi.number().integer().positive(),
        prezzoConsumi: Joi.number().allow(0).positive().precision(2).options({ convert: false }),
        prezzoCanoni: Joi.number().allow(0).positive().precision(2).options({ convert: false })
    };
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.tariffa;
    }

    public async getTariffe(queryParams: any) {
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        return this.model.findMany({ include });
    }

    public async getTariffaById(id: number, queryParams: any): Promise<Tariffa> {
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const tariffa = await this.model.findUnique({ where: { id }, include });
        if (tariffa === null) {
            throw new NotFoundError('Tariffa not found');
        }
        return tariffa;
    }

    public async postTariffa(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const tariffa = this.validatePostBody(body);
            const created = await this.model.create({ data: tariffa });
            return created.id;
        });
    }

    public async putTariffaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tariffa = this.validatePutBody(body);
            await this.model.upsert({
                where: { id },
                create: { id, ...tariffa },
                update: tariffa
            });
        });
    }

    public async patchTariffaById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const tariffa = this.validatePatchBody(body);
            await this.checkIfExistsById(id);
            await this.model.update({
                where: { id },
                data: tariffa
            });
        });
    }

    public async delTariffaById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.checkIfExistsById(id);
            await this.model.delete({ where: { id } });
        });
    }
}

export default new TariffaService();
