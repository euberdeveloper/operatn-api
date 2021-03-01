import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UniqueConstraintError, ForeignKeyError } from '@/errors';
import logger from './logger';

export default async function <T>(callback: () => Promise<T>): Promise<T> {
    try {
        return await callback();
    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            switch (error.code) {
                case 'P2002':
                    logger.warning('Unique constraint error', error);
                    throw new UniqueConstraintError();
                case 'P2003':
                    logger.warning('Foreign key error', error);
                    throw new ForeignKeyError();
            }
        }
        throw error;
    }
}
