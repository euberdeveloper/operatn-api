import { TipoStudente } from '@prisma/client';

const TIPI_STUDENTE: Omit<TipoStudente, 'id'>[] = [
    { tipoStudente: 'ALTA FORMAZIONE' },
    { tipoStudente: 'WELCOME OFFICE' },
    { tipoStudente: 'DOTTORANDI' },
    { tipoStudente: 'DA BANDO' },
    { tipoStudente: 'FBK' },
    { tipoStudente: 'FET' },
    { tipoStudente: 'FORESTERIA' },
    { tipoStudente: 'GRATUITO' },
    { tipoStudente: 'INTERATENEO' },
    { tipoStudente: 'MACH' },
    { tipoStudente: 'DISABILITA' },
    { tipoStudente: 'SANITA' },
    { tipoStudente: 'COLLEGIO' },
    { tipoStudente: 'DISABILITÀ' },
    { tipoStudente: 'UNISPORT' },
    { tipoStudente: 'SANITÀ' },
    { tipoStudente: 'SISSA' }
];

export default TIPI_STUDENTE;