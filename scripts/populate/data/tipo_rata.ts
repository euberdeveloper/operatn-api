import { TipoRata } from '@prisma/client';

const TIPI_RATE: Omit<TipoRata, 'id'>[] = [
    { tipoRata: 'MENSILE' },
    { tipoRata: 'UNICA' },
    { tipoRata: 'DA_BANDO' }
];

export default TIPI_RATE;