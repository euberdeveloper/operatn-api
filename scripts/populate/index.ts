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
import STANZE from './data/stanza';
import POSTI_LETTO from './data/posto_letto';
import CONTI_RICAVI_CONSUMI from './data/conto_ricavi_consumi';
import CONTI_RICAVI_CANONI from './data/conto_ricavi_canoni';
import TIPI_UTENTE from './data/tipo_utente';
import TARIFFE from './data/tariffa';
import TIPI_STUDENTE from './data/tipo_studente';
import TIPI_CONTRATTO from './data/tipo_contratto';


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
                let done = 0;
                for (const el of data) {
                    try {
                        await prisma[table].create({
                            data: el
                        });
                        done++;
                    }
                    catch (error) {
                        if (error.message.indexOf('Unique constraint') === -1) {
                            throw error;
                        }
                    }
                }
                logInsert(done, constantCase(table));
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
    await populate('tipoStudente', TIPI_STUDENTE);
    await populate('tipoContratto', TIPI_CONTRATTO, false);
    await populate('fabbricato', FABBRICATI);
    await populate('stanza', STANZE, false);
    await populate('postoLetto', POSTI_LETTO, false);
    await populate('contoRicaviConsumi', CONTI_RICAVI_CONSUMI);
    await populate('contoRicaviCanoni', CONTI_RICAVI_CANONI);
    await populate('tipoUtente', TIPI_UTENTE, false);
    await populate('tariffa', TARIFFE, false);
    await populate('ospite', OSPITI, false);
    logger.hr();
    logger.info('Database populated');

    prisma.$disconnect();
}
main();
