import { Tariffa } from '@prisma/client';

type TariffaInsert = Omit<Tariffa, 'id' | 'id_tipo_utente' | 'id_utilizzo_stanza' | 'id_tipo_fabbricato' | 'id_tipo_tariffa'> & {
    tipo_utente: {
        connect: {
            sigla: string;
        }
    };
    utilizzo_stanza: {
        connect: {
            utilizzo_stanza: string;
        }
    };
    tipo_fabbricato: {
        connect: {
            tipo_fabbricato: string;
        }
    };
    tipo_tariffa: {
        connect: {
            tipo_tariffa: string;
        }
    };
};

const TARIFFE: TariffaInsert[] = [
    {
        tipo_utente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 160,
        prezzo_consumi: 60,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 120,
        prezzo_consumi: 60,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    }, 
    {
        tipo_utente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 160,
        prezzo_consumi: 60,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'SB'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 120,
        prezzo_consumi: 60,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 260,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 200,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'MONOLOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 295,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'BILOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 420,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 260,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 200,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'AS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'MONOLOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 275,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 315,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 255,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'MONOLOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 340,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'BILOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 420,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 315,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 255,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'MONOLOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 320,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'BILOCALE'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'MENSILE'
            }
        },
        prezzo_canone: 420,
        prezzo_consumi: 70,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'GIORNALIERA'
            }
        },
        prezzo_canone: 20,
        prezzo_consumi: 0,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'APPARTAMENTO'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'GIORNALIERA'
            }
        },
        prezzo_canone: 17,
        prezzo_consumi: 0,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },

    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA SINGOLA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'GIORNALIERA'
            }
        },
        prezzo_canone: 20,
        prezzo_consumi: 0,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    },
    {
        tipo_utente: {
            connect: {
                sigla: 'OS'
            }
        },
        tipo_fabbricato: {
            connect: {
                tipo_fabbricato: 'RESIDENZA COLLETTIVA'
            }
        },
        utilizzo_stanza: {
            connect: {
                utilizzo_stanza: 'STANZA DOPPIA'
            }
        },
        tipo_tariffa: {
            connect: {
                tipo_tariffa: 'GIORNALIERA'
            }
        },
        prezzo_canone: 17,
        prezzo_consumi: 0,
        valida_dal: new Date('2017-09-01'),
        valida_al: null
    }
];

export default TARIFFE;