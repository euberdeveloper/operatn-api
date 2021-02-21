import { TipoFabbricato } from '@prisma/client';

const TIPI_FABBRICATO: Omit<TipoFabbricato, 'id'>[] = [
    { tipo_fabbricato: 'RESIDENZA COLLETTIVA' },
    { tipo_fabbricato: 'APPARTAMENTO' }
];

export default TIPI_FABBRICATO;