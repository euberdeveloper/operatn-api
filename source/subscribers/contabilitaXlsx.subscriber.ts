import { EventEmitter } from 'events';
import * as ExcelJS from 'exceljs';

import logger from '@/utils/logger';
import filesystemService from '@/services/filesystem.service';
import { BollettaInfo } from '@/services/contabilita.service';

import { headersMap, getTupleFromBollettaInfo } from './utils/contabilita';

export { BollettaInfo } from '@/services/contabilita.service';

const EVENT_NAME = 'CONTABILITA_XLSX';

export function loadContabilitaXlsx(emitter: EventEmitter): void {
    emitter.on(EVENT_NAME, async (bollette: BollettaInfo[], passedBollette: Set<number>, dirname: string) => {
        logger.info(`Executing subscriber ${EVENT_NAME}`);
        try {
            const HEADER_FSIZE = 12;
            const HEADER_BORDER_WIDTH = 'medium';
            const PASSED_POSTO_LETTO_COL = '0079A1D6';
            const FAILED_POSTO_LETTO_COL = '00EFADE9';

            const workbook = new ExcelJS.Workbook();
            workbook.creator = 'Eugenio Vinicio Berretta <euberdeveloper@gmail.com>';
            workbook.created = new Date();
            workbook.properties.date1904 = true;

            const sheet = workbook.addWorksheet('Contabilità', {
                headerFooter: {
                    firstHeader: 'Bollette inviate con successo'
                }
            });

            const dataRowOffset = 2;
            const headerRow = sheet.getRow(dataRowOffset);
            headerRow.height = HEADER_FSIZE + HEADER_FSIZE / 2;
            headerRow.alignment = { vertical: 'middle' };

            const hadersMapKeys = Object.keys(headersMap);
            for (let i = 0; i < hadersMapKeys.length; i++) {
                const value = headersMap[hadersMapKeys[i]];

                const column = sheet.getColumn(i + 2);
                column.width = value.length * 2;
                column.alignment = { horizontal: 'center' };

                const cell = headerRow.getCell(i + 2);
                cell.value = value;
                cell.border = {
                    top: { style: HEADER_BORDER_WIDTH },
                    left: { style: HEADER_BORDER_WIDTH },
                    right: { style: HEADER_BORDER_WIDTH },
                    bottom: { style: HEADER_BORDER_WIDTH }
                };
                cell.font = { size: HEADER_FSIZE, bold: true };
            }

            const tuples = bollette.map(b => getTupleFromBollettaInfo(b, passedBollette));
            for (let i = 0; i < tuples.length; i++) {
                const [tuple, passed] = tuples[i];
                const keys = Object.keys(tuple);
                const row = sheet.getRow(i + dataRowOffset + 1);

                const isLastRow = i === tuples.length - 1;

                for (let j = 0; j < keys.length; j++) {
                    const key = keys[j];
                    const value = tuple[key];
                    const cell = row.getCell(j + 2);

                    cell.value = value;

                    const isFirstColumn = j === 0;
                    const isLastColumn = j === keys.length - 1;

                    cell.style.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: passed ? PASSED_POSTO_LETTO_COL : FAILED_POSTO_LETTO_COL }
                    };

                    cell.border = {
                        left: {
                            style: isFirstColumn ? HEADER_BORDER_WIDTH : 'thin',
                            color: isFirstColumn ? { argb: '00000000' } : undefined
                        },
                        right: {
                            style: isLastColumn ? HEADER_BORDER_WIDTH : 'thin',
                            color: isLastColumn ? { argb: '00000000' } : undefined
                        },
                        bottom: {
                            style: isLastRow ? HEADER_BORDER_WIDTH : 'thin',
                            color: isLastRow ? { argb: '00000000' } : undefined
                        }
                    };
                }

                await filesystemService.saveStoredXls(workbook, `${dirname}.xlsx`, `contabilita/${dirname}`);
            }
        } catch (error) {
            logger.error(`Error in ${EVENT_NAME} event`, error);
        }
    });
}

export function emitContabilitaXlsx(
    emitter: EventEmitter,
    bollette: BollettaInfo[],
    passedBollette: Set<number>,
    dirname: string
): void {
    emitter.emit(EVENT_NAME, bollette, passedBollette, dirname);
}
