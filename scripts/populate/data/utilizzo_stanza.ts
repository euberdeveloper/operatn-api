import { UtilizzoStanza } from '@prisma/client';

const UTILIZZI_STANZE: Omit<UtilizzoStanza, 'id'>[] = [
    { utilizzoStanza: 'STANZA SINGOLA' },
    { utilizzoStanza: 'STANZA DOPPIA' },
    { utilizzoStanza: 'MONOLOCALE' },
    { utilizzoStanza: 'BILOCALE' },
    { utilizzoStanza: 'DOPPIA USO SINGOLA' }
];

export default UTILIZZI_STANZE;