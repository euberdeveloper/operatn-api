/* eslint-disable @typescript-eslint/naming-convention */
import * as dayjs from 'dayjs';
import * as ExcelJS from 'exceljs';
import prisma, { Sesso } from '@/services/prisma.service';
import fileSystemService, { FilesInfo } from '@/services/filesystem.service';
import logger from '@/utils/logger';
import { InvalidQueryParamError } from '@/errors';

export interface Tabellone {
    fabbricatoId: number;
    fabbricatoCodice: string;
    fabbricatoNome: string;
    fabbricatoComune: string;
    fabbricatoIndirizzo: string;
    fabbricatoNCivico: string;
    stanzaUnitaImmobiliare: string;
    stanzaPiano: string | null;
    tipoStanzaTipoStanza: string;
    stanzaNumeroStanza: string;
    postoLettoPostoLetto: string;
    stanzaGestioneDiretta: boolean;
    stanzaNote: string | null;
    manutenzioneDataCreazione: string | null;
    personaId: number | null;
    personaNome: string | null;
    personaCognome: string | null;
    personaCodiceFiscale: string | null;
    personaSesso: Sesso | null;
    ospiteCittadinanza: string | null;
    ospiteEmail: string | null;
    ospiteTelefonoPrincipale: string | null;
    ospiteTelefonoSecondario: string | null;
    dipartimentoUnitnCodice: string | null;
    dipartimentoUnitnNome: string | null;
    contrattoId: number | null;
    contrattoDataInizio: string | null;
    contrattoDataFine: string | null;
    tipoContrattoSigla: string | null;
    tipoOspiteSigla: string | null;
    contrattoNote: string | null;
}

const headersMap: Record<string, string> = {
    fabbricatoId: 'ID FABBRICATO',
    fabbricatoCodice: 'CODICE FABBRICATO',
    fabbricatoNome: 'NOME FABBRICATO',
    fabbricatoComune: 'COMUNE FABBRICATO',
    fabbricatoIndirizzo: 'INDIRIZZO FABBRICATO',
    fabbricatoNCivico: 'NUMERO FABBRICATO',
    stanzaUnitaImmobiliare: 'UNITÀ IMMOBILIARE STANZA',
    stanzaPiano: 'PIANO STANZA',
    tipoStanzaTipoStanza: 'TIPO STANZA',
    stanzaNumeroStanza: 'NUMERO STANZA',
    postoLettoPostoLetto: 'POSTO LETTO',
    stanzaNote: 'NOTE STANZA',
    personaId: 'ID OSPITE',
    personaSesso: 'SESSO OSPITE',
    ospiteCittadinanza: 'CITTADINANZA OSPITE',
    personaCognome: 'COGNOME OSPITE',
    personaNome: 'NOME OSPITE',
    contrattoDataInizio: 'DATA INIZIO CONTRATTO',
    contrattoDataFine: 'DATA FINE CONTRATTO',
    tipoOspiteSigla: 'SIGLA TIPO OSPITE',
    tipoContrattoSigla: 'SIGLA TIPO CONTRATTO',
    dipartimentoUnitnCodice: 'CODICE DIPARTIMENTO',
    dipartimentoUnitnNome: 'NOME DIPARTIMENTO',
    personaCodiceFiscale: 'CODICE FISCALE OSPITE',
    ospiteEmail: 'EMAIL OSPITE',
    ospiteTelefonoPrincipale: 'TELEFONO PRINCIPALE OSPITE',
    ospiteTelefonoSecondario: 'TELEFONO SECONDARIO OSPITE',
    contrattoId: 'ID CONTRATTO',
    contrattoNote: 'NOTE CONTRATTO',
    manutenzioneDataCreazione: 'DATA INIZIO MANUTENZIONE',
    stanzaGestioneDiretta: 'GESTIONE DIRETTA'
};

export class TabelloneService {
    private validateQueryDate(value: string[] | undefined, name: string): Date {
        const singleValue = Array.isArray(value) ? value[value.length - 1] : value;

        if (singleValue === undefined) {
            throw new InvalidQueryParamError(`${name} query parameter should be passed.`);
        }

        const result = new Date(singleValue);
        if (isNaN(+result)) {
            throw new InvalidQueryParamError(`${name} query parameter should be a valid ISO date.`);
        }

        return result;
    }

    private extractDatesFromQuery(queryParams: Record<string, string[] | undefined>): [Date, Date] {
        const { startDate, endDate } = queryParams;
        return [this.validateQueryDate(startDate, 'startDate'), this.validateQueryDate(endDate, 'endDate')];
    }

    private async fetchData(start: Date, end: Date): Promise<Tabellone[]> {
        let result: Tabellone[];

        if (+end < +start) {
            throw new InvalidQueryParamError('Data inizio must be before data fine');
        }

        try {
            result = await prisma.$queryRaw<Tabellone[]>`
            SELECT
                F.id AS "fabbricatoId",
                F.codice AS "fabbricatoCodice",
                F.nome AS "fabbricatoNome",
                F.comune AS "fabbricatoComune",
                F.indirizzo AS "fabbricatoIndirizzo",
                F.n_civico AS "fabbricatoNCivico",
                S.unita_immobiliare AS "stanzaUnitaImmobiliare",
                S.piano AS "stanzaPiano",
                TS.tipo_stanza AS "tipoStanzaTipoStanza",
                S.numero_stanza AS "stanzaNumeroStanza",
                PL.posto_letto AS "postoLettoPostoLetto",
                S.note AS "stanzaNote",
                P.id AS "personaId",
                P.sesso AS "personaSesso",
                O.cittadinanza AS "ospiteCittadinanza",
                P.cognome AS "personaCognome",
                P.nome AS "personaNome",
                to_char(C.data_inizio, 'DD/MM/YYYY') AS "contrattoDataInizio",
                to_char(C.data_fine, 'DD/MM/YYYY') AS "contrattoDataFine",
                OT.sigla AS "tipoOspiteSigla",
                TC.sigla AS "tipoContrattoSigla",
                DU.codice AS "dipartimentoUnitnCodice",
                DU.nome AS "dipartimentoUnitnNome",
                P.codice_fiscale AS "personaCodiceFiscale",
                O.email AS "ospiteEmail",
                O.telefono_principale AS "ospiteTelefonoPrincipale",
                O.telefono_secondario AS "ospiteTelefonoSecondario",
                C.id AS "contrattoId",
                C.note AS "contrattoNote",
                to_char(M._data_creazione, 'DD/MM/YYYY') AS "manutenzioneDataCreazione",
                S.gestione_diretta AS "stanzaGestioneDiretta"
            FROM posto_letto PL
            JOIN stanza S
            ON PL.id_stanza = S.id
            JOIN tipo_stanza TS
            ON S.id_tipo_stanza = TS.id
            JOIN fabbricato F
            ON S.id_fabbricato = F.id
            LEFT JOIN manutenzione M
            ON (
                S.id = M.id_stanza
                AND M._eliminato = NULL
                AND NOT (M._data_creazione > ${end})
            )
            LEFT JOIN contratto_su_ospite_su_posto_letto COP
            ON COP.id_posto_letto = PL.id
            LEFT JOIN contratto C
            ON (
                COP.id_contratto = C.id
                AND NOT (
                    C.data_fine < ${start}
                    OR C.data_inizio > ${end}
                )
            )
            LEFT JOIN contratto_su_ospite CO
            ON (
                CO.id_contratto = C.id
                AND CO.id_ospite = COP.id_ospite
            )
            LEFT JOIN tipo_contratto TC
            ON C.id_tipo_contratto = TC.id
            LEFT JOIN tariffa TR
            ON C.id_tariffa = TR.id
            LEFT JOIN tipo_ospite OT
            ON TR.id_tipo_ospite = OT.id
            LEFT JOIN persona P
            ON CO.id_ospite = P.id
            LEFT JOIN ospite O
            ON P.id = O.id
            LEFT JOIN dipartimento_unitn DU
            ON O.codice_dipartimento_unitn = DU.codice
            ORDER BY F.indirizzo, S.numero_stanza;
        `;
        } catch (error) {
            logger.warning('Prisma tabellone error', error);
            throw error;
        }

        return result;
    }

    private toTsv(data: Tabellone[]): string {
        const headers = Object.keys(headersMap)
            .map(key => (headersMap as any)[key])
            .join('\t');
        const rows = data
            .map(row =>
                Object.keys(row)
                    .map(key => (row as any)[key])
                    .map(v => (typeof v === 'boolean' ? (v ? 'SI' : 'NO') : v))
                    .join('\t')
            )
            .join('\n');
        const text = [headers, rows].join('\n');
        return text;
    }

    private toXlsx(data: Tabellone[]): ExcelJS.Workbook {
        const HEADER_FSIZE = 12;
        const HEADER_BORDER_WIDTH = 'medium';
        const FREE_POSTO_LETTO_COL = '00CAE493';
        const MANUTENZIONE_POSTO_LETTO_COL = '00E49393';
        const MALE_POSTO_LETTO_COL = '0079A1D6';
        const FEMALE_POSTO_LETTO_COL = '00EFADE9';
        const ARRIVAL_COL = '007FBD98';
        const DEPARTURE_COL = '00FDFF91';

        function addLegenda(
            title: string,
            legenda: { colour: string; text: string }[],
            rowOffset: number,
            columnOffset: number,
            sheet: ExcelJS.Worksheet
        ) {
            sheet.mergeCells(rowOffset, columnOffset, rowOffset, columnOffset + 1);
            const headerLegendaCell = sheet.getCell(rowOffset, columnOffset + 1);
            headerLegendaCell.value = title;
            headerLegendaCell.font = { bold: true };
            headerLegendaCell.border = {
                top: { style: HEADER_BORDER_WIDTH },
                left: { style: HEADER_BORDER_WIDTH },
                right: { style: HEADER_BORDER_WIDTH },
                bottom: { style: HEADER_BORDER_WIDTH }
            };
            for (let i = 0; i < legenda.length; i++) {
                const row = sheet.getRow(rowOffset + i + 1);
                const el = legenda[i];

                const isLastRow = i === legenda.length - 1;

                const colourCell = row.getCell(columnOffset);
                const descriptionCell = row.getCell(columnOffset + 1);

                colourCell.border = {
                    left: { style: HEADER_BORDER_WIDTH },
                    bottom: { style: isLastRow ? HEADER_BORDER_WIDTH : undefined }
                };
                colourCell.style.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: el.colour }
                };

                descriptionCell.value = el.text;
                descriptionCell.border = {
                    right: { style: HEADER_BORDER_WIDTH },
                    bottom: { style: isLastRow ? HEADER_BORDER_WIDTH : undefined }
                };
            }
        }

        const workbook = new ExcelJS.Workbook();
        workbook.creator = 'Eugenio Vinicio Berretta <euberdeveloper@gmail.com>';
        workbook.created = new Date();
        workbook.properties.date1904 = true;

        const sheet = workbook.addWorksheet('Tabellone', {
            headerFooter: {
                firstHeader: 'Tabellone alloggi'
            }
        });

        const legendaAlloggi = [
            { colour: FREE_POSTO_LETTO_COL, text: 'POSTO LETTO LIBERO' },
            { colour: MANUTENZIONE_POSTO_LETTO_COL, text: 'POSTO LETTO IN MANUTENZIONE' },
            { colour: MALE_POSTO_LETTO_COL, text: 'POSTO LETTO CON MASCHIO' },
            { colour: FEMALE_POSTO_LETTO_COL, text: 'POSTO LETTO CON FEMMINA' }
        ];
        addLegenda('LEGENDA COLORE ALLOGGI', legendaAlloggi, 2, 2, sheet);

        const legendaContratti = [
            { colour: ARRIVAL_COL, text: 'INIZIO CONTRATTO ENTRO DUE MESI' },
            { colour: DEPARTURE_COL, text: 'FINE CONTRATTO ENTRO DUE MESI' }
        ];
        addLegenda('LEGENDA COLORE CONTRATTI', legendaContratti, 2, 5, sheet);

        const dataRowOffset = 2 + Math.max(legendaAlloggi.length, legendaContratti.length) + 2;
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

        const start = dayjs().utc().format('DD/MM/YYYY');
        const end = dayjs().utc().add(2, 'months').format('DD/MM/YYYY');
        for (let i = 0; i < data.length; i++) {
            const tuple = data[i];
            const keys = Object.keys(tuple);
            const row = sheet.getRow(i + dataRowOffset + 1);

            const isLastRow = i === data.length - 1;

            for (let j = 0; j < keys.length; j++) {
                const key = keys[j];
                const value = (tuple as any)[key];
                const cell = row.getCell(j + 2);

                const isFirstColumn = j === 0;
                const isLastColumn = j === keys.length - 1;

                if (['stanzaGestioneDiretta'].includes(key)) {
                    cell.value = value === true ? 'SI' : 'NO';
                } else {
                    cell.value = value;
                }

                if (['stanzaNumeroStanza', 'postoLettoPostoLetto'].includes(key)) {
                    switch (tuple.personaSesso) {
                        case null:
                            cell.style.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: {
                                    argb: tuple.manutenzioneDataCreazione
                                        ? MANUTENZIONE_POSTO_LETTO_COL
                                        : FREE_POSTO_LETTO_COL
                                }
                            };
                            break;
                        case 'MASCHIO':
                            cell.style.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: MALE_POSTO_LETTO_COL }
                            };
                            break;
                        case 'FEMMINA':
                            cell.style.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: FEMALE_POSTO_LETTO_COL }
                            };
                            break;
                    }
                } else if (
                    key === 'contrattoDataInizio' &&
                    !!value &&
                    +dayjs(value, 'DD/MM/YYYY') >= +start &&
                    +dayjs(value, 'DD/MM/YYYY') <= +end
                ) {
                    cell.style.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: {
                            argb: ARRIVAL_COL
                        }
                    };
                } else if (
                    key === 'contrattoDataFine' &&
                    !!value &&
                    +dayjs(value, 'DD/MM/YYYY') >= +start &&
                    +dayjs(value, 'DD/MM/YYYY') <= +end
                ) {
                    cell.style.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: {
                            argb: DEPARTURE_COL
                        }
                    };
                }
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
        }

        return workbook;
    }

    public async getTabellone(queryParams: any): Promise<Tabellone[]> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        return this.fetchData(startDate, endDate);
    }

    public async getTabelloneCronology(): Promise<FilesInfo[]> {
        return fileSystemService.filesOfStoredDir('tabellone');
    }

    public async getTabelloneTsv(queryParams: any): Promise<string> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const data = await this.fetchData(startDate, endDate);
        const text = this.toTsv(data);

        const filePath = await fileSystemService.saveTempRandomName(text, 'tsv');
        return filePath;
    }

    public async getTabelloneXlsx(queryParams: any): Promise<string> {
        const [startDate, endDate] = this.extractDatesFromQuery(queryParams);
        const data = await this.fetchData(startDate, endDate);
        const workbook = this.toXlsx(data);

        const filePath = await fileSystemService.saveTempXls(workbook);
        return filePath;
    }

    public async storeTabelloneTsv(startDate: Date, endDate: Date): Promise<{ filePath: string; fileName: string }> {
        const data = await this.fetchData(startDate, endDate);
        const text = this.toTsv(data);

        const dateString = new Date().toLocaleDateString('it').replace(/\//g, '-');
        const fileName = `tabellone_${dateString}.tsv`;

        const filePath = await fileSystemService.saveStored(text, fileName, 'tabellone');
        return { filePath, fileName };
    }

    public async storeTabelloneXlsx(startDate: Date, endDate: Date): Promise<{ filePath: string; fileName: string }> {
        const data = await this.fetchData(startDate, endDate);
        const workbook = this.toXlsx(data);

        const dateString = new Date().toISOString().slice(0, 10).replace(/-/g, '_');
        const fileName = `tabellone_${dateString}.xlsx`;

        const filePath = await fileSystemService.saveStoredXls(workbook, fileName, 'tabellone');
        return { filePath, fileName };
    }

    public async getRecipients(): Promise<Set<string>> {
        try {
            const result = await prisma.utente.findMany({ select: { email: true } });
            return new Set(result.map(r => r.email));
        } catch (error) {
            logger.error('Get recipients error', error);
            throw error;
        }
    }

    public getTwoMonthsFromNow(): [Date, Date] {
        const start = dayjs().utc().toDate();
        const end = dayjs().utc().add(2, 'months').toDate();
        return [start, end];
    }
}

export default new TabelloneService();
