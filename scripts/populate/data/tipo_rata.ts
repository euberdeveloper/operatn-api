import { TipoRata } from '@prisma/client';

const TIPI_RATE: Omit<TipoRata, 'id'>[] = [
    { tipo_rata: 'MENSILE' },
    { tipo_rata: 'UNICA' },
    { tipo_rata: 'DA_BANDO' }
];

export default TIPI_RATE;