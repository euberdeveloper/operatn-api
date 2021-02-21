import { TipoTariffa } from '@prisma/client';

const TIPI_TARIFFA: Omit<TipoTariffa, 'id'>[] = [
    { tipo_tariffa: 'GIORNALIERA' },
    { tipo_tariffa: 'MENSILE' }
];

export default TIPI_TARIFFA;