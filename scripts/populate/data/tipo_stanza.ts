import { TipoStanza } from '@prisma/client';

const TIPI_STANZA: Omit<TipoStanza, 'id'>[] = [
    { tipoStanza: 'STANZA SINGOLA' },
    { tipoStanza: 'STANZA DOPPIA' },
    { tipoStanza: 'MONOLOCALE' },
    { tipoStanza: 'BILOCALE' },
];

export default TIPI_STANZA;