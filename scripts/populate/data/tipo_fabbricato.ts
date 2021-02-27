import { TipoFabbricato } from '@prisma/client';

const TIPI_FABBRICATO: Omit<TipoFabbricato, 'id'>[] = [
    { tipoFabbricato: 'RESIDENZA COLLETTIVA' },
    { tipoFabbricato: 'APPARTAMENTO' }
];

export default TIPI_FABBRICATO;