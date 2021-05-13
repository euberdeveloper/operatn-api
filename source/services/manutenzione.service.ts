import * as Joi from 'joi';
import prisma, { Prisma, Manutenzione } from '@/services/prisma.service';

import { InvalidQueryParamError, NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';

export class ManutenzioneService extends TableService {
    protected readonly model: Prisma.ManutenzioneDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'stanza',
        'stanza.tipoStanza',
        'stanza.postiLetto',
        'stanza.fabbricato',
        'stanza.fabbricato.tipoFabbricato'
    ];
    protected readonly includeQueryParametersSoftCheck = ['stanza.postiLetto'];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idStanza: Joi.number().integer().positive().optional()
    };
    protected postValidatorExcludes = ['idStanza'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.manutenzione;
    }

    public async getManutenzioni(fid: number, sid: number, queryParams: any): Promise<Manutenzione[]> {
        this.validateId(fid, 'fid');
        this.validateId(sid, 'sid');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        const includeSoftDeleted = this.parseSoftDeleteParams(queryParams);
        return this.model.findMany({
            where: {
                idStanza: sid,
                stanza: {
                    idFabbricato: fid
                },
                eliminato: includeSoftDeleted ? undefined : null
            },
            include
        });
    }

    public async getManutenzioneById(fid: number, sid: number, id: number, queryParams: any): Promise<Manutenzione> {
        this.validateId(fid, 'fid');
        this.validateId(sid, 'sid');
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const manutenzione = await this.model.findFirst({
            where: { id, idStanza: sid, stanza: { idFabbricato: fid } },
            include
        });
        if (manutenzione === null) {
            throw new NotFoundError('Manutenzione not found');
        }
        return manutenzione;
    }

    public async postManutenzione(fid: number, sid: number, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(sid, 'sid');

            const stanzaExists = await prisma.stanza.count({
                where: { id: sid, idFabbricato: fid }
            });
            if (!stanzaExists) {
                throw new NotFoundError('Stanza not found');
            }

            const manutenzione = this.validatePostBody(body);
            manutenzione.idStanza = sid;

            const created = await this.model.create({ data: manutenzione });
            return created.id;
        });
    }

    public async delManutenzioneById(fid: number, sid: number, id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(sid, 'sid');
            this.validateId(id, 'id');

            const manutenzioneExists = await this.model.findFirst({
                where: { id, idStanza: sid, stanza: { idFabbricato: fid } }
            });
            if (!manutenzioneExists) {
                throw new NotFoundError('Manutenzione not found');
            }

            await this.model.deleteMany({ where: { id } });
        });
    }
}

export default new ManutenzioneService();
