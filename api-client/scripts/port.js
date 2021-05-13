const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const DB_TYPES_OUT = path.join(__dirname, '..', 'source', 'db-types', 'index.ts');
const PRISMA_PATH = path.join(__dirname, '..', '..', 'node_modules', '.prisma', 'client', 'index.d.ts');
const START = '/**\n * Model';
const END = '/**\n * ##  Prisma Client';
const TABELLONE_TYPE = `
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

export interface FilesInfo {
    path: string;
    size: string;
    extension: string;
}
`;

const prismaText = fs.readFileSync(PRISMA_PATH, 'utf-8');
const fromIndex = prismaText.indexOf(START);
const toIndex = prismaText.indexOf(END);
const prismaResult = prismaText.slice(fromIndex, toIndex).replace(/: {/g, ' = {') + '\n' + TABELLONE_TYPE;

fs.writeFileSync(DB_TYPES_OUT, prismaResult);

const ERRORS_INPUT_PATH = path.join(__dirname, '..', '..', 'source', 'errors');
const ERRORS_OUTPUT_PATH = path.join(__dirname, '..', 'source', 'errors', 'apiErrors');
fse.copySync(ERRORS_INPUT_PATH, ERRORS_OUTPUT_PATH, { overwrite: true }, function (error) {
    if (error) {                
        console.error(error);
    }
});