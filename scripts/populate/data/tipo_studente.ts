import { TipoStudente } from '@prisma/client';

const TIPI_STUDENTE: Omit<TipoStudente, 'id'>[] = [
    { tipo_studente: 'ALTA FORMAZIONE' },
    { tipo_studente: 'WELCOME OFFICE' },
    { tipo_studente: 'DOTTORANDI' },
    { tipo_studente: 'DA BANDO' },
    { tipo_studente: 'FBK' },
    { tipo_studente: 'FET' },
    { tipo_studente: 'FORESTERIA' },
    { tipo_studente: 'GRATUITO' },
    { tipo_studente: 'INTERATENEO' },
    { tipo_studente: 'MACH' },
    { tipo_studente: 'DISABILITA' },
    { tipo_studente: 'SANITA' },
    { tipo_studente: 'COLLEGIO' },
    { tipo_studente: 'DISABILITÀ' },
    { tipo_studente: 'UNISPORT' },
    { tipo_studente: 'SANITÀ' },
    { tipo_studente: 'SISSA' }
];

export default TIPI_STUDENTE;