import { ContoRicaviCanoni, ContoRicaviConsumi, TipoUtente } from '@prisma/client';

type TipoUtenteInsert = Omit<TipoUtente, 'id' | 'id_conto_ricavi_canoni' | 'id_conto_ricavi_consumi'> & {
    conto_ricavi_consumi: {
        connect: {
            codice: string;
        };
    };
    conto_ricavi_canoni: {
        connect: {
            codice: string;
        };
    };
};

const TIPI_UTENTE: TipoUtenteInsert[] = [
    { 
        sigla: 'SB',
        tipo_utente: 'Studente da bando',
        conto_ricavi_consumi: {
            connect: {
                codice: '031.002.060'
            }
        },
        conto_ricavi_canoni: {
            connect: {
                codice: '031.002.020'
            }
        }
     },
     { 
        sigla: 'AS',
        tipo_utente: 'Altri studenti',
        conto_ricavi_consumi: {
            connect: {
                codice: '031.002.060'
            }
        },
        conto_ricavi_canoni: {
            connect: {
                codice: '031.002.040'
            }
        }
     },
     { 
        sigla: 'OS',
        tipo_utente: 'Ospitalità',
        conto_ricavi_consumi: {
            connect: {
                codice: '031.002.060'
            }
        },
        conto_ricavi_canoni: {
            connect: {
                codice: '031.002.030'
            }
        }
     }
];

export default TIPI_UTENTE;