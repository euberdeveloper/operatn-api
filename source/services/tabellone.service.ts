import * as dayjs from 'dayjs';
import prisma, { Sesso } from '@/services/prisma.service';
import fileSystemService from '@/services/filesystem.service';
import logger from '@/utils/logger';

interface Tabellone {
    fabbricatoId: number;
    fabbricatoCodice: string;
    fabbricatoNome: string;
    fabbricatoComune: string;
    fabbricatoIndirizzo: string;
    fabbricatoNCivico: string;
    stanzaUnitaImmobiliare: string;
    stanzaPiano: string;
    stanzaNumeroStanza: string;
    postoLettoPostoLetto: string;
    stanzaGestioneDiretta: boolean;
    stanzaNote: string;
    manutenzioneDataCreazione: string;
    personaId: number;
    personaNome: string;
    personaCognome: string;
    personaCodiceFiscale: string;
    personaSesso: Sesso;
    ospiteCittadinanza: string;
    ospiteEmail: string;
    ospiteTelefonoPrincipale: string;
    ospiteTelefonoSecondario: string;
    dipartimentoUnitnCodice: string;
    dipartimentoUnitnNome: string;
    contrattoId: number;
    contrattoDataInizio: string;
    contrattoDataFine: string;
    tipoContrattoSigla: string;
    tipoOspiteSigla: string;
    contrattoNote: string;
}

const headersMap = {
    fabbricatoId: 'ID FABBRICATO',
    fabbricatoCodice: 'CODICE FABBRICATO',
    fabbricatoNome: 'NOME FABBRICATO',
    fabbricatoComune: 'COMUNE FABBRICATO',
    fabbricatoIndirizzo: 'INDIRIZZO FABBRICATO',
    fabbricatoNCivico: 'NUMERO FABBRICATO',
    stanzaUnitaImmobiliare: 'UNITÀ IMMOBILIARE STANZA',
    stanzaPiano: 'PIANO STANZA',
    stanzaNumeroStanza: 'NUMERO STANZA',
    postoLettoPostoLetto: 'POSTO LETTO',
    stanzaGestioneDiretta: 'GESTIONE DIRETTA',
    stanzaNote: 'NOTE STANZA',
    manutenzioneDataCreazione: 'DATA INIZIO MANUTENZIONE',
    personaId: 'ID OSPITE',
    personaNome: 'NOME OSPITE',
    personaCognome: 'COGNOME OSPITE',
    personaCodiceFiscale: 'CODICE FISCALE OSPITE',
    personaSesso: 'SESSO OSPITE',
    ospiteCittadinanza: 'CITTADINANZA OSPITE',
    ospiteEmail: 'EMAIL OSPITE',
    ospiteTelefonoPrincipale: 'TELEFONO PRINCIPALE OSPITE',
    ospiteTelefonoSecondario: 'TELEFONO SECONDARIO OSPITE',
    dipartimentoUnitnCodice: 'CODICE DIPARTIMENTO',
    dipartimentoUnitnNome: 'NOME DIPARTIMENTO',
    contrattoId: 'ID CONTRATTO',
    contrattoDataInizio: 'DATA INIZIO CONTRATTO',
    contrattoDataFine: 'DATA FINE CONTRATTO',
    tipoContrattoSigla: 'SIGLA TIPO CONTRATTO',
    tipoOspiteSigla: 'SIGLA TIPO OSPITE',
    contrattoNote: 'NOTE CONTRATTO'
};

export class AuthService {
    private async fetchData(): Promise<Tabellone[]> {
        const start = dayjs().utc().toDate();
        const end = dayjs().utc().add(2, 'months').toDate();

        let result: Tabellone[];

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
                S.numero_stanza AS "stanzaNumeroStanza",
                PL.posto_letto AS "postoLettoPostoLetto",
                S.gestione_diretta AS "stanzaGestioneDiretta",
                S.note AS "stanzaNote",
                to_char(M._data_creazione, 'DD/MM/YYYY') AS "manutenzioneDataCreazione",
                P.id AS "personaId",
                P.nome AS "personaNome",
                P.cognome AS "personaCognome",
                P.codice_fiscale AS "personaCodiceFiscale",
                P.sesso AS "personaSesso",
                O.cittadinanza AS "ospiteCittadinanza",
                O.email AS "ospiteEmail",
                O.telefono_principale AS "ospiteTelefonoPrincipale",
                O.telefono_secondario AS "ospiteTelefonoSecondario",
                DU.codice AS "dipartimentoUnitnCodice",
                DU.nome AS "dipartimentoUnitnNome",
                C.id AS "contrattoId",
                to_char(C.data_inizio, 'DD/MM/YYYY') AS "contrattoDataInizio",
                to_char(C.data_fine, 'DD/MM/YYYY') AS "contrattoDataFine",
                TC.sigla AS "tipoContrattoSigla",
                OT.sigla AS "tipoOspiteSigla",
                C.note AS "contrattoNote"
            FROM test.posto_letto PL
            JOIN test.stanza S
            ON PL.id_stanza = S.id
            JOIN test.fabbricato F
            ON S.id_fabbricato = F.id
            LEFT JOIN test.manutenzione M
            ON (
                S.id = M.id_stanza
                AND M._eliminato = NULL
                AND NOT (M._data_creazione > ${end})
            )
            LEFT JOIN test.contratto_su_ospite_su_posto_letto COP
            ON COP.id_posto_letto = PL.id
            LEFT JOIN test.contratto C
            ON (
                COP.id_contratto = C.id
                AND NOT (
                    C.data_fine < ${start}
                    OR C.data_inizio > ${end}
                )
            )
            LEFT JOIN test.contratto_su_ospite CO
            ON (
                CO.id_contratto = C.id
                AND CO.id_ospite = COP.id_ospite
            )
            LEFT JOIN test.tipo_contratto TC
            ON C.id_tipo_contratto = TC.id
            LEFT JOIN test.tariffa TR
            ON C.id_tariffa = TR.id
            LEFT JOIN test.tipo_ospite OT
            ON TR.id_tipo_ospite = OT.id
            LEFT JOIN test.persona P
            ON CO.id_ospite = P.id
            LEFT JOIN test.ospite O
            ON P.id = O.id
            LEFT JOIN test.dipartimento_unitn DU
            ON O.codice_dipartimento_unitn = DU.codice;
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

    public async getTabellone(): Promise<Tabellone[]> {
        return this.fetchData();
    }

    public async getTabelloneTsv(): Promise<string> {
        const data = await this.fetchData();
        const text = this.toTsv(data);

        const filePath = await fileSystemService.storeTemp(text, 'tsv');
        return filePath;
    }

    public async storeTabelloneTsv(): Promise<{ filePath: string; fileName: string }> {
        const data = await this.fetchData();
        const text = this.toTsv(data);

        const dateString = new Date().toLocaleDateString('it').replace(/\//g, '-');
        const fileName = `tabellone_${dateString}`;

        const filePath = await fileSystemService.storeStored(text, 'tabellone', 'tsv', fileName);
        return { filePath, fileName: `${fileName}.tsv` };
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
}

export default new AuthService();
