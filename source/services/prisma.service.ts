import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
    if (params.model == 'Stanza') {
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch (params.action) {
            case 'delete':
                params.action = 'update';
                params.args.data = { eliminato: new Date() };
                break;
            case 'deleteMany':
                params.action = 'updateMany';
                if (params.args.data != undefined) {
                    params.args.data.eliminato = new Date();
                } else {
                    params.args.data = { eliminato: new Date() };
                }
                break;
            case 'findUnique':
                params.action = 'findFirst';
                params.args.where.eliminato = null;
                break;
            case 'findFirst':
                if (params.args.where !== undefined && params.args.where.eliminato === undefined) {
                    params.args.where.eliminato = null;
                }
                break;
            case 'findMany':
                if (params.args.where !== undefined) {
                    if (params.args.where.eliminato === undefined) {
                        params.args.where.eliminato = null;
                    }
                } else {
                    params.args.where = { eliminato: null };
                }
                break;
            case 'update':
                params.action = 'updateMany';
                params.args.where.elminato = null;
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
