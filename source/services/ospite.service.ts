/* eslint-disable @typescript-eslint/naming-convention */
import prisma, {
    Prisma,
    Ospite,
    Domicilio,
    LuogoDiNascita,
    Persona,
    Residenza,
    ContoCorrente,
    DipartimentoUnitn,
    DocumentoIdentita,
    Sesso
} from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';

type GottenOspite = Ospite & {
    persona: Persona & {
        luogoDiNascita?: LuogoDiNascita | null;
        residenza?: Residenza | null;
        domicili?: Domicilio[];
    } & {
        dipartimentoUnitn?: DipartimentoUnitn | null;
        documentoIdentita?: DocumentoIdentita | null;
        contoCorrente?: ContoCorrente | null;
    };
};

type HandledOspite = Omit<Ospite, 'persona'> &
    Persona & {
        luogoDiNascita?: LuogoDiNascita | null;
        residenza?: Residenza | null;
        domicili?: Domicilio[];
    } & {
        dipartimentoUnitn?: DipartimentoUnitn | null;
        documentoIdentita?: DocumentoIdentita | null;
        contoCorrente?: ContoCorrente | null;
    };

export class OspiteService extends TableService {
    protected readonly model: Prisma.OspiteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'persona',
        'persona.luogoDiNascita',
        'persona.residenza',
        'persona.domicili',
        'contoCorrente',
        'documentoIdentita',
        'dipartimentoUnitn'
    ].sort();
    protected readonly includeQueryParametersSoftCheck = [];

    protected readonly bodyValidator: Record<string, Joi.Schema> = {
        id: Joi.number().integer().positive().optional(),
        codiceFiscale: Joi.string().alphanum().length(16).allow(null).optional(),
        nome: Joi.string().min(1),
        cognome: Joi.string().min(1),
        sesso: Joi.string()
            .valid(...Object.values(Sesso))
            .allow(null),
        dataDiNascita: Joi.date().iso(),
        idGiada: Joi.number().integer().positive().allow(null).optional(),
        email: Joi.string().min(1).pattern(/@/),
        telefonoPrincipale: Joi.string().min(1).allow(null).optional(),
        telefonoSecondario: Joi.string().min(1).allow(null).optional(),
        cittadinanza: Joi.string().min(1),
        luogoDiNascita: Joi.object({
            stato: Joi.string().alphanum().length(2).required(),
            provincia: Joi.string().alphanum().length(2).allow(null).required(),
            comune: Joi.string().min(1).allow(null).required(),
            istatComune: Joi.string().pattern(/^\d+$/).length(6).allow(null).required()
        })
            .allow(null)
            .optional(),
        residenza: Joi.object({
            stato: Joi.string().alphanum().length(2).required(),
            provincia: Joi.string().alphanum().length(2).allow(null).required(),
            comune: Joi.string().min(1).allow(null).required(),
            istatComune: Joi.string().pattern(/^\d+$/).length(6).allow(null).required(),
            cap: Joi.string().pattern(/^\d+$/).length(5).allow(null).required(),
            indirizzo: Joi.string().min(1).required(),
            nCivico: Joi.string().min(1).required()
        }),
        domicili: Joi.array()
            .items(
                Joi.object({
                    stato: Joi.string().alphanum().length(2).required(),
                    provincia: Joi.string().alphanum().length(2).allow(null).required(),
                    comune: Joi.string().min(1).required(),
                    istatComune: Joi.string().pattern(/^\d+$/).length(6).allow(null).required(),
                    cap: Joi.string().pattern(/^\d+$/).length(5).allow(null).required(),
                    indirizzo: Joi.string().min(1).required(),
                    nCivico: Joi.string().min(1).required()
                })
            )
            .optional(),
        contoCorrente: Joi.object({
            iban: Joi.string().alphanum().length(27).required(),
            banca: Joi.string().min(1).required()
        })
            .allow(null)
            .optional(),
        documentoIdentita: Joi.object({
            tipo: Joi.string().min(1).required(),
            numero: Joi.string().min(1).required(),
            ente: Joi.string().min(1).required(),
            dataRilascio: Joi.date().iso().required(),
            dataScadenza: Joi.date().iso().greater(Joi.ref('dataRilascio')).required()
        })
            .allow(null)
            .optional(),
        codiceDipartimentoUnitn: Joi.string().length(4).allow(null).optional()
    };
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.ospite;
    }

    private parseSearchQueryParameters(queryParams: any): any {
        const search = this.extractSingleQueryParam(queryParams.search) ?? '';

        const words = search
            .split(/\s/)
            .map(str => str.trim())
            .filter(str => !!str);

        const wordsChecks = words.map(word => ({
            OR: [
                { nome: { contains: word, mode: 'insensitive' } },
                { cognome: { contains: word, mode: 'insensitive' } }
            ]
        }));

        return { AND: wordsChecks };
    }

    private handleOspite(ospite: GottenOspite): HandledOspite {
        let result: (GottenOspite & Persona) | HandledOspite = { ...ospite.persona, ...ospite };
        delete (result as any).persona;
        return result as HandledOspite;
    }

    private handleOspiteBodyCreate(body: HandledOspite): any {
        const result: any = {
            idGiada: body.idGiada,
            email: body.email,
            telefonoPrincipale: body.telefonoPrincipale,
            telefonoSecondario: body.telefonoSecondario,
            cittadinanza: body.cittadinanza
        };
        result.persona = {
            create: {
                id: body.id,
                nome: body.nome,
                cognome: body.cognome,
                dataDiNascita: body.dataDiNascita,
                sesso: body.sesso,
                codiceFiscale: body.codiceFiscale
            }
        };
        result.persona.create.luogoDiNascita = body.luogoDiNascita ? { create: body.luogoDiNascita } : undefined;
        result.persona.create.residenza = body.residenza ? { create: body.residenza } : undefined;
        result.persona.create.domicili = body.domicili ? { createMany: { data: body.domicili } } : undefined;
        result.dipartimentoUnitn = body.codiceDipartimentoUnitn
            ? { connect: { codice: body.codiceDipartimentoUnitn } }
            : undefined;
        result.documentoIdentita = body.documentoIdentita ? { create: body.documentoIdentita } : undefined;
        result.contoCorrente = body.contoCorrente ? { create: body.contoCorrente } : undefined;
        return result;
    }

    private async handleOspiteBodyUpdate(body: HandledOspite, id: number): Promise<any> {
        const oldOspite = await this.getOspiteById(id, {
            'persona': 'true',
            'persona.luogoDiNascita': 'true',
            'persona.residenza': 'true',
            'persona.domicili': 'true',
            'contoCorrente': 'true',
            'documentoIdentita': 'true',
            'dipartimentoUnitn': 'true'
        });

        const result: any = {
            idGiada: body.idGiada,
            email: body.email,
            telefonoPrincipale: body.telefonoPrincipale,
            telefonoSecondario: body.telefonoSecondario,
            cittadinanza: body.cittadinanza
        };
        result.persona = {
            update: {
                nome: body.nome,
                cognome: body.cognome,
                dataDiNascita: body.dataDiNascita,
                sesso: body.sesso,
                codiceFiscale: body.codiceFiscale
            }
        };
        result.persona.update.luogoDiNascita = body.luogoDiNascita
            ? { upsert: { create: body.luogoDiNascita, update: body.luogoDiNascita } }
            : { delete: body.luogoDiNascita === null && oldOspite.luogoDiNascita !== null };
        result.persona.update.residenza = body.residenza
            ? { upsert: { create: body.residenza, update: body.residenza } }
            : undefined;
        result.persona.update.domicili = body.domicili
            ? {
                  deleteMany: {
                      idPersona: id
                  },
                  createMany: {
                      data: body.domicili
                  }
              }
            : undefined;
        result.documentoIdentita = body.documentoIdentita
            ? { upsert: { create: body.documentoIdentita, update: body.documentoIdentita } }
            : { delete: body.documentoIdentita === null && oldOspite.documentoIdentita !== null };
        result.contoCorrente = body.contoCorrente
            ? { upsert: { create: body.contoCorrente, update: body.contoCorrente } }
            : { delete: body.contoCorrente === null && oldOspite.contoCorrente !== null };
        result.dipartimentoUnitn = body.codiceDipartimentoUnitn
            ? { connect: { codice: body.codiceDipartimentoUnitn } }
            : undefined;
        return result;
    }

    public async getOspiti(queryParams: any) {
        queryParams = { ...queryParams, persona: 'true' };
        const include = this.parseIncludeQueryParameters(queryParams);
        const search = this.parseSearchQueryParameters(queryParams);
        const pageValues = this.parsePageQueryParameters(queryParams);
        const ospiti = (await this.model.findMany({
            where: { persona: search },
            include,
            ...pageValues
        })) as GottenOspite[];
        return ospiti.map(ospite => this.handleOspite(ospite));
    }

    public async getOspiteById(id: number, queryParams: any): Promise<HandledOspite> {
        queryParams = { ...queryParams, persona: 'true' };
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams);

        const ospite = (await this.model.findUnique({ where: { id }, include })) as GottenOspite | null;
        if (ospite === null) {
            throw new NotFoundError('Ospite not found');
        }

        return this.handleOspite(ospite);
    }

    public async postOspite(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const ospite = this.validatePostBody(body);
            await this.model.create({ data: this.handleOspiteBodyCreate(body) });
            const created = await this.model.create({ data: this.handleOspiteBodyCreate(ospite) });
            return created.id;
        });
    }

    public async patchOspiteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const ospite = this.validatePatchBody(body);
            await this.checkIfExistsById(id, 'Ospite');
            await this.model.update({
                where: { id },
                data: await this.handleOspiteBodyUpdate(ospite, id)
            });
        });
    }

    public async delOspiteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.checkIfExistsById(id, 'Ospite');

            const deleteOspite = this.model.delete({ where: { id } });
            const deletePersona = prisma.persona.delete({ where: { id } });

            await prisma.$transaction([deleteOspite, deletePersona]);
        });
    }
}

export default new OspiteService();
