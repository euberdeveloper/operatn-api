import { ContoRicaviCanoni } from '@prisma/client';

const CONTI_RICAVI_CANONI: Omit<ContoRicaviCanoni, 'id'>[] = [
    {
        codice: '031.002.020',
        conto_ricavi_canoni: 'Ricavi ser. Alloggi beneficiari posto alloggio'
    },
    {
        codice: '031.002.030',
        conto_ricavi_canoni: 'Ricavi servizio alloggiativo ospitalità'
    },
    {
        codice: '031.002.040',
        conto_ricavi_canoni: 'Ricavi servizio allogiativo altri studenti'
    },
    {
        codice: '031.002.050',
        conto_ricavi_canoni: 'Ricavi servizio allogiativo borse in servizi'
    }
];

export default CONTI_RICAVI_CANONI;