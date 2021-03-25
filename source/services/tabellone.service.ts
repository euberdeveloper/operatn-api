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
    manutenzioneDataCreazione: Date;
    personaId: number;
    personaNome: string;
    personaCognome: string;
    personaCodiceFiscale: string;
    personaSesso: Sesso;
    ospiteCittadinanza: string;
    ospiteEmail: string;
    ospiteTelefonoPrincipale: string;
    ospiteTelefonoSecondario: string;
    contrattoId: number;
    contrattoDataInizio: Date;
    contrattoDataFine: Date;
    tipoContrattoSigla: string;
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
    contrattoId: 'ID CONTRATTO',
    contrattoDataInizio: 'DATA INIZIO CONTRATTO',
    contrattoDataFine: 'DATA FINE CONTRATTO',
    tipoContrattoSigla: 'SIGLA TIPO CONTRATTO',
    contrattoNote: 'NOTE CONTRATTO'
};

export class AuthService {
    private async fetchData(): Promise<Tabellone[]> {
        const start = dayjs().utc().toDate();
        const end = dayjs().utc().add(2, 'months').toDate();

        const startString = start.toISOString();
        const endString = end.toISOString();

        let result: Tabellone[];

        try {
            result = await prisma.$queryRaw<Tabellone[]>(`
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
                M._data_creazione AS "manutenzioneDataCreazione",
                P.id AS "personaId",
                P.nome AS "personaNome",
                P.cognome AS "personaCognome",
                P.codice_fiscale AS "personaCodiceFiscale",
                P.sesso AS "personaSesso",
                O.cittadinanza AS "ospiteCittadinanza",
                O.email AS "ospiteEmail",
                O.telefono_principale AS "ospiteTelefonoPrincipale",
                O.telefono_secondario AS "ospiteTelefonoSecondario",
                C.id AS "contrattoId",
                C.data_inizio AS "contrattoDataInizio",
                C.data_fine AS "contrattoDataFine",
                TC.sigla AS "tipoContrattoSigla",
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
                AND NOT (M._data_creazione > '${endString}'::date)
            )
            LEFT JOIN test.contratto_su_ospite_su_posto_letto COP
            ON COP.id_posto_letto = PL.id
            LEFT JOIN test.contratto C
            ON (
                COP.id_contratto = C.id
                AND NOT (
                    C.data_fine < '${startString}'::date
                    OR C.data_inizio > '${endString}'::date
                )
            )
            LEFT JOIN test.contratto_su_ospite CO
            ON (
                CO.id_contratto = C.id
                AND CO.id_ospite = COP.id_ospite
            )
            LEFT JOIN test.tipo_contratto TC
            ON C.id_tipo_contratto = TC.id
            LEFT JOIN test.persona P
            ON CO.id_ospite = P.id
            LEFT JOIN test.ospite O
            ON P.id = O.id;
        `);
        } catch (error) {
            logger.warning('Prisma tabellone error', error);
            throw error;
        }

        return result;
    }

    public async getTabellone(): Promise<Tabellone[]> {
        return this.fetchData();
    }

    public async getTabelloneTsv(): Promise<string> {
        const data = await this.fetchData();
        const headers = Object.keys(headersMap)
            .map(key => (headersMap as any)[key])
            .join('\t');
        const rows = data
            .map(row =>
                Object.keys(row)
                    .map(key => (row as any)[key])
                    .join('\t')
            )
            .join('\n');
        const text = [headers, rows].join('\n');

        const filePath = await fileSystemService.storeTemp(text, 'tsv');
        return filePath;
    }
}

export default new AuthService();
