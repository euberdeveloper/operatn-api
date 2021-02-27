import { TipoBolletta } from '@prisma/client';

const TIPI_BOLLETTA: Omit<TipoBolletta, 'id'>[] = [
    {
        tipoBolletta: 'MANCATA RESTITUZIONE BICI',
        importo: 140
    },
    {
        tipoBolletta: 'DANNI BICI',
        importo: null
    },
    {
        tipoBolletta: 'MANCATA RESTITUZIONE CHIAVI ALLOGGIO',
        importo: 50
    },
    {
        tipoBolletta: 'MANCATA RESTITUZIONE CHIAVI ARMADIETTO',
        importo: 5
    },
    {
        tipoBolletta: 'MANCATA RESTITUZIONE BADGE',
        importo: 6
    },
    {
        tipoBolletta: 'IGIENIZZAZIONE BLOCCHI ABC',
        importo: 10.36
    },
    {
        tipoBolletta: 'IGIENIZZAZIONE BLOCCHI EF',
        importo: 16.92
    },
    {
        tipoBolletta: 'PENALE TRASFERIMENTO',
        importo: 50
    },
    {
        tipoBolletta: 'CHECKOUT',
        importo: 40
    },
    {
        tipoBolletta: 'MULTA',
        importo: null
    }
];

export default TIPI_BOLLETTA;