import { DipartimentoUnitn } from '@prisma/client';

const DIPARTIMENTI_UNITN: Omit<DipartimentoUnitn, 'id' | 'dataCreazione' | 'eliminato'>[] = [
    {
        "codice": "04D1",
        "sigla": "DLF",
        "nome": "Dipartimento di Lettere e Filosofia",
        "comune": "Trento",
        "cap": "38122",
        "indirizzo": "via Tommaso Gar",
        "nCivico": "14",
        "provincia": "TN",
        "sitoWeb": "https://www.lettere.unitn.it/"
    },
    {
        "codice": "05D2",
        "sigla": "DM",
        "nome": "Dipartimento di Matematica",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Sommarive",
        "nCivico": "14",
        "provincia": "TN",
        "sitoWeb": "https://www.maths.unitn.it/"
    },
    {
        "codice": "07D1",
        "sigla": "DiPSCo",
        "nome": "Dipartimento di Psicologia e Scienze Cognitive",
        "comune": "Rovereto",
        "cap": "38068",
        "indirizzo": "Corso Bettini",
        "nCivico": "84",
        "provincia": "TN",
        "sitoWeb": "https://www.cogsci.unitn.it/"
    },
    {
        "codice": "05D1",
        "sigla": "DF",
        "nome": "Dipartimento di Fisica",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Sommarive",
        "nCivico": "14",
        "provincia": "TN",
        "sitoWeb": "https://www.physics.unitn.it/"
    },
    {
        "codice": "07D2",
        "sigla": "CIMeC",
        "nome": "Centro interdipartimentale Mente/Cervello - CIMeC",
        "comune": "Rovereto",
        "cap": "38068",
        "indirizzo": "corso Bettini",
        "nCivico": "31",
        "provincia": "TN",
        "sitoWeb": "https://www.cimec.unitn.it/"
    },
    {
        "codice": "08D1",
        "sigla": "SSI",
        "nome": "Scuola di Studi Internazionali",
        "comune": "Trento",
        "cap": "38122",
        "indirizzo": "Via Verdi",
        "nCivico": "14",
        "provincia": "TN",
        "sitoWeb": "https://www.sis.unitn.it/"
    },
    {
        "codice": "01D1",
        "sigla": "DEM",
        "nome": "Dipartimento di Economia e Management",
        "comune": "Trento",
        "cap": "38122",
        "indirizzo": "Via Inama",
        "nCivico": "5",
        "provincia": "TN",
        "sitoWeb": "https://www.economia.unitn.it/"
    },
    {
        "codice": "06D1",
        "sigla": "DSRS",
        "nome": "Dipartimento di Sociologia e Ricerca Sociale",
        "comune": "Trento",
        "cap": "38122",
        "indirizzo": "Via Verdi",
        "nCivico": "26",
        "provincia": "TN",
        "sitoWeb": "https://www.sociologia.unitn.it/"
    },
    {
        "codice": "09D1",
        "sigla": "C3A",
        "nome": "Centro Agricoltura, Alimenti, Ambiente",
        "comune": "San Michele all'Adige",
        "cap": "38010",
        "indirizzo": "via E. Mach",
        "nCivico": "1",
        "provincia": "TN",
        "sitoWeb": "https://www.centro3a.unitn.it/"
    },
    {
        "codice": "05D3",
        "sigla": "DCIBIO",
        "nome": "Dipartimento Biologia Cellulare, Computazionale e Integrata - DCIBIO",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Sommarive",
        "nCivico": "9",
        "provincia": "TN",
        "sitoWeb": "https://www.cibio.unitn.it/"
    },
    {
        "codice": "02D1",
        "sigla": "DFGIURI",
        "nome": "Facolt?? di Giurisprudenza",
        "comune": "Trento",
        "cap": "38122",
        "indirizzo": "Via Verdi",
        "nCivico": "53",
        "provincia": "TN",
        "sitoWeb": "https://www.giurisprudenza.unitn.it/"
    },
    {
        "codice": "03D1",
        "sigla": "DICAM",
        "nome": "Dipartimento di Ingegneria Civile, Ambientale e Meccanica",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Mesiano",
        "nCivico": "77",
        "provincia": "TN",
        "sitoWeb": "https://www.dicam.unitn.it/"
    },
    {
        "codice": "03D2",
        "sigla": "DII",
        "nome": "Dipartimento di Ingegneria Industriale",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Sommarive",
        "nCivico": "9",
        "provincia": "TN",
        "sitoWeb": "https://www.dii.unitn.it/"
    },
    {
        "codice": "03D3",
        "sigla": "DISI",
        "nome": "Dipartimento di Ingegneria e Scienza dell'Informazione",
        "comune": "Trento",
        "cap": "38123",
        "indirizzo": "Via Sommarive",
        "nCivico": "9",
        "provincia": "TN",
        "sitoWeb": "https://disi.unitn.it/"
    }
]
    ;

export default DIPARTIMENTI_UNITN;