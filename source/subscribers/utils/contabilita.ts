import { BollettaInfo } from '@/services/contabilita.service';

export const headersMap: Record<string, string> = {
    id: 'ID BOLLETTA',
    siglaCausale: 'SIGLA CAUSALE',
    importoCanoni: 'IMPORTO CANONI',
    importoConsumi: 'IMPORTO CONSUMI',
    importoTotale: 'IMPORTO TOTALE',
    contiRicaviCanoni: 'CONTI RICAVI CANONI',
    contiRicaviConsumi: 'CONTI RICAVI CONSUMI',
    competenzaDal: 'COMPETENZA DAL',
    competenzaAl: 'COMPETENZA AL',
    dataScadenza: 'DATA SCADENZA',
    tipoBolletta: 'TIPO BOLLETTA',
    idOspite: 'ID OSPITE',
    nomeOspite: 'NOME OSPITE',
    cognomeOspite: 'COGNOME OSPITE',
    emailOspite: 'EMAIL OSPITE',
    codiceFiscaleOspite: 'CODICE FISCALE OSPITE',
    cittadinanzaOspite: 'CITTADINANZA OSPITE',
    siglaTipoContratto: 'TIPO CONTRATTO',
    idContratto: 'ID CONTRATTO',
    quietanziante: 'QUIETANZIANTE'
};

function textFromDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export type ContabilitaTuple = [Record<string, string>, boolean];

export function getTupleFromBollettaInfo(bolletta: BollettaInfo, passedBollette: Set<number>): ContabilitaTuple {
    return [
        {
            id: bolletta.id.toString(),
            siglaCausale: bolletta.siglaCausale,
            importoCanoni: bolletta.importoCanoni !== null ? `€ ${bolletta.importoCanoni.toString()}` : '€ 0',
            importoConsumi: bolletta.importoConsumi !== null ? `€ ${bolletta.importoConsumi.toString()}` : '€ 0',
            importoTotale: `€ ${bolletta.importoTotale.toString()}`,
            contiRicaviCanoni:
                bolletta.contoRicaviCanoni !== null
                    ? `${bolletta.contoRicaviCanoni.codice} - ${bolletta.contoRicaviCanoni.conto}`
                    : '',
            contiRicaviConsumi:
                bolletta.contoRicaviConsumi !== null
                    ? `${bolletta.contoRicaviConsumi.codice} - ${bolletta.contoRicaviConsumi.conto}`
                    : '',
            competenzaDal: textFromDate(bolletta.competenzaDal),
            competenzaAl: textFromDate(bolletta.competenzaAl),
            dataScadenza: textFromDate(bolletta.dataScadenza),
            tipoBolletta: bolletta.tipoBolletta.tipoBolletta,
            idOspite: bolletta.idOspite ? bolletta.idOspite.toString() : '-',
            nomeOspite: bolletta.ospite?.persona.nome ?? '-',
            cognomeOspite: bolletta.ospite?.persona.cognome ?? '-',
            emailOspite: bolletta.ospite?.email ?? '-',
            codiceFiscaleOspite: bolletta.ospite?.persona.codiceFiscale ?? '-',
            cittadinanzaOspite: bolletta.ospite?.cittadinanza ?? '-',
            siglaTipoContratto: bolletta.siglaTipoContratto,
            idContratto: bolletta.idContratto.toString(),
            quietanziante: bolletta.quietanziante.quietanziante
        },
        passedBollette.has(bolletta.id)
    ];
}
