import { PrismaClient } from '@prisma/client';
import { Logger } from 'euberlog';
import { constantCase } from 'change-case';

import UTENTI from './data/utente';
import TIPI_STANZE from './data/tipo_stanza';
import UTILIZZI_STANZE from './data/utilizzo_stanza';
import TIPI_TARIFFE from './data/tipo_tariffa';
import TIPI_RATE from './data/tipo_rata';
import TIPI_FABBRICATO from './data/tipo_fabbricato';
import PRESIDENTI from './data/presidente';
import DIPARTIMENTI_UNITN from './data/dipartimento_unitn';
import OSPITI from './data/ospite';
import FABBRICATI from './data/fabbricato';

async function main() {
    const prisma = new PrismaClient();
    const logger = new Logger();

    // Log functions
    function logInsert(count: number, relation: string): void {
        count > 0
            ? logger.success(`Inserted ${count} tuples in ${relation}`)
            : logger.warning(`Inserted ${count} tuples in ${relation} because they already exist`);
    }
    function logError(error: any, relation: string): void {
        logger.error(`Cannot insert tuples in ${relation}`, error);
    }

    // Populate function
    async function populate(table: string, data: any[], multiple = true): Promise<void> {
        try {
            if (multiple) {
                const result = await prisma[table].createMany({ data: data, skipDuplicates: true });
                logInsert(result.count, constantCase(table));
            }
            else {
                for (const el of data) {
                    await prisma[table].create({
                        data: el
                    });
                }
                logInsert(data.length, constantCase(table));
            }
        }
        catch (error) {
            logError(error, constantCase(table));
        }
    }

    logger.info('Populating database...');
    logger.hr();
    await populate('utente', UTENTI);
    await populate('utilizzoStanza', UTILIZZI_STANZE);
    await populate('tipoTariffa', TIPI_TARIFFE);
    await populate('tipoRata', TIPI_RATE);
    await populate('tipoStanza', TIPI_STANZE);
    await populate('tipoFabbricato', TIPI_FABBRICATO);
    await populate('presidente', PRESIDENTI, false);
    await populate('dipartimentoUnitn', DIPARTIMENTI_UNITN);
    await populate('ospite', OSPITI, false);
    await populate('fabbricato', FABBRICATI);
    logger.hr();
    logger.info('Database populated');

    prisma.$disconnect();
}
main();
