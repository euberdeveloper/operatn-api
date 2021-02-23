import { Stanza, Piano } from '@prisma/client';
type StanzaInsert = Omit<Stanza, 'id' | 'id_tipo_stanza' | 'id_fabbricato'> & {
    fabbricato: {
        connect: {
            old_code: number;
        }
    };
    tipo_stanza: {
        connect: {
            tipo_stanza: string;
        }
    };
};

const STANZE: StanzaInsert[] = [
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "114S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "214S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "008S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "112S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "010S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "014S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "204S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "314S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "006S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "412",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "106S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "012S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "208S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7913",
    "numero_stanza": "421A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 28
      }
    },
    "unita_immobiliare": "281",
    "numero_stanza": "2819",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7907",
    "numero_stanza": "223A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7910",
    "numero_stanza": "323A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-10-31T23:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "108",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C18",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C19",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C20",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C17",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C49",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 60
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2010-04-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 61
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 63
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA1",
    "numero_stanza": "AA1C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA1",
    "numero_stanza": "AA1C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA1",
    "numero_stanza": "BA1C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "107S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "115S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "120S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "201S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC201",
    "numero_stanza": "CC2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "203S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD201",
    "numero_stanza": "CD2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "218S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "302S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "304S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "307S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "313S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC0A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "402S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "409S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7906",
    "numero_stanza": "222A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-12-31T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7909",
    "numero_stanza": "322A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S18",
    "numero_stanza": "S18C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S5",
    "numero_stanza": "S5C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P9",
    "numero_stanza": "P9C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2011-10-09T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1000-01-01T00:00:00.000Z"),
    "valida_al": null
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1000-01-01T00:00:00.000Z"),
    "valida_al": null
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "111",
    "numero_stanza": "1112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1112",
    "numero_stanza": "11123",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1721",
    "numero_stanza": "17211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1825",
    "numero_stanza": "18251",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "222",
    "numero_stanza": "2221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "309",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "409",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 29
      }
    },
    "unita_immobiliare": "291",
    "numero_stanza": "2917",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-06-24T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 31
      }
    },
    "unita_immobiliare": "3122",
    "numero_stanza": "31221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2005-09-11T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "305",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-10-31T23:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 56
      }
    },
    "unita_immobiliare": "5629",
    "numero_stanza": "56291",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2005-09-11T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "106",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5802",
    "numero_stanza": "216",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5803",
    "numero_stanza": "315",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C17",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C20",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "001S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "121S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C75",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "303S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "315S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "318S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "410S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "411S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7909",
    "numero_stanza": "322A_4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7912",
    "numero_stanza": "420A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7912",
    "numero_stanza": "420A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD0A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD1A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2009-09-14T22:00:00.000Z"),
    "valida_al": new Date("2010-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S5",
    "numero_stanza": "S5C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P3",
    "numero_stanza": "P3C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 46
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("2003-01-31T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "384",
    "numero_stanza": "3841",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "121",
    "numero_stanza": "1211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "133",
    "numero_stanza": "1331",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1430",
    "numero_stanza": "14301",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "109",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "310",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 29
      }
    },
    "unita_immobiliare": "291",
    "numero_stanza": "2019",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-06-24T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 32
      }
    },
    "unita_immobiliare": "322",
    "numero_stanza": "3221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 5
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "109",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "302",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5414",
    "numero_stanza": "54141",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "103",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5803",
    "numero_stanza": "316",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C43",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C75",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C17",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C43",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C44",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C43",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C46",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 6
      }
    },
    "unita_immobiliare": "611",
    "numero_stanza": "6113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 64
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 65
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 69
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA2C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2012-03-15T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "002S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C76",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C77",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "102S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "104S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2011-07-15T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2012-11-30T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB201",
    "numero_stanza": "CB2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC201",
    "numero_stanza": "CC2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "DD",
    "numero_stanza": "DD1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-02-28T23:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA0A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC0A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S12",
    "numero_stanza": "S12C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S16",
    "numero_stanza": "S16C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S16",
    "numero_stanza": "S16C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "108S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "202S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "212S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "213S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "219S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "220S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "309S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "310S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "317S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7907",
    "numero_stanza": "223A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-12-31T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "17",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1021",
    "numero_stanza": "10211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1311",
    "numero_stanza": "13111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1313",
    "numero_stanza": "13131",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "136",
    "numero_stanza": "1361",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1418",
    "numero_stanza": "14181",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-09-15T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1423",
    "numero_stanza": "14231",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1431",
    "numero_stanza": "14311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 15
      }
    },
    "unita_immobiliare": "1521",
    "numero_stanza": "15212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1824",
    "numero_stanza": "18241",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2048",
    "numero_stanza": "211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-10-22T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "209",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "401",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 33
      }
    },
    "unita_immobiliare": "331",
    "numero_stanza": "3311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 33
      }
    },
    "unita_immobiliare": "3316",
    "numero_stanza": "33161",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2005-09-11T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 5
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-31T22:00:00.000Z"),
    "valida_al": new Date("2006-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5415",
    "numero_stanza": "54151",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C43",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C46",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C45",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-12-06T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA1",
    "numero_stanza": "BA1C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "004S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C75",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA201",
    "numero_stanza": "CA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "011S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "105S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "111S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB0A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC1A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD0A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD2A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "116S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "117S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "209S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "311S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "319S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "407S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "412S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "415S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S22",
    "numero_stanza": "S22C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "417S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S29",
    "numero_stanza": "S29C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "12",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2006-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2006-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1000-01-01T00:00:00.000Z"),
    "valida_al": null
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1000-01-01T00:00:00.000Z"),
    "valida_al": null
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "121",
    "numero_stanza": "1212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1212",
    "numero_stanza": "12123",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1310",
    "numero_stanza": "13101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1314",
    "numero_stanza": "13141",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "134",
    "numero_stanza": "1341",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1711",
    "numero_stanza": "17111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "411",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2311",
    "numero_stanza": "23111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 31
      }
    },
    "unita_immobiliare": "311",
    "numero_stanza": "3111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 34
      }
    },
    "unita_immobiliare": "3405",
    "numero_stanza": "34051",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "108",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-31T22:00:00.000Z"),
    "valida_al": new Date("2006-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "310",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "102",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5803",
    "numero_stanza": "317",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EA2",
    "numero_stanza": "EA2C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C19",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C50",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C49",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C77",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA1A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2001-10-11T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB0A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC2A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "106",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "005S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "110S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "305S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "308S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "312S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "405S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "416S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S30",
    "numero_stanza": "S30C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7905",
    "numero_stanza": "221A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7906",
    "numero_stanza": "222A_4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-12-31T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S7",
    "numero_stanza": "S7C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7908",
    "numero_stanza": "321A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P6",
    "numero_stanza": "P6C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7910",
    "numero_stanza": "323A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "14",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "303",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "121",
    "numero_stanza": "1213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1212",
    "numero_stanza": "12121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1417",
    "numero_stanza": "14171",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1424",
    "numero_stanza": "14241",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1426",
    "numero_stanza": "14261",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 15
      }
    },
    "unita_immobiliare": "1521",
    "numero_stanza": "15211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "221",
    "numero_stanza": "2211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "410",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "414",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2321",
    "numero_stanza": "23211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 28
      }
    },
    "unita_immobiliare": "281",
    "numero_stanza": "2817",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 28
      }
    },
    "unita_immobiliare": "281",
    "numero_stanza": "2818",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3013",
    "numero_stanza": "30135",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5801",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2008-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5802",
    "numero_stanza": "215",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2008-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C44",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C76",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C17",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C18",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C20",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C48",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 62
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-12-05T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA1",
    "numero_stanza": "BA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "009S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "109S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "113S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BBAC37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2012-11-29T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C26",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "206S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C59",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "210S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "211S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "215S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "301S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "306S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA0A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA1A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "316S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7903",
    "numero_stanza": "320S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2013-08-31T22:00:00.000Z"),
    "valida_al": new Date("2013-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "404S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S1",
    "numero_stanza": "S1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "414S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7905",
    "numero_stanza": "221A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-12-31T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S19",
    "numero_stanza": "S19C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7913",
    "numero_stanza": "421A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 8
      }
    },
    "unita_immobiliare": "831",
    "numero_stanza": "8311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "15",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 35
      }
    },
    "unita_immobiliare": "351",
    "numero_stanza": "3511",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2003-10-31T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 36
      }
    },
    "unita_immobiliare": "361",
    "numero_stanza": "3611",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1211",
    "numero_stanza": "12111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1312",
    "numero_stanza": "13121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "135",
    "numero_stanza": "1351",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "137",
    "numero_stanza": "1371",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "138",
    "numero_stanza": "1381",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "139",
    "numero_stanza": "1391",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1425",
    "numero_stanza": "14251",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 16
      }
    },
    "unita_immobiliare": "1611",
    "numero_stanza": "16111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2038",
    "numero_stanza": "111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2013-08-31T22:00:00.000Z"),
    "valida_al": new Date("2013-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "210",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2331",
    "numero_stanza": "23311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 29
      }
    },
    "unita_immobiliare": "291",
    "numero_stanza": "2918",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-06-24T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3015",
    "numero_stanza": "30153",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 31
      }
    },
    "unita_immobiliare": "3103",
    "numero_stanza": "31031",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2005-09-11T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 31
      }
    },
    "unita_immobiliare": "312",
    "numero_stanza": "3121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 32
      }
    },
    "unita_immobiliare": "321",
    "numero_stanza": "3211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2002-02-28T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 33
      }
    },
    "unita_immobiliare": "3312",
    "numero_stanza": "33121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2005-09-11T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 34
      }
    },
    "unita_immobiliare": "341",
    "numero_stanza": "3411",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": null,
    "valida_dal": new Date("2003-10-31T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 5
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "210",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-07-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 52
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "104",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "204",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C45",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C19",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C20",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C19",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C45",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C47",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C47",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C50",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C54",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 63
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 64
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 67
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 69
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA2C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA1",
    "numero_stanza": "AA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C32",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-12-06T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C51",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C61",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C76",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA1",
    "numero_stanza": "BA1C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA1",
    "numero_stanza": "BA1C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2012-01-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "118S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C23",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2012-09-20T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C69",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C56",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "205S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "207S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA201",
    "numero_stanza": "CA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "217S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "406S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB201",
    "numero_stanza": "CB2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "413S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "418S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7906",
    "numero_stanza": "222A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-12-31T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA2A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB1A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB2A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC1A03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD1A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7908",
    "numero_stanza": "321A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7909",
    "numero_stanza": "322A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7911",
    "numero_stanza": "419A_2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7911",
    "numero_stanza": "419A_3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S18",
    "numero_stanza": "S18C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S26",
    "numero_stanza": "S26C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2025-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S27",
    "numero_stanza": "S27C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2006-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "111",
    "numero_stanza": "1113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1313",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "132",
    "numero_stanza": "1321",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1420",
    "numero_stanza": "14201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1422",
    "numero_stanza": "14221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1427",
    "numero_stanza": "14271",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1428",
    "numero_stanza": "14281",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 16
      }
    },
    "unita_immobiliare": "1611",
    "numero_stanza": "16112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1721",
    "numero_stanza": "17212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "301",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "314",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3012",
    "numero_stanza": "30125",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "301",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-10-31T23:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "304",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "307",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-10-31T23:00:00.000Z"),
    "valida_al": new Date("2005-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 52
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 52
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "208",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 58
      }
    },
    "unita_immobiliare": "5802",
    "numero_stanza": "217",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EA2",
    "numero_stanza": "EA2C15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB0",
    "numero_stanza": "EB0C27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C43",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC2",
    "numero_stanza": "EC2C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C55",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA0",
    "numero_stanza": "FA0C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA1",
    "numero_stanza": "FA1C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA2",
    "numero_stanza": "FA2C18",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FA3",
    "numero_stanza": "FA3C18",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB1",
    "numero_stanza": "FB1C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C46",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C41",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C44",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 62
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 65
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA0C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 67
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2009-10-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C09",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2012-02-17T23:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C24",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2010-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C21",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C29",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC4",
    "numero_stanza": "AC4C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C65",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C62",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C68",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C70",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C06",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C07",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C22",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C25",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C38",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C35",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C53",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C66",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C57",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C64",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C67",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C58",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C60",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C63",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "003S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD201",
    "numero_stanza": "CD2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA0",
    "numero_stanza": "EA0A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA1",
    "numero_stanza": "EA1A10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 71
      }
    },
    "unita_immobiliare": "71EA2",
    "numero_stanza": "EA2A08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "007S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 73
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB1A02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7900",
    "numero_stanza": "013S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "101S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "103S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "119S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7901",
    "numero_stanza": "122S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7902",
    "numero_stanza": "216S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "401S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "403S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7904",
    "numero_stanza": "408S",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 79
      }
    },
    "unita_immobiliare": "7912",
    "numero_stanza": "420A_4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "MONOLOCALE"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2017-11-30T23:00:00.000Z"),
    "valida_al": new Date("2060-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S7",
    "numero_stanza": "S7C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 9
      }
    },
    "unita_immobiliare": "921",
    "numero_stanza": "9211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "36",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2006-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 35
      }
    },
    "unita_immobiliare": "3518",
    "numero_stanza": "35181",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2010-01-18T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 35
      }
    },
    "unita_immobiliare": "3520",
    "numero_stanza": "35201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2010-01-18T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "111",
    "numero_stanza": "1111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1011",
    "numero_stanza": "10111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1111",
    "numero_stanza": "11113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1211",
    "numero_stanza": "12113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1315",
    "numero_stanza": "13151",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1419",
    "numero_stanza": "14191",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1421",
    "numero_stanza": "14211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1432",
    "numero_stanza": "14321",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2033",
    "numero_stanza": "102",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2036",
    "numero_stanza": "108",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2043",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2045",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2054",
    "numero_stanza": "304",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2125",
    "numero_stanza": "6",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "106",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "307",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "407",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2315",
    "numero_stanza": "23153",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2331",
    "numero_stanza": "23313",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2332",
    "numero_stanza": "23322",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2335",
    "numero_stanza": "23353",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3013",
    "numero_stanza": "30136",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3015",
    "numero_stanza": "30154",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "12",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-08-31T22:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "209",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "538",
    "numero_stanza": "5381",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5404",
    "numero_stanza": "54041",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5406",
    "numero_stanza": "54061",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5413",
    "numero_stanza": "54131",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5414",
    "numero_stanza": "54142",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB1",
    "numero_stanza": "EB1C40",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB3",
    "numero_stanza": "FB3C52",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 7
      }
    },
    "unita_immobiliare": "711",
    "numero_stanza": "7112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUINTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2009-10-12T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB3",
    "numero_stanza": "AB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2010-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC4",
    "numero_stanza": "BC4C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC1A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "102",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "306",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "724",
    "numero_stanza": "402",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "724",
    "numero_stanza": "403",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "215",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S11",
    "numero_stanza": "S11C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2010-11-14T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S15",
    "numero_stanza": "S15C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S22",
    "numero_stanza": "S22C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S23",
    "numero_stanza": "S23C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S4",
    "numero_stanza": "S4C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S8",
    "numero_stanza": "S8C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2013-01-31T23:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 8
      }
    },
    "unita_immobiliare": "831",
    "numero_stanza": "8313",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 9
      }
    },
    "unita_immobiliare": "921",
    "numero_stanza": "9212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "103",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "14",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "210",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 37
      }
    },
    "unita_immobiliare": "373",
    "numero_stanza": "3731",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "384",
    "numero_stanza": "3842",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "12",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "22",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "111",
    "numero_stanza": "1114",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1111",
    "numero_stanza": "11112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1112",
    "numero_stanza": "11121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1212",
    "numero_stanza": "12123",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1310",
    "numero_stanza": "13102",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1313",
    "numero_stanza": "13132",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1314",
    "numero_stanza": "13142",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1316",
    "numero_stanza": "13161",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "137",
    "numero_stanza": "1372",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "139",
    "numero_stanza": "1393",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1427",
    "numero_stanza": "14272",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1428",
    "numero_stanza": "14282",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1711",
    "numero_stanza": "17112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1711",
    "numero_stanza": "17113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1821",
    "numero_stanza": "18211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1825",
    "numero_stanza": "18252",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1826",
    "numero_stanza": "18261",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1831",
    "numero_stanza": "18311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-09-30T23:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1833",
    "numero_stanza": "18332",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1841",
    "numero_stanza": "18411",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1847",
    "numero_stanza": "18471",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1848",
    "numero_stanza": "18481",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2024",
    "numero_stanza": "4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2026",
    "numero_stanza": "8",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2037",
    "numero_stanza": "109",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2046",
    "numero_stanza": "208",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2047",
    "numero_stanza": "210",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2053",
    "numero_stanza": "302",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "204",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "303",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "305",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "402",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "404",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2335",
    "numero_stanza": "23351",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2335",
    "numero_stanza": "23352",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "12",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2016-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5104",
    "numero_stanza": "5104",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-17T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5111",
    "numero_stanza": "5111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-17T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5118",
    "numero_stanza": "5118",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5122",
    "numero_stanza": "5122",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5124",
    "numero_stanza": "5124",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5125",
    "numero_stanza": "5125",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "535",
    "numero_stanza": "5351",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5404",
    "numero_stanza": "54042",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5415",
    "numero_stanza": "54152",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5416",
    "numero_stanza": "54161",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5702",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB3",
    "numero_stanza": "EB3C39",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 6
      }
    },
    "unita_immobiliare": "611",
    "numero_stanza": "6111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 6
      }
    },
    "unita_immobiliare": "611",
    "numero_stanza": "6113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 61
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C71",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD0A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "DD",
    "numero_stanza": "DD1C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-02-28T23:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S21",
    "numero_stanza": "S21C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S28",
    "numero_stanza": "S28C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P3",
    "numero_stanza": "P3C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P7",
    "numero_stanza": "P7C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P8",
    "numero_stanza": "P8C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "108",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "33",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2013-09-30T22:00:00.000Z"),
    "valida_al": new Date("2014-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 45
      }
    },
    "unita_immobiliare": "452",
    "numero_stanza": "4521",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2010-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "12",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "16",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-08-31T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "305",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-08-31T22:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "8",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2013-09-30T22:00:00.000Z"),
    "valida_al": new Date("2014-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 37
      }
    },
    "unita_immobiliare": "371",
    "numero_stanza": "3711",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 4
      }
    },
    "unita_immobiliare": "411",
    "numero_stanza": "4112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "20",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "21",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1111",
    "numero_stanza": "11111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1417",
    "numero_stanza": "14172",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1419",
    "numero_stanza": "14192",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1420",
    "numero_stanza": "14202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1421",
    "numero_stanza": "14212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1429",
    "numero_stanza": "14291",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1432",
    "numero_stanza": "14322",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1823",
    "numero_stanza": "18232",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1828",
    "numero_stanza": "18281",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1846",
    "numero_stanza": "18461",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2023",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2010-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2044",
    "numero_stanza": "203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2044",
    "numero_stanza": "204",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2125",
    "numero_stanza": "4",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "308",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2322",
    "numero_stanza": "23221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2325",
    "numero_stanza": "23251",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2325",
    "numero_stanza": "23253",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2016-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5112",
    "numero_stanza": "5112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-17T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5114",
    "numero_stanza": "5114",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5126",
    "numero_stanza": "5126",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5403",
    "numero_stanza": "54031",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5407",
    "numero_stanza": "54071",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5412",
    "numero_stanza": "54121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2009-10-12T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2012-03-14T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2011-12-05T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC5",
    "numero_stanza": "AC5C75",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA201",
    "numero_stanza": "CA2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC0A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD1A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "307",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "741",
    "numero_stanza": "115",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2012-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S13",
    "numero_stanza": "S13C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S21",
    "numero_stanza": "S21C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S21",
    "numero_stanza": "S21C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S21",
    "numero_stanza": "S21C04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S27",
    "numero_stanza": "S27C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S31",
    "numero_stanza": "S31C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S33",
    "numero_stanza": "S33C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P6",
    "numero_stanza": "P6C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "30",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 45
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2002-10-31T23:00:00.000Z"),
    "valida_al": new Date("2008-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2016-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "18",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2009-09-30T22:00:00.000Z"),
    "valida_al": new Date("2010-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "28",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 37
      }
    },
    "unita_immobiliare": "374",
    "numero_stanza": "3741",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "382",
    "numero_stanza": "3821",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "15",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "121",
    "numero_stanza": "1214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1021",
    "numero_stanza": "10212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1112",
    "numero_stanza": "11122",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1212",
    "numero_stanza": "12122",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1311",
    "numero_stanza": "13112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "133",
    "numero_stanza": "1332",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "134",
    "numero_stanza": "1342",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "138",
    "numero_stanza": "1382",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "139",
    "numero_stanza": "1392",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1423",
    "numero_stanza": "14232",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1424",
    "numero_stanza": "14242",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1425",
    "numero_stanza": "14252",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1431",
    "numero_stanza": "14312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1432",
    "numero_stanza": "14323",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1842",
    "numero_stanza": "18421",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1845",
    "numero_stanza": "18451",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1846",
    "numero_stanza": "18462",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1847",
    "numero_stanza": "18472",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2023",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2024",
    "numero_stanza": "3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2034",
    "numero_stanza": "103",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2037",
    "numero_stanza": "110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2055",
    "numero_stanza": "305",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "103",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2312",
    "numero_stanza": "23121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2324",
    "numero_stanza": "23241",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-08-31T22:00:00.000Z"),
    "valida_al": new Date("2015-02-27T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 5
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5107",
    "numero_stanza": "5107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-17T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5116",
    "numero_stanza": "5116",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5121",
    "numero_stanza": "5121",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "532",
    "numero_stanza": "5321",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "534",
    "numero_stanza": "5341",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5410",
    "numero_stanza": "54101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 55
      }
    },
    "unita_immobiliare": "5502",
    "numero_stanza": "55021",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-09-30T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 57
      }
    },
    "unita_immobiliare": "5701",
    "numero_stanza": "105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-10-02T22:00:00.000Z"),
    "valida_al": new Date("2008-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 68
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA2C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 7
      }
    },
    "unita_immobiliare": "711",
    "numero_stanza": "7113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUINTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C11",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2012-02-16T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C14",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2011-12-05T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S11",
    "numero_stanza": "S11C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2010-11-14T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "109",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "204",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S2",
    "numero_stanza": "S2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S22",
    "numero_stanza": "S22C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S24",
    "numero_stanza": "S24C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S29",
    "numero_stanza": "S29C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S3",
    "numero_stanza": "S3C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P9",
    "numero_stanza": "P9C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 46
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("2003-01-31T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "15",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 37
      }
    },
    "unita_immobiliare": "372",
    "numero_stanza": "3721",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 39
      }
    },
    "unita_immobiliare": "391",
    "numero_stanza": "3911",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "13",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "22",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 1
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1314",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2007-10-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1011",
    "numero_stanza": "10112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1418",
    "numero_stanza": "14182",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1422",
    "numero_stanza": "14222",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 16
      }
    },
    "unita_immobiliare": "1611",
    "numero_stanza": "16114",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1822",
    "numero_stanza": "18223",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1843",
    "numero_stanza": "18431",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1844",
    "numero_stanza": "18442",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2026",
    "numero_stanza": "7",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2045",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "406",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "408",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2314",
    "numero_stanza": "23141",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2315",
    "numero_stanza": "23151",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2321",
    "numero_stanza": "23213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "502",
    "numero_stanza": "211",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5110",
    "numero_stanza": "5110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5115",
    "numero_stanza": "5115",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5117",
    "numero_stanza": "5117",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5119",
    "numero_stanza": "5119",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5123",
    "numero_stanza": "5123",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 52
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5215",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5402",
    "numero_stanza": "54021",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 55
      }
    },
    "unita_immobiliare": "5501",
    "numero_stanza": "55011",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-09-30T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 55
      }
    },
    "unita_immobiliare": "5503",
    "numero_stanza": "55031",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-30T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 7
      }
    },
    "unita_immobiliare": "711",
    "numero_stanza": "7111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUINTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C05",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2009-10-12T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA4",
    "numero_stanza": "AA4C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA2",
    "numero_stanza": "BA2C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-01-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC5",
    "numero_stanza": "BC5C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BC6",
    "numero_stanza": "BC6C73",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB1A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB1A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD",
    "numero_stanza": "CD1A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CD201",
    "numero_stanza": "CD2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2013-08-31T22:00:00.000Z"),
    "valida_al": new Date("2013-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "204",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2012-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S11",
    "numero_stanza": "S11C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2010-11-14T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S17",
    "numero_stanza": "S17C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "110",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S27",
    "numero_stanza": "S27C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S30",
    "numero_stanza": "S30C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P5",
    "numero_stanza": "P5C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-11-09T23:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "12",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 78
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 9
      }
    },
    "unita_immobiliare": "921",
    "numero_stanza": "9213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "104",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "10",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2016-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "304",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "5",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2016-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "7",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2013-09-30T22:00:00.000Z"),
    "valida_al": new Date("2014-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "9",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-08-31T22:00:00.000Z"),
    "valida_al": new Date("2008-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "27",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "383",
    "numero_stanza": "3831",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "385",
    "numero_stanza": "3851",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "16",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "17",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "19",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "22",
    "numero_stanza": "3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "6",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1021",
    "numero_stanza": "10213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1211",
    "numero_stanza": "12112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1312",
    "numero_stanza": "13122",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "136",
    "numero_stanza": "1362",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1426",
    "numero_stanza": "14262",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1721",
    "numero_stanza": "17213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 17
      }
    },
    "unita_immobiliare": "1721",
    "numero_stanza": "17214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1844",
    "numero_stanza": "18441",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "221",
    "numero_stanza": "2213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "222",
    "numero_stanza": "2223",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2025",
    "numero_stanza": "5",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2025",
    "numero_stanza": "6",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2035",
    "numero_stanza": "106",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2047",
    "numero_stanza": "209",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2058",
    "numero_stanza": "311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-07-31T22:00:00.000Z"),
    "valida_al": new Date("2012-10-22T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "104",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "108",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "302",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2321",
    "numero_stanza": "23212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2325",
    "numero_stanza": "23252",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2332",
    "numero_stanza": "23321",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "301",
    "numero_stanza": "30113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3014",
    "numero_stanza": "30144",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "503",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "531",
    "numero_stanza": "5311",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5408",
    "numero_stanza": "54081",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5409",
    "numero_stanza": "54091",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5409",
    "numero_stanza": "54092",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 55
      }
    },
    "unita_immobiliare": "5505",
    "numero_stanza": "55051",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-30T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EB2",
    "numero_stanza": "EB2C42",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC3",
    "numero_stanza": "EC3C74",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59EC4",
    "numero_stanza": "EC4C72",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "59FB2",
    "numero_stanza": "FB2C48",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C16",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB5",
    "numero_stanza": "BB5C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB",
    "numero_stanza": "CB0A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "724",
    "numero_stanza": "401",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-08-31T22:00:00.000Z"),
    "valida_al": new Date("2011-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-08-31T22:00:00.000Z"),
    "valida_al": new Date("2011-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "208",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2009-09-14T22:00:00.000Z"),
    "valida_al": new Date("2010-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S12",
    "numero_stanza": "S12C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S6",
    "numero_stanza": "S6C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "106",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "13",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "6",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 38
      }
    },
    "unita_immobiliare": "381",
    "numero_stanza": "3811",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "18",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 74
      }
    },
    "unita_immobiliare": "742",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1000-01-01T00:00:00.000Z"),
    "valida_al": null
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1111",
    "numero_stanza": "11113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "131",
    "numero_stanza": "1313",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "132",
    "numero_stanza": "1322",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1428",
    "numero_stanza": "14283",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 16
      }
    },
    "unita_immobiliare": "1611",
    "numero_stanza": "16113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1826",
    "numero_stanza": "18262",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1832",
    "numero_stanza": "18321",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1832",
    "numero_stanza": "18322",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1843",
    "numero_stanza": "18432",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2033",
    "numero_stanza": "101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2034",
    "numero_stanza": "104",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2035",
    "numero_stanza": "105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2054",
    "numero_stanza": "303",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2055",
    "numero_stanza": "306",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2056",
    "numero_stanza": "307",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2125",
    "numero_stanza": "5",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "102",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2131",
    "numero_stanza": "105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "202",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "208",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "304",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2181",
    "numero_stanza": "306",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "405",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2311",
    "numero_stanza": "23112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2311",
    "numero_stanza": "23113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2312",
    "numero_stanza": "23122",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2313",
    "numero_stanza": "23131",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2315",
    "numero_stanza": "23152",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2322",
    "numero_stanza": "23222",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2333",
    "numero_stanza": "23331",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2334",
    "numero_stanza": "23341",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 30
      }
    },
    "unita_immobiliare": "3012",
    "numero_stanza": "30126",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 41
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-10-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2017-08-31T22:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2016-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "4",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "501",
    "numero_stanza": "112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2006-08-31T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "309",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "403",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5120",
    "numero_stanza": "5120",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "533",
    "numero_stanza": "5331",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "536",
    "numero_stanza": "5361",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 53
      }
    },
    "unita_immobiliare": "537",
    "numero_stanza": "5371",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2005-01-02T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5401",
    "numero_stanza": "54011",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5411",
    "numero_stanza": "54111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 59
      }
    },
    "unita_immobiliare": "54FB4",
    "numero_stanza": "FB4C44",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2007-09-30T22:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 6
      }
    },
    "unita_immobiliare": "611",
    "numero_stanza": "6112",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 61
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 66
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "EA1C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2027-10-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA3",
    "numero_stanza": "AA3C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2011-12-05T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AC6",
    "numero_stanza": "AC6C75",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-10-31T23:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA3",
    "numero_stanza": "BA3C13",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2012-09-19T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA1A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S1",
    "numero_stanza": "S1C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S14",
    "numero_stanza": "S14C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "205",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S25",
    "numero_stanza": "S25C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S29",
    "numero_stanza": "S29C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S32",
    "numero_stanza": "S32C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P1",
    "numero_stanza": "P1C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 77
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2011-10-09T22:00:00.000Z"),
    "valida_al": new Date("2050-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 8
      }
    },
    "unita_immobiliare": "831",
    "numero_stanza": "8312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 44
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "31",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2016-08-31T22:00:00.000Z"),
    "valida_al": new Date("2017-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "5",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "7",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "208",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "302",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 39
      }
    },
    "unita_immobiliare": "391",
    "numero_stanza": "3912",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2014-09-30T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 4
      }
    },
    "unita_immobiliare": "411",
    "numero_stanza": "4113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "13",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "14",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "17",
    "numero_stanza": "3",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-13T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 10
      }
    },
    "unita_immobiliare": "1011",
    "numero_stanza": "10113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 11
      }
    },
    "unita_immobiliare": "1112",
    "numero_stanza": "11123",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 12
      }
    },
    "unita_immobiliare": "1211",
    "numero_stanza": "12113",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1315",
    "numero_stanza": "13152",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "135",
    "numero_stanza": "1352",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "135",
    "numero_stanza": "1353",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1430",
    "numero_stanza": "14302",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1822",
    "numero_stanza": "18221",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1823",
    "numero_stanza": "18231",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1824",
    "numero_stanza": "18242",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1827",
    "numero_stanza": "18272",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1831",
    "numero_stanza": "18312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1842",
    "numero_stanza": "18422",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1845",
    "numero_stanza": "18452",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "221",
    "numero_stanza": "2212",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 2
      }
    },
    "unita_immobiliare": "222",
    "numero_stanza": "2222",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2036",
    "numero_stanza": "107",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2043",
    "numero_stanza": "201",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2046",
    "numero_stanza": "207",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2053",
    "numero_stanza": "301",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2056",
    "numero_stanza": "308",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2057",
    "numero_stanza": "309",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 20
      }
    },
    "unita_immobiliare": "2057",
    "numero_stanza": "310",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-06-30T22:00:00.000Z"),
    "valida_al": new Date("2014-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2141",
    "numero_stanza": "206",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 21
      }
    },
    "unita_immobiliare": "2191",
    "numero_stanza": "403",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("1992-07-09T22:00:00.000Z"),
    "valida_al": new Date("2004-09-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2323",
    "numero_stanza": "23231",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 23
      }
    },
    "unita_immobiliare": "2331",
    "numero_stanza": "23312",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1992-03-03T23:00:00.000Z"),
    "valida_al": new Date("2003-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 28
      }
    },
    "unita_immobiliare": "281",
    "numero_stanza": "2817",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2001-11-30T23:00:00.000Z"),
    "valida_al": new Date("2011-04-11T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 29
      }
    },
    "unita_immobiliare": "292",
    "numero_stanza": "2924",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2003-06-24T22:00:00.000Z"),
    "valida_al": new Date("2017-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 43
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "15",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2013-09-30T22:00:00.000Z"),
    "valida_al": new Date("2014-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 5
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2011-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "401",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 50
      }
    },
    "unita_immobiliare": "503",
    "numero_stanza": "402",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2005-09-13T22:00:00.000Z"),
    "valida_al": new Date("2007-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 51
      }
    },
    "unita_immobiliare": "5105",
    "numero_stanza": "5105",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2005-04-13T22:00:00.000Z"),
    "valida_al": new Date("2007-09-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 52
      }
    },
    "unita_immobiliare": "521",
    "numero_stanza": "5214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2004-09-30T22:00:00.000Z"),
    "valida_al": new Date("2007-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 54
      }
    },
    "unita_immobiliare": "5405",
    "numero_stanza": "54051",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2005-08-24T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 55
      }
    },
    "unita_immobiliare": "5507",
    "numero_stanza": "55071",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.MANSARDA,
    "valida_dal": new Date("2008-09-30T22:00:00.000Z"),
    "valida_al": new Date("2009-06-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 60
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2007-10-31T23:00:00.000Z"),
    "valida_al": new Date("2010-04-29T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AA2",
    "numero_stanza": "AA2C08",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-09-14T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB4",
    "numero_stanza": "AB4C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "AB5",
    "numero_stanza": "AB5C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BA4",
    "numero_stanza": "BA4C10",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB3",
    "numero_stanza": "BB3C37",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": true,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2011-07-14T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "BB4",
    "numero_stanza": "BB4C34",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA0A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CA",
    "numero_stanza": "CA1A04",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CB201",
    "numero_stanza": "CB2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC",
    "numero_stanza": "CC1A01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": null,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 70
      }
    },
    "unita_immobiliare": "CC201",
    "numero_stanza": "CC2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2008-08-31T22:00:00.000Z"),
    "valida_al": new Date("2058-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "721",
    "numero_stanza": "101",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S19",
    "numero_stanza": "S19C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S20",
    "numero_stanza": "S20C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S23",
    "numero_stanza": "S23C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": true,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S30",
    "numero_stanza": "S30C03",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2019-08-31T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S32",
    "numero_stanza": "S32C02",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.QUARTO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 75
      }
    },
    "unita_immobiliare": "S9",
    "numero_stanza": "S9C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P2",
    "numero_stanza": "P2C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 76
      }
    },
    "unita_immobiliare": "P4",
    "numero_stanza": "P4C01",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2010-09-12T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 47
      }
    },
    "unita_immobiliare": "9",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2003-02-12T23:00:00.000Z"),
    "valida_al": new Date("2008-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "2",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 48
      }
    },
    "unita_immobiliare": "3",
    "numero_stanza": "2",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2003-09-16T22:00:00.000Z"),
    "valida_al": new Date("2018-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "1",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2018-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 49
      }
    },
    "unita_immobiliare": "11",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2004-02-08T23:00:00.000Z"),
    "valida_al": new Date("2016-08-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "722",
    "numero_stanza": "209",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 13
      }
    },
    "unita_immobiliare": "1313",
    "numero_stanza": "13133",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1420",
    "numero_stanza": "14203",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_TERRA,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 14
      }
    },
    "unita_immobiliare": "1424",
    "numero_stanza": "14243",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1999-09-30T22:00:00.000Z"),
    "valida_al": new Date("2018-08-31T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 15
      }
    },
    "unita_immobiliare": "1521",
    "numero_stanza": "15213",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": true,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 15
      }
    },
    "unita_immobiliare": "1521",
    "numero_stanza": "15214",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PIANO_RIALZATO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1827",
    "numero_stanza": "18271",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2008-02-28T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 18
      }
    },
    "unita_immobiliare": "1833",
    "numero_stanza": "18331",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("1997-09-30T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 72
      }
    },
    "unita_immobiliare": "723",
    "numero_stanza": "301",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": false,
    "handicap": false,
    "bagno": true,
    "piano": Piano.TERZO_PIANO,
    "valida_dal": new Date("2018-08-31T22:00:00.000Z"),
    "valida_al": new Date("2019-07-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "16",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "8",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA SINGOLA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SECONDO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 4
      }
    },
    "unita_immobiliare": "411",
    "numero_stanza": "4111",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.SESTO_PIANO,
    "valida_dal": new Date("1991-05-23T22:00:00.000Z"),
    "valida_al": new Date("2020-12-30T23:00:00.000Z")
  },
  {
    "fabbricato": {
      "connect": {
        "old_code": 40
      }
    },
    "unita_immobiliare": "14",
    "numero_stanza": "1",
    "tipo_stanza": {
      "connect": {
        "tipo_stanza": "STANZA DOPPIA"
      }
    },
    "centro_di_costo": null,
    "gestione_diretta": true,
    "handicap": false,
    "bagno": false,
    "piano": Piano.PRIMO_PIANO,
    "valida_dal": new Date("2014-09-14T22:00:00.000Z"),
    "valida_al": new Date("2017-03-30T22:00:00.000Z")
  }
];

export default STANZE;