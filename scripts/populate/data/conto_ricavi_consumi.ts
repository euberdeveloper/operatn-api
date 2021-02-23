import { ContoRicaviConsumi } from '@prisma/client';

const CONTI_RICAVI_CONSUMI: Omit<ContoRicaviConsumi, 'id'>[] = [
    {
        codice: '031.002.060',
        conto_ricavi_consumi: 'Concorso spese energetiche'
    }
];

export default CONTI_RICAVI_CONSUMI;