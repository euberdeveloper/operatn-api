import * as Joi from 'joi';
import prisma, { Prisma, PostoLetto } from '@/services/prisma.service';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';
import { TableService } from './table.service';

export class PostoLettoService extends TableService {
    protected readonly model: Prisma.PostoLettoDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'stanza',
        'stanza.tipoStanza',
        'stanza.postiLetto',
        'stanza.manutenzioni',
        'stanza.fabbricato',
        'stanza.fabbricato.tipoFabbricato'
    ];
    protected readonly includeQueryParametersSoftCheck = ['stanza.postiLetto', 'stanza.manutenzioni'];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        idStanza: Joi.number().integer().positive().optional(),
        postoLetto: Joi.string().min(1)
    };
    protected postValidatorExcludes = ['idStanza'];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.postoLetto;
    }

    public async getPostiLetto(fid: number, sid: number, queryParams: any): Promise<PostoLetto[]> {
        this.validateId(fid, 'fid');
        this.validateId(sid, 'sid');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        return this.model.findMany({
            where: {
                idStanza: sid,
                stanza: {
                    idFabbricato: fid
                }
            },
            include
        });
    }

    public async getPostoLettoById(fid: number, sid: number, id: number, queryParams: any): Promise<PostoLetto> {
        this.validateId(fid, 'fid');
        this.validateId(sid, 'sid');
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const postoLetto = await this.model.findFirst({
            where: { id, idStanza: sid, stanza: { idFabbricato: fid } },
            include
        });
        if (postoLetto === null) {
            throw new NotFoundError('PostoLetto not found');
        }
        return postoLetto;
    }

    public async postPostoLetto(fid: number, sid: number, body: any): Promise<number> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(sid, 'sid');

            const stanzaExists = await prisma.stanza.count({
                where: { id: sid, idFabbricato: fid }
            });
            if (!stanzaExists) {
                throw new NotFoundError('Stanza not found');
            }

            const postoLetto = this.validatePostBody(body);
            postoLetto.idStanza = sid;

            const created = await this.model.create({ data: postoLetto });
            return created.id;
        });
    }

    public async putPostoLettoById(fid: number, sid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            this.validateId(sid, 'sid');
            this.validateId(fid, 'fid');

            if (!body.idStanza) {
                body.idStanza = sid;
            }

            const stanzaExists = await prisma.stanza.count({
                where: { id: sid, idFabbricato: fid }
            });
            if (!stanzaExists) {
                throw new NotFoundError('Stanza not found');
            }

            const postoLetto = this.validatePutBody(body);

            await this.model.upsert({
                where: { id },
                create: { id, ...postoLetto },
                update: postoLetto
            });
        });
    }

    public async patchPostoLettoById(fid: number, sid: number, id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(sid, 'sid');
            this.validateId(id, 'id');

            const postoLettoExists = await this.model.findFirst({
                where: { id, idStanza: sid, stanza: { idFabbricato: fid } }
            });
            if (!postoLettoExists) {
                throw new NotFoundError('PostoLetto not found');
            }

            const postoLetto = this.validatePatchBody(body);
            await this.model.update({
                where: { id },
                data: postoLetto
            });
        });
    }

    public async delPostoLettoById(fid: number, sid: number, id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(fid, 'fid');
            this.validateId(sid, 'sid');
            this.validateId(id, 'id');

            const postoLettoExists = await this.model.findFirst({
                where: { id, idStanza: sid, stanza: { idFabbricato: fid } }
            });
            if (!postoLettoExists) {
                throw new NotFoundError('PostoLetto not found');
            }

            await this.model.deleteMany({ where: { id } });
        });
    }
}

export default new PostoLettoService();
