import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ log: ['query'] });

const softDeletables = [
    // 'Fabbricato',
    // 'Stanza',
    // 'PostoLetto',
    'Tariffa',
    'DipartimentoUnitn',
    'Presidente',
    'Persona',
    'Ospite',
    'Utente'
    // 'Comune'
];

prisma.$use(async (params, next) => {
    if (params.model && softDeletables.includes(params.model)) {
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch (params.action) {
            case 'delete':
                params.action = 'update';
                params.args.data = { eliminato: new Date() };
                break;
            case 'deleteMany':
                params.action = 'updateMany';
                if (params.args.where !== undefined) {
                    if (params.args.where.eliminato === undefined) {
                        params.args.where.eliminato = null;
                    }
                } else {
                    params.args.where = { eliminato: null };
                }
                if (params.args.data != undefined) {
                    params.args.data.eliminato = new Date();
                } else {
                    params.args.data = { eliminato: new Date() };
                }
                break;
            case 'findUnique':
                params.action = 'findFirst';
                // if a key contains an underscore, it is an "unique group"
                const uniqueGroups = Object.keys(params.args.where)
                    .filter(key => key.includes('_'))
                    .reduce((acc, curr) => ({ ...acc, ...params.args.where[curr] }), {});
                // Otherwise, it is normal
                const normal = Object.keys(params.args.where)
                    .filter(key => !key.includes('_'))
                    .reduce((acc, curr) => ({ ...acc, [curr]: params.args.where[curr] }), {});
                params.args.where = { eliminato: null, ...uniqueGroups, ...normal };
                break;
            case 'findFirst':
                if (params.args.where !== undefined && params.args.where.eliminato === undefined) {
                    params.args.where.eliminato = null;
                }
                break;
            case 'findMany':
                // If there are not args (I do not know why, it happens but is should not), add the args, the where and the eliminato
                if (params.args === undefined) {
                    params.args = { where: { eliminato: null } };
                }
                // If there is where, add only the eliminato
                else if (params.args.where !== undefined) {
                    if (params.args.where.eliminato === undefined) {
                        params.args.where.eliminato = null;
                    }
                }
                // Otherwise add the where and the eliminato
                else {
                    params.args.where = { eliminato: null };
                }
                break;
            case 'count':
                if (params.args.where !== undefined) {
                    if (params.args.where.eliminato === undefined) {
                        params.args.where.eliminato = null;
                    }
                } else {
                    params.args.where = { eliminato: null };
                }
                break;
            case 'update':
                if (!['Presidente', 'Ospite'].includes(params.model)) {
                    params.action = 'updateMany';
                    params.args.where.eliminato = null;
                }
                break;
            case 'updateMany':
                if (params.args.where !== undefined) {
                    params.args.where.eliminato = null;
                } else {
                    params.args.where = { eliminato: null };
                }
                break;
        }
    }
    return next(params);
});

export default prisma;
export * from '@prisma/client';
