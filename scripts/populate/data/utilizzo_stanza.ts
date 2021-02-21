import { UtilizzoStanza } from '@prisma/client';

const UTILIZZI_STANZE: Omit<UtilizzoStanza, 'id'>[] = [
    { utilizzo_stanza: 'STANZA SINGOLA' },
    { utilizzo_stanza: 'STANZA DOPPIA' },
    { utilizzo_stanza: 'MONOLOCALE' },
    { utilizzo_stanza: 'BILOCALE' },
    { utilizzo_stanza: 'DOPPIA USO SINGOLA' }
];

export default UTILIZZI_STANZE;