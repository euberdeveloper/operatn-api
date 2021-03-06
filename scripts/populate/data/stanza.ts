import { Stanza, Piano } from '@prisma/client';
type StanzaInsert = Omit<Stanza, 'id' | 'idTipoStanza' | 'idFabbricato' | 'dataCreazione' | 'eliminato'> & {
    dataCreazione: string;
    eliminato: string;
    fabbricato: {
        connect: {
            oldCode: number;
        }
    };
    tipoStanza: {
        connect: {
            tipoStanza: string;
        }
    };
};

const STANZE: StanzaInsert[] = [
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "114S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "214S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "008S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "112S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "010S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "014S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "204S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "314S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "006S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "412",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "106S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "012S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "208S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7913",
        "numeroStanza": "421A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 28
            }
        },
        "unitaImmobiliare": "281",
        "numeroStanza": "2819",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7907",
        "numeroStanza": "223A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7910",
        "numeroStanza": "323A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-10-31T23:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "108",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C18",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C19",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C20",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C17",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C49",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 60
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2010-04-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 61
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 63
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA1",
        "numeroStanza": "AA1C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA1",
        "numeroStanza": "AA1C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA1",
        "numeroStanza": "BA1C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "107S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "115S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "120S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "201S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC201",
        "numeroStanza": "CC2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "203S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD201",
        "numeroStanza": "CD2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "218S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "302S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "304S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "307S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "313S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC0A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "402S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "409S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7906",
        "numeroStanza": "222A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-12-31T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7909",
        "numeroStanza": "322A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S18",
        "numeroStanza": "S18C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S5",
        "numeroStanza": "S5C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P9",
        "numeroStanza": "P9C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2011-10-09T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1000-01-01T00:00:00.000Z",
        "eliminato": null
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1000-01-01T00:00:00.000Z",
        "eliminato": null
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "111",
        "numeroStanza": "1112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1112",
        "numeroStanza": "11123",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1721",
        "numeroStanza": "17211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1825",
        "numeroStanza": "18251",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "222",
        "numeroStanza": "2221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "309",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "409",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 29
            }
        },
        "unitaImmobiliare": "291",
        "numeroStanza": "2917",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-06-24T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 31
            }
        },
        "unitaImmobiliare": "3122",
        "numeroStanza": "31221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2005-09-11T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "305",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-10-31T23:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 56
            }
        },
        "unitaImmobiliare": "5629",
        "numeroStanza": "56291",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2005-09-11T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "106",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5802",
        "numeroStanza": "216",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5803",
        "numeroStanza": "315",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C17",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C20",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "001S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "121S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C75",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "303S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "315S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "318S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "410S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "411S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7909",
        "numeroStanza": "322A_4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7912",
        "numeroStanza": "420A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7912",
        "numeroStanza": "420A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD0A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD1A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2009-09-14T22:00:00.000Z",
        "eliminato": "2010-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S5",
        "numeroStanza": "S5C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P3",
        "numeroStanza": "P3C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 46
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "2003-01-31T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "384",
        "numeroStanza": "3841",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "121",
        "numeroStanza": "1211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "133",
        "numeroStanza": "1331",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1430",
        "numeroStanza": "14301",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "109",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "310",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 29
            }
        },
        "unitaImmobiliare": "291",
        "numeroStanza": "2019",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-06-24T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 32
            }
        },
        "unitaImmobiliare": "322",
        "numeroStanza": "3221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 5
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "109",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "302",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5414",
        "numeroStanza": "54141",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "103",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5803",
        "numeroStanza": "316",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C43",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C75",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C17",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C43",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C44",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C43",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C46",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 6
            }
        },
        "unitaImmobiliare": "611",
        "numeroStanza": "6113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 64
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 65
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 69
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA2C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2012-03-15T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "002S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C76",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C77",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "102S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "104S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2011-07-15T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2012-11-30T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB201",
        "numeroStanza": "CB2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC201",
        "numeroStanza": "CC2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "DD",
        "numeroStanza": "DD1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-02-28T23:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA0A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC0A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S12",
        "numeroStanza": "S12C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S16",
        "numeroStanza": "S16C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S16",
        "numeroStanza": "S16C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "108S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "202S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "212S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "213S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "219S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "220S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "309S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "310S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "317S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7907",
        "numeroStanza": "223A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-12-31T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "17",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1021",
        "numeroStanza": "10211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1311",
        "numeroStanza": "13111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1313",
        "numeroStanza": "13131",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "136",
        "numeroStanza": "1361",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1418",
        "numeroStanza": "14181",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-09-15T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1423",
        "numeroStanza": "14231",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1431",
        "numeroStanza": "14311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 15
            }
        },
        "unitaImmobiliare": "1521",
        "numeroStanza": "15212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1824",
        "numeroStanza": "18241",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2048",
        "numeroStanza": "211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-08-31T22:00:00.000Z",
        "eliminato": "2012-10-22T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "209",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "401",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 33
            }
        },
        "unitaImmobiliare": "331",
        "numeroStanza": "3311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 33
            }
        },
        "unitaImmobiliare": "3316",
        "numeroStanza": "33161",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2005-09-11T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 5
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-31T22:00:00.000Z",
        "eliminato": "2006-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5415",
        "numeroStanza": "54151",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C43",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C46",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C45",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-12-06T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA1",
        "numeroStanza": "BA1C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "004S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C75",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA201",
        "numeroStanza": "CA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "011S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "105S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "111S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB0A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC1A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD0A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD2A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "116S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "117S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "209S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "311S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "319S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "407S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "412S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "415S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S22",
        "numeroStanza": "S22C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "417S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S29",
        "numeroStanza": "S29C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "12",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2006-09-30T22:00:00.000Z",
        "eliminato": "2007-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2006-09-30T22:00:00.000Z",
        "eliminato": "2007-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1000-01-01T00:00:00.000Z",
        "eliminato": null
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1000-01-01T00:00:00.000Z",
        "eliminato": null
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "121",
        "numeroStanza": "1212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1212",
        "numeroStanza": "12123",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1310",
        "numeroStanza": "13101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1314",
        "numeroStanza": "13141",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "134",
        "numeroStanza": "1341",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1711",
        "numeroStanza": "17111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "411",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2311",
        "numeroStanza": "23111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 31
            }
        },
        "unitaImmobiliare": "311",
        "numeroStanza": "3111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 34
            }
        },
        "unitaImmobiliare": "3405",
        "numeroStanza": "34051",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "108",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-31T22:00:00.000Z",
        "eliminato": "2006-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "310",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "102",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5803",
        "numeroStanza": "317",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EA2",
        "numeroStanza": "EA2C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C19",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C50",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C49",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C77",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA1A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2001-10-11T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB0A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC2A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "106",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "005S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "110S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "305S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "308S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "312S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "405S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "416S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S30",
        "numeroStanza": "S30C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7905",
        "numeroStanza": "221A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7906",
        "numeroStanza": "222A_4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-12-31T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S7",
        "numeroStanza": "S7C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7908",
        "numeroStanza": "321A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P6",
        "numeroStanza": "P6C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7910",
        "numeroStanza": "323A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "14",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "303",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "121",
        "numeroStanza": "1213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1212",
        "numeroStanza": "12121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1417",
        "numeroStanza": "14171",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1424",
        "numeroStanza": "14241",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1426",
        "numeroStanza": "14261",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 15
            }
        },
        "unitaImmobiliare": "1521",
        "numeroStanza": "15211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "221",
        "numeroStanza": "2211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "410",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "414",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2321",
        "numeroStanza": "23211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 28
            }
        },
        "unitaImmobiliare": "281",
        "numeroStanza": "2817",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 28
            }
        },
        "unitaImmobiliare": "281",
        "numeroStanza": "2818",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3013",
        "numeroStanza": "30135",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5801",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2008-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5802",
        "numeroStanza": "215",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2008-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C44",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C76",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C17",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C18",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C20",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C48",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 62
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-12-05T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA1",
        "numeroStanza": "BA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "009S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "109S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "113S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BBAC37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2012-11-29T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C26",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "206S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C59",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "210S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "211S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "215S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "301S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "306S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA0A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA1A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "316S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7903",
        "numeroStanza": "320S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2013-08-31T22:00:00.000Z",
        "eliminato": "2013-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "404S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S1",
        "numeroStanza": "S1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "414S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7905",
        "numeroStanza": "221A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-12-31T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S19",
        "numeroStanza": "S19C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7913",
        "numeroStanza": "421A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 8
            }
        },
        "unitaImmobiliare": "831",
        "numeroStanza": "8311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "15",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 35
            }
        },
        "unitaImmobiliare": "351",
        "numeroStanza": "3511",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2003-10-31T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 36
            }
        },
        "unitaImmobiliare": "361",
        "numeroStanza": "3611",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1211",
        "numeroStanza": "12111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1312",
        "numeroStanza": "13121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "135",
        "numeroStanza": "1351",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "137",
        "numeroStanza": "1371",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "138",
        "numeroStanza": "1381",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "139",
        "numeroStanza": "1391",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1425",
        "numeroStanza": "14251",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 16
            }
        },
        "unitaImmobiliare": "1611",
        "numeroStanza": "16111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2038",
        "numeroStanza": "111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2013-08-31T22:00:00.000Z",
        "eliminato": "2013-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "210",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2331",
        "numeroStanza": "23311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 29
            }
        },
        "unitaImmobiliare": "291",
        "numeroStanza": "2918",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-06-24T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3015",
        "numeroStanza": "30153",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 31
            }
        },
        "unitaImmobiliare": "3103",
        "numeroStanza": "31031",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2005-09-11T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 31
            }
        },
        "unitaImmobiliare": "312",
        "numeroStanza": "3121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 32
            }
        },
        "unitaImmobiliare": "321",
        "numeroStanza": "3211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2002-02-28T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 33
            }
        },
        "unitaImmobiliare": "3312",
        "numeroStanza": "33121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2005-09-11T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 34
            }
        },
        "unitaImmobiliare": "341",
        "numeroStanza": "3411",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": null,
        "dataCreazione": "2003-10-31T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 5
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "210",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-07-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 52
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "104",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "204",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C45",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C19",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C20",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C19",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C45",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C47",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C47",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C50",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C54",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 63
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 64
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 67
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 69
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA2C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA1",
        "numeroStanza": "AA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C32",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-12-06T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C51",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C61",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C76",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA1",
        "numeroStanza": "BA1C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA1",
        "numeroStanza": "BA1C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2012-01-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "118S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C23",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2012-09-20T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C69",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C56",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "205S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "207S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA201",
        "numeroStanza": "CA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "217S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "406S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB201",
        "numeroStanza": "CB2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "413S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "418S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7906",
        "numeroStanza": "222A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-12-31T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA2A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB1A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB2A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC1A03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD1A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7908",
        "numeroStanza": "321A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7909",
        "numeroStanza": "322A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7911",
        "numeroStanza": "419A_2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7911",
        "numeroStanza": "419A_3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S18",
        "numeroStanza": "S18C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S26",
        "numeroStanza": "S26C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2025-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S27",
        "numeroStanza": "S27C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2006-09-30T22:00:00.000Z",
        "eliminato": "2007-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "111",
        "numeroStanza": "1113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1313",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "132",
        "numeroStanza": "1321",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1420",
        "numeroStanza": "14201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1422",
        "numeroStanza": "14221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1427",
        "numeroStanza": "14271",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1428",
        "numeroStanza": "14281",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 16
            }
        },
        "unitaImmobiliare": "1611",
        "numeroStanza": "16112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1721",
        "numeroStanza": "17212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "301",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "314",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3012",
        "numeroStanza": "30125",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "301",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-10-31T23:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "304",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "307",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-10-31T23:00:00.000Z",
        "eliminato": "2005-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 52
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 52
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "208",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 58
            }
        },
        "unitaImmobiliare": "5802",
        "numeroStanza": "217",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EA2",
        "numeroStanza": "EA2C15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB0",
        "numeroStanza": "EB0C27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C43",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC2",
        "numeroStanza": "EC2C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C55",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA0",
        "numeroStanza": "FA0C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA1",
        "numeroStanza": "FA1C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA2",
        "numeroStanza": "FA2C18",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FA3",
        "numeroStanza": "FA3C18",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB1",
        "numeroStanza": "FB1C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C46",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C41",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C44",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 62
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 65
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA0C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 67
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2009-10-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C09",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2012-02-17T23:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C24",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2010-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C21",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C29",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC4",
        "numeroStanza": "AC4C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C65",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C62",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C68",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C70",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C06",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C07",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C22",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C25",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C38",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C35",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C53",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C66",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C57",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C64",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C67",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C58",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C60",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C63",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "003S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD201",
        "numeroStanza": "CD2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA0",
        "numeroStanza": "EA0A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA1",
        "numeroStanza": "EA1A10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 71
            }
        },
        "unitaImmobiliare": "71EA2",
        "numeroStanza": "EA2A08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "007S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 73
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB1A02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7900",
        "numeroStanza": "013S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "101S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "103S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "119S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7901",
        "numeroStanza": "122S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7902",
        "numeroStanza": "216S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "401S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "403S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7904",
        "numeroStanza": "408S",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 79
            }
        },
        "unitaImmobiliare": "7912",
        "numeroStanza": "420A_4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "MONOLOCALE"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2017-11-30T23:00:00.000Z",
        "eliminato": "2060-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S7",
        "numeroStanza": "S7C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 9
            }
        },
        "unitaImmobiliare": "921",
        "numeroStanza": "9211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "36",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2006-09-30T22:00:00.000Z",
        "eliminato": "2007-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 35
            }
        },
        "unitaImmobiliare": "3518",
        "numeroStanza": "35181",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2010-01-18T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 35
            }
        },
        "unitaImmobiliare": "3520",
        "numeroStanza": "35201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2010-01-18T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "111",
        "numeroStanza": "1111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1011",
        "numeroStanza": "10111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1111",
        "numeroStanza": "11113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1211",
        "numeroStanza": "12113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1315",
        "numeroStanza": "13151",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1419",
        "numeroStanza": "14191",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1421",
        "numeroStanza": "14211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1432",
        "numeroStanza": "14321",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2033",
        "numeroStanza": "102",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2036",
        "numeroStanza": "108",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2043",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2045",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2054",
        "numeroStanza": "304",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2125",
        "numeroStanza": "6",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "106",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "307",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "407",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2315",
        "numeroStanza": "23153",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2331",
        "numeroStanza": "23313",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2332",
        "numeroStanza": "23322",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2335",
        "numeroStanza": "23353",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3013",
        "numeroStanza": "30136",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3015",
        "numeroStanza": "30154",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "12",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-08-31T22:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "209",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "538",
        "numeroStanza": "5381",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5404",
        "numeroStanza": "54041",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5406",
        "numeroStanza": "54061",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5413",
        "numeroStanza": "54131",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5414",
        "numeroStanza": "54142",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB1",
        "numeroStanza": "EB1C40",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB3",
        "numeroStanza": "FB3C52",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 7
            }
        },
        "unitaImmobiliare": "711",
        "numeroStanza": "7112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUINTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2009-10-12T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB3",
        "numeroStanza": "AB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2010-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC4",
        "numeroStanza": "BC4C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC1A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "102",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "306",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "724",
        "numeroStanza": "402",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "724",
        "numeroStanza": "403",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "215",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-08-31T22:00:00.000Z",
        "eliminato": "2012-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S11",
        "numeroStanza": "S11C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2010-11-14T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S15",
        "numeroStanza": "S15C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S22",
        "numeroStanza": "S22C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S23",
        "numeroStanza": "S23C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S4",
        "numeroStanza": "S4C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S8",
        "numeroStanza": "S8C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2013-01-31T23:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 8
            }
        },
        "unitaImmobiliare": "831",
        "numeroStanza": "8313",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 9
            }
        },
        "unitaImmobiliare": "921",
        "numeroStanza": "9212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "103",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "14",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "210",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 37
            }
        },
        "unitaImmobiliare": "373",
        "numeroStanza": "3731",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "384",
        "numeroStanza": "3842",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "12",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "22",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "111",
        "numeroStanza": "1114",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1111",
        "numeroStanza": "11112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1112",
        "numeroStanza": "11121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1212",
        "numeroStanza": "12123",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1310",
        "numeroStanza": "13102",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1313",
        "numeroStanza": "13132",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1314",
        "numeroStanza": "13142",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1316",
        "numeroStanza": "13161",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "137",
        "numeroStanza": "1372",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "139",
        "numeroStanza": "1393",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1427",
        "numeroStanza": "14272",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1428",
        "numeroStanza": "14282",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1711",
        "numeroStanza": "17112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1711",
        "numeroStanza": "17113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1821",
        "numeroStanza": "18211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1825",
        "numeroStanza": "18252",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1826",
        "numeroStanza": "18261",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1831",
        "numeroStanza": "18311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-09-30T23:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1833",
        "numeroStanza": "18332",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1841",
        "numeroStanza": "18411",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1847",
        "numeroStanza": "18471",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1848",
        "numeroStanza": "18481",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2024",
        "numeroStanza": "4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2026",
        "numeroStanza": "8",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2037",
        "numeroStanza": "109",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2046",
        "numeroStanza": "208",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2047",
        "numeroStanza": "210",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2053",
        "numeroStanza": "302",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "204",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "303",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "305",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "402",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "404",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2335",
        "numeroStanza": "23351",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2335",
        "numeroStanza": "23352",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "12",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2016-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5104",
        "numeroStanza": "5104",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-17T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5111",
        "numeroStanza": "5111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-17T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5118",
        "numeroStanza": "5118",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5122",
        "numeroStanza": "5122",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5124",
        "numeroStanza": "5124",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5125",
        "numeroStanza": "5125",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "535",
        "numeroStanza": "5351",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5404",
        "numeroStanza": "54042",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5415",
        "numeroStanza": "54152",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5416",
        "numeroStanza": "54161",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5702",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB3",
        "numeroStanza": "EB3C39",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 6
            }
        },
        "unitaImmobiliare": "611",
        "numeroStanza": "6111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 6
            }
        },
        "unitaImmobiliare": "611",
        "numeroStanza": "6113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 61
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C71",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD0A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "DD",
        "numeroStanza": "DD1C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-02-28T23:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S21",
        "numeroStanza": "S21C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S28",
        "numeroStanza": "S28C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P3",
        "numeroStanza": "P3C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P7",
        "numeroStanza": "P7C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P8",
        "numeroStanza": "P8C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "108",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "33",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2013-09-30T22:00:00.000Z",
        "eliminato": "2014-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 45
            }
        },
        "unitaImmobiliare": "452",
        "numeroStanza": "4521",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2010-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "12",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "16",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-08-31T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "305",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-08-31T22:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "8",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2013-09-30T22:00:00.000Z",
        "eliminato": "2014-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 37
            }
        },
        "unitaImmobiliare": "371",
        "numeroStanza": "3711",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 4
            }
        },
        "unitaImmobiliare": "411",
        "numeroStanza": "4112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "20",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "21",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1111",
        "numeroStanza": "11111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1417",
        "numeroStanza": "14172",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1419",
        "numeroStanza": "14192",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1420",
        "numeroStanza": "14202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1421",
        "numeroStanza": "14212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1429",
        "numeroStanza": "14291",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1432",
        "numeroStanza": "14322",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1823",
        "numeroStanza": "18232",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1828",
        "numeroStanza": "18281",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1846",
        "numeroStanza": "18461",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2023",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2010-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2044",
        "numeroStanza": "203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2044",
        "numeroStanza": "204",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2125",
        "numeroStanza": "4",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "308",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2322",
        "numeroStanza": "23221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2325",
        "numeroStanza": "23251",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2325",
        "numeroStanza": "23253",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2016-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5112",
        "numeroStanza": "5112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-17T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5114",
        "numeroStanza": "5114",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5126",
        "numeroStanza": "5126",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5403",
        "numeroStanza": "54031",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5407",
        "numeroStanza": "54071",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5412",
        "numeroStanza": "54121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2009-10-12T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2012-03-14T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2011-12-05T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC5",
        "numeroStanza": "AC5C75",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA201",
        "numeroStanza": "CA2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC0A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD1A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "307",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "741",
        "numeroStanza": "115",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2012-08-31T22:00:00.000Z",
        "eliminato": "2012-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S13",
        "numeroStanza": "S13C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S21",
        "numeroStanza": "S21C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S21",
        "numeroStanza": "S21C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S21",
        "numeroStanza": "S21C04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S27",
        "numeroStanza": "S27C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S31",
        "numeroStanza": "S31C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S33",
        "numeroStanza": "S33C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P6",
        "numeroStanza": "P6C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "30",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 45
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2002-10-31T23:00:00.000Z",
        "eliminato": "2008-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2016-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "18",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2009-09-30T22:00:00.000Z",
        "eliminato": "2010-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "28",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 37
            }
        },
        "unitaImmobiliare": "374",
        "numeroStanza": "3741",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "382",
        "numeroStanza": "3821",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "15",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "121",
        "numeroStanza": "1214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1021",
        "numeroStanza": "10212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1112",
        "numeroStanza": "11122",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1212",
        "numeroStanza": "12122",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1311",
        "numeroStanza": "13112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "133",
        "numeroStanza": "1332",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "134",
        "numeroStanza": "1342",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "138",
        "numeroStanza": "1382",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "139",
        "numeroStanza": "1392",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1423",
        "numeroStanza": "14232",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1424",
        "numeroStanza": "14242",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1425",
        "numeroStanza": "14252",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1431",
        "numeroStanza": "14312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1432",
        "numeroStanza": "14323",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1842",
        "numeroStanza": "18421",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1845",
        "numeroStanza": "18451",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1846",
        "numeroStanza": "18462",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1847",
        "numeroStanza": "18472",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2023",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2024",
        "numeroStanza": "3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2034",
        "numeroStanza": "103",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2037",
        "numeroStanza": "110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2055",
        "numeroStanza": "305",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "103",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2312",
        "numeroStanza": "23121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2324",
        "numeroStanza": "23241",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-08-31T22:00:00.000Z",
        "eliminato": "2015-02-27T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 5
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5107",
        "numeroStanza": "5107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-17T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5116",
        "numeroStanza": "5116",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5121",
        "numeroStanza": "5121",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "532",
        "numeroStanza": "5321",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "534",
        "numeroStanza": "5341",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5410",
        "numeroStanza": "54101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 55
            }
        },
        "unitaImmobiliare": "5502",
        "numeroStanza": "55021",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-09-30T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 57
            }
        },
        "unitaImmobiliare": "5701",
        "numeroStanza": "105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-10-02T22:00:00.000Z",
        "eliminato": "2008-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 68
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA2C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 7
            }
        },
        "unitaImmobiliare": "711",
        "numeroStanza": "7113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUINTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C11",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2012-02-16T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C14",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2011-12-05T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S11",
        "numeroStanza": "S11C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2010-11-14T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "109",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "204",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S2",
        "numeroStanza": "S2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S22",
        "numeroStanza": "S22C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S24",
        "numeroStanza": "S24C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S29",
        "numeroStanza": "S29C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S3",
        "numeroStanza": "S3C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P9",
        "numeroStanza": "P9C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 46
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "2003-01-31T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "15",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 37
            }
        },
        "unitaImmobiliare": "372",
        "numeroStanza": "3721",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 39
            }
        },
        "unitaImmobiliare": "391",
        "numeroStanza": "3911",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "13",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "22",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 1
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1314",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2007-10-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1011",
        "numeroStanza": "10112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1418",
        "numeroStanza": "14182",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1422",
        "numeroStanza": "14222",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 16
            }
        },
        "unitaImmobiliare": "1611",
        "numeroStanza": "16114",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1822",
        "numeroStanza": "18223",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1843",
        "numeroStanza": "18431",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1844",
        "numeroStanza": "18442",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2026",
        "numeroStanza": "7",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2045",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "406",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "408",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2314",
        "numeroStanza": "23141",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2315",
        "numeroStanza": "23151",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2321",
        "numeroStanza": "23213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "502",
        "numeroStanza": "211",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5110",
        "numeroStanza": "5110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5115",
        "numeroStanza": "5115",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5117",
        "numeroStanza": "5117",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5119",
        "numeroStanza": "5119",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5123",
        "numeroStanza": "5123",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 52
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5215",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5402",
        "numeroStanza": "54021",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 55
            }
        },
        "unitaImmobiliare": "5501",
        "numeroStanza": "55011",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-09-30T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 55
            }
        },
        "unitaImmobiliare": "5503",
        "numeroStanza": "55031",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-30T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 7
            }
        },
        "unitaImmobiliare": "711",
        "numeroStanza": "7111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUINTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C05",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2009-10-12T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA4",
        "numeroStanza": "AA4C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA2",
        "numeroStanza": "BA2C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-01-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC5",
        "numeroStanza": "BC5C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BC6",
        "numeroStanza": "BC6C73",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB1A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB1A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD",
        "numeroStanza": "CD1A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CD201",
        "numeroStanza": "CD2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2013-08-31T22:00:00.000Z",
        "eliminato": "2013-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "204",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2012-08-31T22:00:00.000Z",
        "eliminato": "2012-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S11",
        "numeroStanza": "S11C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2010-11-14T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S17",
        "numeroStanza": "S17C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "110",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S27",
        "numeroStanza": "S27C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S30",
        "numeroStanza": "S30C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P5",
        "numeroStanza": "P5C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-11-09T23:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "12",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 78
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 9
            }
        },
        "unitaImmobiliare": "921",
        "numeroStanza": "9213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "104",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "10",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2016-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "304",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "5",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2016-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "7",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2013-09-30T22:00:00.000Z",
        "eliminato": "2014-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "9",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-08-31T22:00:00.000Z",
        "eliminato": "2008-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "27",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "383",
        "numeroStanza": "3831",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "385",
        "numeroStanza": "3851",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "16",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "17",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "19",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "22",
        "numeroStanza": "3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "6",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1021",
        "numeroStanza": "10213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1211",
        "numeroStanza": "12112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1312",
        "numeroStanza": "13122",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "136",
        "numeroStanza": "1362",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1426",
        "numeroStanza": "14262",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1721",
        "numeroStanza": "17213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 17
            }
        },
        "unitaImmobiliare": "1721",
        "numeroStanza": "17214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1844",
        "numeroStanza": "18441",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "221",
        "numeroStanza": "2213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "222",
        "numeroStanza": "2223",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2025",
        "numeroStanza": "5",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2025",
        "numeroStanza": "6",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2035",
        "numeroStanza": "106",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2047",
        "numeroStanza": "209",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2058",
        "numeroStanza": "311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-07-31T22:00:00.000Z",
        "eliminato": "2012-10-22T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "104",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "108",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "302",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2321",
        "numeroStanza": "23212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2325",
        "numeroStanza": "23252",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2332",
        "numeroStanza": "23321",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "301",
        "numeroStanza": "30113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3014",
        "numeroStanza": "30144",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "503",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "531",
        "numeroStanza": "5311",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5408",
        "numeroStanza": "54081",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5409",
        "numeroStanza": "54091",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5409",
        "numeroStanza": "54092",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 55
            }
        },
        "unitaImmobiliare": "5505",
        "numeroStanza": "55051",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-30T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EB2",
        "numeroStanza": "EB2C42",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC3",
        "numeroStanza": "EC3C74",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59EC4",
        "numeroStanza": "EC4C72",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "59FB2",
        "numeroStanza": "FB2C48",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C16",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB5",
        "numeroStanza": "BB5C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB",
        "numeroStanza": "CB0A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "724",
        "numeroStanza": "401",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-08-31T22:00:00.000Z",
        "eliminato": "2011-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-08-31T22:00:00.000Z",
        "eliminato": "2011-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "208",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2009-09-14T22:00:00.000Z",
        "eliminato": "2010-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S12",
        "numeroStanza": "S12C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S6",
        "numeroStanza": "S6C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "106",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "13",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "6",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-09-30T22:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 38
            }
        },
        "unitaImmobiliare": "381",
        "numeroStanza": "3811",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "18",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 74
            }
        },
        "unitaImmobiliare": "742",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1000-01-01T00:00:00.000Z",
        "eliminato": null
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1111",
        "numeroStanza": "11113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "131",
        "numeroStanza": "1313",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "132",
        "numeroStanza": "1322",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1428",
        "numeroStanza": "14283",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 16
            }
        },
        "unitaImmobiliare": "1611",
        "numeroStanza": "16113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1826",
        "numeroStanza": "18262",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1832",
        "numeroStanza": "18321",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1832",
        "numeroStanza": "18322",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1843",
        "numeroStanza": "18432",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2033",
        "numeroStanza": "101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2034",
        "numeroStanza": "104",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2035",
        "numeroStanza": "105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2054",
        "numeroStanza": "303",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2055",
        "numeroStanza": "306",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2056",
        "numeroStanza": "307",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2125",
        "numeroStanza": "5",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "102",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2131",
        "numeroStanza": "105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "202",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "208",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "304",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2181",
        "numeroStanza": "306",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "405",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2311",
        "numeroStanza": "23112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2311",
        "numeroStanza": "23113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2312",
        "numeroStanza": "23122",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2313",
        "numeroStanza": "23131",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2315",
        "numeroStanza": "23152",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2322",
        "numeroStanza": "23222",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2333",
        "numeroStanza": "23331",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2334",
        "numeroStanza": "23341",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 30
            }
        },
        "unitaImmobiliare": "3012",
        "numeroStanza": "30126",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 41
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-10-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2017-08-31T22:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2016-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "4",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "501",
        "numeroStanza": "112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2006-08-31T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "309",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "403",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5120",
        "numeroStanza": "5120",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "533",
        "numeroStanza": "5331",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "536",
        "numeroStanza": "5361",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 53
            }
        },
        "unitaImmobiliare": "537",
        "numeroStanza": "5371",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2005-01-02T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5401",
        "numeroStanza": "54011",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5411",
        "numeroStanza": "54111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 59
            }
        },
        "unitaImmobiliare": "54FB4",
        "numeroStanza": "FB4C44",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2007-09-30T22:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 6
            }
        },
        "unitaImmobiliare": "611",
        "numeroStanza": "6112",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 61
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 66
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "EA1C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2027-10-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA3",
        "numeroStanza": "AA3C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2011-12-05T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AC6",
        "numeroStanza": "AC6C75",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-10-31T23:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA3",
        "numeroStanza": "BA3C13",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2012-09-19T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA1A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S1",
        "numeroStanza": "S1C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S14",
        "numeroStanza": "S14C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "205",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S25",
        "numeroStanza": "S25C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S29",
        "numeroStanza": "S29C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S32",
        "numeroStanza": "S32C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P1",
        "numeroStanza": "P1C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 77
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2011-10-09T22:00:00.000Z",
        "eliminato": "2050-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 8
            }
        },
        "unitaImmobiliare": "831",
        "numeroStanza": "8312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 44
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "31",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2016-08-31T22:00:00.000Z",
        "eliminato": "2017-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "5",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "7",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "208",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "302",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 39
            }
        },
        "unitaImmobiliare": "391",
        "numeroStanza": "3912",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2014-09-30T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 4
            }
        },
        "unitaImmobiliare": "411",
        "numeroStanza": "4113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "13",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "14",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "17",
        "numeroStanza": "3",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-13T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 10
            }
        },
        "unitaImmobiliare": "1011",
        "numeroStanza": "10113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 11
            }
        },
        "unitaImmobiliare": "1112",
        "numeroStanza": "11123",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 12
            }
        },
        "unitaImmobiliare": "1211",
        "numeroStanza": "12113",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1315",
        "numeroStanza": "13152",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "135",
        "numeroStanza": "1352",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "135",
        "numeroStanza": "1353",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1430",
        "numeroStanza": "14302",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1822",
        "numeroStanza": "18221",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1823",
        "numeroStanza": "18231",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1824",
        "numeroStanza": "18242",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1827",
        "numeroStanza": "18272",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1831",
        "numeroStanza": "18312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1842",
        "numeroStanza": "18422",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1845",
        "numeroStanza": "18452",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "221",
        "numeroStanza": "2212",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 2
            }
        },
        "unitaImmobiliare": "222",
        "numeroStanza": "2222",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2036",
        "numeroStanza": "107",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2043",
        "numeroStanza": "201",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2046",
        "numeroStanza": "207",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2053",
        "numeroStanza": "301",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2056",
        "numeroStanza": "308",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2057",
        "numeroStanza": "309",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 20
            }
        },
        "unitaImmobiliare": "2057",
        "numeroStanza": "310",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-06-30T22:00:00.000Z",
        "eliminato": "2014-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2141",
        "numeroStanza": "206",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 21
            }
        },
        "unitaImmobiliare": "2191",
        "numeroStanza": "403",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "1992-07-09T22:00:00.000Z",
        "eliminato": "2004-09-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2323",
        "numeroStanza": "23231",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 23
            }
        },
        "unitaImmobiliare": "2331",
        "numeroStanza": "23312",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1992-03-03T23:00:00.000Z",
        "eliminato": "2003-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 28
            }
        },
        "unitaImmobiliare": "281",
        "numeroStanza": "2817",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2001-11-30T23:00:00.000Z",
        "eliminato": "2011-04-11T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 29
            }
        },
        "unitaImmobiliare": "292",
        "numeroStanza": "2924",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2003-06-24T22:00:00.000Z",
        "eliminato": "2017-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 43
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "15",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2013-09-30T22:00:00.000Z",
        "eliminato": "2014-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 5
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2011-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "401",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 50
            }
        },
        "unitaImmobiliare": "503",
        "numeroStanza": "402",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2005-09-13T22:00:00.000Z",
        "eliminato": "2007-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 51
            }
        },
        "unitaImmobiliare": "5105",
        "numeroStanza": "5105",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2005-04-13T22:00:00.000Z",
        "eliminato": "2007-09-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 52
            }
        },
        "unitaImmobiliare": "521",
        "numeroStanza": "5214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2004-09-30T22:00:00.000Z",
        "eliminato": "2007-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 54
            }
        },
        "unitaImmobiliare": "5405",
        "numeroStanza": "54051",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2005-08-24T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 55
            }
        },
        "unitaImmobiliare": "5507",
        "numeroStanza": "55071",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.MANSARDA,
        "dataCreazione": "2008-09-30T22:00:00.000Z",
        "eliminato": "2009-06-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 60
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2007-10-31T23:00:00.000Z",
        "eliminato": "2010-04-29T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AA2",
        "numeroStanza": "AA2C08",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-09-14T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB4",
        "numeroStanza": "AB4C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "AB5",
        "numeroStanza": "AB5C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BA4",
        "numeroStanza": "BA4C10",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB3",
        "numeroStanza": "BB3C37",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": true,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2011-07-14T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "BB4",
        "numeroStanza": "BB4C34",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA0A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CA",
        "numeroStanza": "CA1A04",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CB201",
        "numeroStanza": "CB2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC",
        "numeroStanza": "CC1A01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": null,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 70
            }
        },
        "unitaImmobiliare": "CC201",
        "numeroStanza": "CC2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2008-08-31T22:00:00.000Z",
        "eliminato": "2058-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "721",
        "numeroStanza": "101",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S19",
        "numeroStanza": "S19C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S20",
        "numeroStanza": "S20C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S23",
        "numeroStanza": "S23C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": true,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S30",
        "numeroStanza": "S30C03",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2019-08-31T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S32",
        "numeroStanza": "S32C02",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.QUARTO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 75
            }
        },
        "unitaImmobiliare": "S9",
        "numeroStanza": "S9C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P2",
        "numeroStanza": "P2C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 76
            }
        },
        "unitaImmobiliare": "P4",
        "numeroStanza": "P4C01",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2010-09-12T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 47
            }
        },
        "unitaImmobiliare": "9",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2003-02-12T23:00:00.000Z",
        "eliminato": "2008-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "2",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 48
            }
        },
        "unitaImmobiliare": "3",
        "numeroStanza": "2",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2003-09-16T22:00:00.000Z",
        "eliminato": "2018-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "1",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2018-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 49
            }
        },
        "unitaImmobiliare": "11",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2004-02-08T23:00:00.000Z",
        "eliminato": "2016-08-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "722",
        "numeroStanza": "209",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 13
            }
        },
        "unitaImmobiliare": "1313",
        "numeroStanza": "13133",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1420",
        "numeroStanza": "14203",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_TERRA,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 14
            }
        },
        "unitaImmobiliare": "1424",
        "numeroStanza": "14243",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1999-09-30T22:00:00.000Z",
        "eliminato": "2018-08-31T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 15
            }
        },
        "unitaImmobiliare": "1521",
        "numeroStanza": "15213",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": true,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 15
            }
        },
        "unitaImmobiliare": "1521",
        "numeroStanza": "15214",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PIANO_RIALZATO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1827",
        "numeroStanza": "18271",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2008-02-28T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 18
            }
        },
        "unitaImmobiliare": "1833",
        "numeroStanza": "18331",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "1997-09-30T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 72
            }
        },
        "unitaImmobiliare": "723",
        "numeroStanza": "301",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": false,
        "handicap": false,
        "bagno": true,
        "piano": Piano.TERZO_PIANO,
        "dataCreazione": "2018-08-31T22:00:00.000Z",
        "eliminato": "2019-07-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "16",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "8",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA SINGOLA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SECONDO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 4
            }
        },
        "unitaImmobiliare": "411",
        "numeroStanza": "4111",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.SESTO_PIANO,
        "dataCreazione": "1991-05-23T22:00:00.000Z",
        "eliminato": "2020-12-30T23:00:00.000Z"
    },
    {
        "fabbricato": {
            "connect": {
                "oldCode": 40
            }
        },
        "unitaImmobiliare": "14",
        "numeroStanza": "1",
        "tipoStanza": {
            "connect": {
                "tipoStanza": "STANZA DOPPIA"
            }
        },
        "centroDiCosto": null,
        "gestioneDiretta": true,
        "handicap": false,
        "bagno": false,
        "piano": Piano.PRIMO_PIANO,
        "dataCreazione": "2014-09-14T22:00:00.000Z",
        "eliminato": "2017-03-30T22:00:00.000Z"
    }
];

export default STANZE;