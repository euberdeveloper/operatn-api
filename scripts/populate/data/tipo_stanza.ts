import { TipoStanza } from '@prisma/client';

const TIPI_STANZA: Omit<TipoStanza, 'id'>[] = [
    { tipo_stanza: 'STANZA SINGOLA' },
    { tipo_stanza: 'STANZA DOPPIA' },
    { tipo_stanza: 'MONOLOCALE' },
    { tipo_stanza: 'BILOCALE' },
];

export default TIPI_STANZA;