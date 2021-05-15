import { EventEmitter } from 'events';

import logger from '@/utils/logger';
import filesystemService from '@/services/filesystem.service';
import { BollettaInfo } from '@/services/contabilita.service';

import { headersMap, getTupleFromBollettaInfo } from './utils/contabilita';

export { BollettaInfo } from '@/services/contabilita.service';

const EVENT_NAME = 'CONTABILITA_TSV';

export function loadContabilitaTsv(emitter: EventEmitter): void {
    emitter.on(EVENT_NAME, async (bollette: BollettaInfo[], passedBollette: Set<number>, dirname: string) => {
        logger.info(`Executing subscriber ${EVENT_NAME}`);
        try {
            const headersArray = [...Object.keys(headersMap).map(key => (headersMap as any)[key]), 'PASSATO'];
            const headers = headersArray.join('\t');
            const data = bollette.map(b => {
                const [tuple, passed] = getTupleFromBollettaInfo(b, passedBollette);
                (tuple as any).passed = passed ? 'SI' : 'NO';
                return tuple;
            });
            const rows = data
                .map(row =>
                    Object.keys(row)
                        .map(key => row[key])
                        .join('\t')
                )
                .join('\n');
            const text = [headers, rows].join('\n');
            await filesystemService.saveStored(text, `${dirname}.tsv`, `contabilita/${dirname}`);
        } catch (error) {
            logger.error(`Error in ${EVENT_NAME} event`, error);
        }
    });
}

export function emitContabilitaTsv(
    emitter: EventEmitter,
    bollette: BollettaInfo[],
    passedBollette: Set<number>,
    dirname: string
): void {
    emitter.emit(EVENT_NAME, bollette, passedBollette, dirname);
}
