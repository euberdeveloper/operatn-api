import prisma, { Prisma, Presidente, Domicilio, LuogoDiNascita, Persona, Residenza } from '@/services/prisma.service';
import * as Joi from 'joi';

import { NotFoundError } from '@/errors';
import handlePrismaError from '@/utils/handlePrismaError';

import { TableService } from './table.service';
import { Sesso } from '@prisma/client';

type GottenPresidente = Presidente & {
    persona: Persona & {
        luogoDiNascita?: LuogoDiNascita | null;
        residenza?: Residenza | null;
        domicili?: Domicilio[];
    };
};

type HandledPresidente = Omit<Presidente, 'persona'> &
    Persona & {
        luogoDiNascita?: LuogoDiNascita | null;
        residenza?: Residenza | null;
        domicili?: Domicilio[];
    };

export class PresidenteService extends TableService {
    protected readonly model: Prisma.PresidenteDelegate<
        boolean | ((error: Error) => Error) | Prisma.RejectPerOperation | undefined
    >;

    protected readonly includeQueryParameters = [
        'persona',
        'persona.luogoDiNascita',
        'persona.residenza',
        'persona.domicili'
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
        dataInizioMandato: Joi.date().iso(),
        dataFineMandato: Joi.date().iso().greater(Joi.ref('dataInizioMandato')),
        luogoDiNascita: Joi.object({
            stato: Joi.string().alphanum().length(2).required(),
            provincia: Joi.string().alphanum().length(2).allow(null).required(),
            comune: Joi.string().min(1).required(),
            istatComune: Joi.string().pattern(/^\d+$/).length(6).allow(null).required()
        })
            .allow(null)
            .optional(),
        residenza: Joi.object({
            stato: Joi.string().alphanum().length(2).required(),
            provincia: Joi.string().alphanum().length(2).allow(null).required(),
            comune: Joi.string().min(1).required(),
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
            .optional()
    };
    protected postValidatorExcludes = [];
    protected putValidatorExcludes = ['id'];
    protected patchValidatorExcludes = [];

    constructor() {
        super();
        this.model = prisma.presidente;
    }

    private handlePresidente(presidente: GottenPresidente): HandledPresidente {
        let result: (GottenPresidente & Persona) | HandledPresidente = { ...presidente.persona, ...presidente };
        delete (result as any).persona;
        return result as HandledPresidente;
    }

    private handlePresidenteBodyCreate(body: HandledPresidente): any {
        const result = {
            dataFineMandato: body.dataFineMandato,
            dataInizioMandato: body.dataInizioMandato
        } as any;
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
        return result;
    }

    private async handlePresidenteBodyUpdate(body: HandledPresidente, id: number): Promise<any> {
        const oldPresidente = await this.getPresidenteById(id, {
            'persona': 'true',
            'persona.luogoDiNascita': 'true',
            'persona.residenza': 'true',
            'persona.domicili': 'true'
        });
        const result = {
            dataFineMandato: body.dataFineMandato,
            dataInizioMandato: body.dataInizioMandato
        } as any;
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
            : { delete: body.luogoDiNascita === null && oldPresidente.luogoDiNascita !== null };
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
        return result;
    }

    public async getPresidenti(queryParams: any) {
        queryParams = { ...queryParams, persona: 'true' };
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);
        const presidenti = (await this.model.findMany({ include })) as GottenPresidente[];
        return presidenti.map(presidente => this.handlePresidente(presidente));
    }

    public async getPresidenteById(id: number, queryParams: any): Promise<HandledPresidente> {
        queryParams = { ...queryParams, persona: 'true' };
        this.validateId(id, 'id');
        const include = this.parseIncludeQueryParameters(queryParams, this.includeQueryParameters);

        const presidente = (await this.model.findUnique({ where: { id }, include })) as GottenPresidente | null;
        if (presidente === null) {
            throw new NotFoundError('Presidente not found');
        }

        return this.handlePresidente(presidente);
    }

    public async postPresidente(body: any): Promise<number> {
        return handlePrismaError(async () => {
            const presidente = this.validatePostBody(body);
            const created = await this.model.create({ data: this.handlePresidenteBodyCreate(presidente) });
            return created.id;
        });
    }

    public async patchPresidenteById(id: number, body: any): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            const presidente = this.validatePatchBody(body);
            await this.checkIfExistsById(id, 'Presidente');
            await this.model.update({
                where: { id },
                data: await this.handlePresidenteBodyUpdate(presidente, id)
            });
        });
    }

    public async delPresidenteById(id: number): Promise<void> {
        return handlePrismaError(async () => {
            this.validateId(id, 'id');
            await this.checkIfExistsById(id, 'Presidente');

            const deletePresidente = this.model.delete({ where: { id } });
            const deletePersona = prisma.persona.delete({ where: { id } });

            await prisma.$transaction([deletePresidente, deletePersona]);
        });
    }
}

export default new PresidenteService();
