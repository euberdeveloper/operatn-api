import { ContoRicaviConsumi } from '@prisma/client';

const CONTI_RICAVI_CONSUMI: Omit<ContoRicaviConsumi, 'id'>[] = [
    {
        codice: '031.002.060',
        contoRicaviConsumi: 'Concorso spese energetiche'
    }
];

export default CONTI_RICAVI_CONSUMI;