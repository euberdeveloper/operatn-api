import { DipartimentoUnitn } from '@prisma/client';

const DIPARTIMENTI_UNITN: Omit<DipartimentoUnitn, 'id' | 'creato_il' | 'eliminato'>[] = [
    {
        "codice": "04D1",
        "sigla": null,
        "nome": "Dipartimento di Lettere e Filosofia",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "via Tommaso Gar",
        "n_civico": "14",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/lettere"
    },
    {
        "codice": "05D2",
        "sigla": null,
        "nome": "Dipartimento di Matematica",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Sommarive",
        "n_civico": "14",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/dmath"
    },
    {
        "codice": "07D1",
        "sigla": null,
        "nome": "Dipartimento di Psicologia e Scienze Cognitive",
        "comune": "Rovereto",
        "cap": "38068",
        "indirizzo": "Corso Bettini",
        "n_civico": "84",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/cogsci"
    },
    {
        "codice": "05D1",
        "sigla": null,
        "nome": "Dipartimento di Fisica",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Sommarive",
        "n_civico": "14",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/dphys"
    },
    {
        "codice": "07D2",
        "sigla": null,
        "nome": "Centro interdipartimentale Mente/Cervello- CIMeC",
        "comune": "Rovereto",
        "cap": "38068",
        "indirizzo": "corso Bettini",
        "n_civico": "31",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/cimec"
    },
    {
        "codice": "08D1",
        "sigla": null,
        "nome": "Scuola di studi Internazionali",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Verdi",
        "n_civico": "8/10",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/ssi"
    },
    {
        "codice": "01D1",
        "sigla": null,
        "nome": "Dipartimento di Economia e Management",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Inama",
        "n_civico": "5",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/economia"
    },
    {
        "codice": "06D1",
        "sigla": null,
        "nome": "Dipartimento di Sociologia e Ricerca Sociale",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Verdi",
        "n_civico": "26",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/sociologia"
    },
    {
        "codice": "09D1",
        "sigla": "C3A",
        "nome": "Centro Agricoltura Alimenti Ambiente",
        "comune": "San michele all'adige",
        "cap": "38010",
        "indirizzo": "via E. Mach",
        "n_civico": "1",
        "provincia": "TN",
        "sito_web": "https://www.centro3a.unitn.it/"
    },
    {
        "codice": "05D3",
        "sigla": "CIBIO",
        "nome": "Dipartimento di Biologia Cellulare Computazionale e Integrata",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Sommarive",
        "n_civico": "14",
        "provincia": "TN",
        "sito_web": "https://www.cibio.unitn.it/"
    },
    {
        "codice": "02D1",
        "sigla": null,
        "nome": "Facoltà di Giurisprudenza",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Verdi",
        "n_civico": "53",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/giurisprudenza"
    },
    {
        "codice": "03D1",
        "sigla": "DICAM",
        "nome": "Dipartimento di Ingegneria Civile Ambientale e Meccanica",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Mesiano",
        "n_civico": "77",
        "provincia": "TN",
        "sito_web": "https://web.unitn.it/dicam"
    },
    {
        "codice": "03D2",
        "sigla": "DII",
        "nome": "Dipartimento di Ingegneria Industriale",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Sommarive",
        "n_civico": "5",
        "provincia": "TN",
        "sito_web": "https://www.unitn.it/ateneo/25346/dipartimento-di-ingegneria-industriale"
    },
    {
        "codice": "03D3",
        "sigla": "DISI",
        "nome": "Dipartimento di Ingegneria e Scienza dell'Informazione",
        "comune": "Trento",
        "cap": "38100",
        "indirizzo": "Via Sommarive",
        "n_civico": "5",
        "provincia": "TN",
        "sito_web": "https://disi.unitn.it/"
    }
];

export default DIPARTIMENTI_UNITN;