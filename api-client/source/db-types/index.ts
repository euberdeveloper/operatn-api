import { Sesso } from '@/db-types';

export {
    Bolletta,
    Comune,
    ContoCorrente,
    ContoRicaviCanoni,
    ContoRicaviConsumi,
    Contratto,
    ContrattoSuOspite,
    ContrattoSuOspiteSuPostoLetto,
    Cronologia,
    CronologiaAzione,
    CronologiaRisorsa,
    DipartimentoUnitn,
    DocumentoIdentita,
    Domicilio,
    Fabbricato,
    LuogoDiNascita,
    Manutenzione,
    Ospite,
    Persona,
    Piano,
    PostoLetto,
    Presidente,
    Provincia,
    Quietanziante,
    Residenza,
    RuoloUtente,
    Sesso,
    Stanza,
    Stato,
    Tariffa,
    TipoBolletta,
    TipoContratto,
    TipoFabbricato,
    TipoOspite,
    TipoRata,
    TipoStanza,
    TipoStudente,
    TipoTariffa,
    Utente,
    UtilizzoStanza
} from '@server/services/prisma.service';

export interface Tabellone {
    fabbricatoId: number;
    fabbricatoCodice: string;
    fabbricatoNome: string;
    fabbricatoComune: string;
    fabbricatoIndirizzo: string;
    fabbricatoNCivico: string;
    stanzaUnitaImmobiliare: string;
    stanzaPiano: string | null;
    tipoStanzaTipoStanza: string;
    stanzaNumeroStanza: string;
    postoLettoPostoLetto: string;
    stanzaGestioneDiretta: boolean;
    stanzaNote: string | null;
    manutenzioneDataCreazione: string | null;
    personaId: number | null;
    personaNome: string | null;
    personaCognome: string | null;
    personaCodiceFiscale: string | null;
    personaSesso: Sesso | null;
    ospiteCittadinanza: string | null;
    ospiteEmail: string | null;
    ospiteTelefonoPrincipale: string | null;
    ospiteTelefonoSecondario: string | null;
    dipartimentoUnitnCodice: string | null;
    dipartimentoUnitnNome: string | null;
    contrattoId: number | null;
    contrattoDataInizio: string | null;
    contrattoDataFine: string | null;
    tipoContrattoSigla: string | null;
    tipoOspiteSigla: string | null;
    contrattoNote: string | null;
}
