import { TipoUtente } from '@prisma/client';

type TipoUtenteInsert = Omit<TipoUtente, 'id' | 'idContoRicaviCanoni' | 'idContoRicaviConsumi'> & {
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
        tipoUtente: 'Studente da bando',
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
        tipoUtente: 'Altri studenti',
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
        tipoUtente: 'Ospitalità',
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