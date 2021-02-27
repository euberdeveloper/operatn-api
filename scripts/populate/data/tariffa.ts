import { Tariffa } from '@prisma/client';

type TariffaInsert = Omit<Tariffa, 'id' | 'idTipoUtente' | 'idUtilizzoStanza' | 'idTipoFabbricato' | 'idTipoTariffa'> & {
    tipoUtente: {
        connect: {
            sigla: string;
        }
    };
    utilizzoStanza: {
        connect: {
            utilizzoStanza: string;
        }
    };
    tipoFabbricato: {
        connect: {
            tipoFabbricato: string;
        }
    };
    tipoTariffa: {
        connect: {
            tipoTariffa: string;
        }
    };
};

const TARIFFE: TariffaInsert[] = [
    {
        tipoUtente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 160,
        prezzoConsumi: 60,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 120,
        prezzoConsumi: 60,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    }, 
    {
        tipoUtente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 160,
        prezzoConsumi: 60,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 120,
        prezzoConsumi: 60,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 260,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 200,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'MONOLOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 295,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'BILOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 420,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 260,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 200,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'MONOLOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 275,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 315,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 255,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'MONOLOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 340,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'BILOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 420,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 315,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 255,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'MONOLOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 320,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'BILOCALE'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'MENSILE'
            }
        },
        prezzoCanoni: 420,
        prezzoConsumi: 70,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'GIORNALIERA'
            }
        },
        prezzoCanoni: 20,
        prezzoConsumi: 0,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'APPARTAMENTO'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'GIORNALIERA'
            }
        },
        prezzoCanoni: 17,
        prezzoConsumi: 0,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },

    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA SINGOLA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'GIORNALIERA'
            }
        },
        prezzoCanoni: 20,
        prezzoConsumi: 0,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    },
    {
        tipoUtente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipoFabbricato: {
            connect: {
                tipoFabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzoStanza: {
            connect: {
                utilizzoStanza: 'STANZA DOPPIA'
            }
        },
        tipoTariffa: {
            connect: {
                tipoTariffa: 'GIORNALIERA'
            }
        },
        prezzoCanoni: 17,
        prezzoConsumi: 0,
        validaDal: new Date('2017-09-01'),
        validaAl: null
    }
];

export default TARIFFE;