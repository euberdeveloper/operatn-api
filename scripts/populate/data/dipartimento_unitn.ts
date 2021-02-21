import { DipartimentoUnitn } from '@prisma/client';

const DIPARTIMENTI_UNITN: Omit<DipartimentoUnitn, 'id' | 'creato_il' | 'eliminato'>[] = [
    {
        nome: `Dipartimento di informatica e scienze dell'informazione`,
        codice: 'DISI',
        comune: 'Trento',
        cap: '00000',
        indirizzo: 'Via sommarive',
        n_civico: 'non lo so',
        provincia: 'TN',
        sito_web: 'www.boh.com' 
    },
    {
        nome: `Dipartimento di ingegneria industriale`,
        codice: 'DII',
        comune: 'Trento',
        cap: '00000',
        indirizzo: 'Via sommarive',
        n_civico: 'non lo so',
        provincia: 'TN',
        sito_web: 'www.boh.com' 
    }
];

export default DIPARTIMENTI_UNITN;