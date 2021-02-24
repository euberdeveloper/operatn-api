import { TipoBolletta } from '@prisma/client';

const TIPI_BOLLETTA: Omit<TipoBolletta, 'id'>[] = [
    {
        tipo_bolletta: 'MANCATA RESTITUZIONE BICI',
        importo: 140
    },
    {
        tipo_bolletta: 'DANNI BICI',
        importo: null
    },
    {
        tipo_bolletta: 'MANCATA RESTITUZIONE CHIAVI ALLOGGIO',
        importo: 50
    },
    {
        tipo_bolletta: 'MANCATA RESTITUZIONE CHIAVI ARMADIETTO',
        importo: 5
    },
    {
        tipo_bolletta: 'MANCATA RESTITUZIONE BADGE',
        importo: 6
    },
    {
        tipo_bolletta: 'IGIENIZZAZIONE BLOCCHI ABC',
        importo: 10.36
    },
    {
        tipo_bolletta: 'IGIENIZZAZIONE BLOCCHI EF',
        importo: 16.92
    },
    {
        tipo_bolletta: 'PENALE TRASFERIMENTO',
        importo: 50
    },
    {
        tipo_bolletta: 'CHECKOUT',
        importo: 40
    },
    {
        tipo_bolletta: 'MULTA',
        importo: null
    }
];

export default TIPI_BOLLETTA;