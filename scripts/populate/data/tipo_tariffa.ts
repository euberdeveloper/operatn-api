import { TipoTariffa } from '@prisma/client';

const TIPI_TARIFFA: Omit<TipoTariffa, 'id'>[] = [
    { tipoTariffa: 'GIORNALIERA' },
    { tipoTariffa: 'MENSILE' }
];

export default TIPI_TARIFFA;