/**
 * Model Persona
 */

export type Persona = {
    id: number;
    codiceFiscale: string | null;
    nome: string;
    cognome: string;
    sesso: Sesso;
    dataDiNascita: Date;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model LuogoDiNascita
 */

export type LuogoDiNascita = {
    id: number;
    stato: string;
    provincia: string | null;
    comune: string | null;
    istatComune: string | null;
};

/**
 * Model Residenza
 */

export type Residenza = {
    id: number;
    stato: string;
    provincia: string | null;
    comune: string | null;
    istatComune: string | null;
    cap: string | null;
    indirizzo: string;
    nCivico: string;
};

/**
 * Model Domicilio
 */

export type Domicilio = {
    id: number;
    idPersona: number;
    stato: string;
    provincia: string | null;
    comune: string;
    istatComune: string | null;
    cap: string | null;
    indirizzo: string;
    nCivico: string;
};

/**
 * Model Presidente
 */

export type Presidente = {
    id: number;
    dataInizioMandato: Date;
    dataFineMandato: Date;
    firma: string | null;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model Ospite
 */

export type Ospite = {
    id: number;
    idGiada: number | null;
    email: string;
    telefonoPrincipale: string | null;
    telefonoSecondario: string | null;
    foto: string | null;
    cittadinanza: string;
    codiceDipartimentoUnitn: string | null;
    possiedeCauzione: boolean;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model ContoCorrente
 */

export type ContoCorrente = {
    id: number;
    iban: string;
    banca: string | null;
};

/**
 * Model DocumentoIdentita
 */

export type DocumentoIdentita = {
    id: number;
    tipo: string;
    numero: string;
    ente: string;
    dataScadenza: Date;
    dataRilascio: Date;
    documento: string | null;
};

/**
 * Model DipartimentoUnitn
 */

export type DipartimentoUnitn = {
    codice: string;
    sigla: string | null;
    nome: string;
    provincia: string;
    comune: string;
    cap: string;
    indirizzo: string;
    nCivico: string;
    sitoWeb: string;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model Fabbricato
 */

export type Fabbricato = {
    id: number;
    codice: string;
    nome: string;
    provincia: string;
    comune: string;
    cap: string;
    indirizzo: string;
    nCivico: string;
    idTipoFabbricato: number;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model TipoFabbricato
 */

export type TipoFabbricato = {
    id: number;
    tipoFabbricato: string;
};

/**
 * Model Stanza
 */

export type Stanza = {
    id: number;
    idFabbricato: number;
    unitaImmobiliare: string;
    numeroStanza: string;
    idTipoStanza: number;
    centroDiCosto: string;
    gestioneDiretta: boolean;
    handicap: boolean;
    bagno: boolean;
    piano: Piano | null;
    note: string | null;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model TipoStanza
 */

export type TipoStanza = {
    id: number;
    tipoStanza: string;
};

/**
 * Model Manutenzione
 */

export type Manutenzione = {
    id: number;
    idStanza: number;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model PostoLetto
 */

export type PostoLetto = {
    id: number;
    idStanza: number;
    postoLetto: string;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model Tariffa
 */

export type Tariffa = {
    id: number;
    idTipoOspite: number;
    idUtilizzoStanza: number | null;
    idTipoFabbricato: number | null;
    idTipoTariffa: number;
    prezzoConsumi: number;
    prezzoCanoni: number;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model UtilizzoStanza
 */

export type UtilizzoStanza = {
    id: number;
    utilizzoStanza: string;
};

/**
 * Model TipoOspite
 */

export type TipoOspite = {
    id: number;
    sigla: string;
    tipoOspite: string;
    idContoRicaviConsumi: number;
    idContoRicaviCanoni: number;
};

/**
 * Model TipoTariffa
 */

export type TipoTariffa = {
    id: number;
    tipoTariffa: string;
};

/**
 * Model Contratto
 */

export type Contratto = {
    id: number;
    dataInizio: Date;
    dataFine: Date;
    dataFirmaContratto: Date | null;
    dataChiusuraAnticipata: Date | null;
    checkout: number | null;
    cauzione: number | null;
    tipoRata: TipoRata;
    idTariffa: number;
    idTipoContratto: number;
    idQuietanziante: number;
    note: string | null;
};

/**
 * Model ContrattoSuOspite
 */

export type ContrattoSuOspite = {
    idContratto: number;
    idOspite: number;
    dataCheckin: Date | null;
    dataCheckout: Date | null;
    dataConsegnaChiavi: Date | null;
    dataConsegnaBadge: Date | null;
    dataConsegnaLenzuola: Date | null;
};

/**
 * Model ContrattoSuOspiteSuPostoLetto
 */

export type ContrattoSuOspiteSuPostoLetto = {
    idContratto: number;
    idOspite: number;
    idPostoLetto: number;
};

/**
 * Model TipoContratto
 */

export type TipoContratto = {
    id: number;
    idTipoStudente: number;
    sigla: string;
    nome: string;
};

/**
 * Model Quietanziante
 */

export type Quietanziante = {
    id: number;
    quietanziante: string;
};

/**
 * Model TipoStudente
 */

export type TipoStudente = {
    id: number;
    tipoStudente: string;
};

/**
 * Model ContoRicaviConsumi
 */

export type ContoRicaviConsumi = {
    id: number;
    codice: string;
    contoRicaviConsumi: string;
};

/**
 * Model ContoRicaviCanoni
 */

export type ContoRicaviCanoni = {
    id: number;
    codice: string;
    contoRicaviCanoni: string;
};

/**
 * Model Bolletta
 */

export type Bolletta = {
    id: number;
    importoConsumi: number | null;
    importoCanoni: number | null;
    importoTotale: number;
    competenzaAl: Date;
    competenzaDal: Date;
    dataScadenza: Date;
    dataInvioEusis: Date | null;
    dataRegistrazione: Date | null;
    centroDiCosto: string;
    contoRicaviConsumi: string;
    contoRicaviCanoni: string;
    idBollettaStornata: number | null;
    idTipoBolletta: number;
    idContratto: number;
    idQuietanziante: number;
};

/**
 * Model TipoBolletta
 */

export type TipoBolletta = {
    id: number;
    tipoBolletta: string;
    importo: number | null;
    idQuietanziante: number | null;
};

/**
 * Model Stato
 */

export type Stato = {
    codiceIso: string;
    codiceStato: string;
    codiceIstat: string;
    denominazione: string;
};

/**
 * Model Provincia
 */

export type Provincia = {
    sigla: string;
    denominazione: string;
    regione: string;
    codiceStato: string;
};

/**
 * Model Comune
 */

export type Comune = {
    id: number;
    codiceCatastale: string;
    codiceIstat: string;
    denominazione: string;
    siglaProvincia: string;
    dataIstituzione: Date;
    eliminato: Date | null;
};

/**
 * Model Utente
 */

export type Utente = {
    uid: string;
    nomeUtente: string;
    password: string;
    email: string;
    ruolo: RuoloUtente;
    tokenRecuperoPassword: string | null;
    dataCreazione: Date;
    eliminato: Date | null;
};

/**
 * Model Cronologia
 */

export type Cronologia = {
    id: number;
    timestamp: Date;
    ip: string;
    uid: string;
    azione: CronologiaAzione;
    risorsa: CronologiaRisorsa;
};

/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Sesso = {
    MASCHIO: 'MASCHIO',
    FEMMINA: 'FEMMINA'
};

export type Sesso = typeof Sesso[keyof typeof Sesso];

export const Piano = {
    PIANO_TERRA: 'PIANO_TERRA',
    PIANO_RIALZATO: 'PIANO_RIALZATO',
    PRIMO_PIANO: 'PRIMO_PIANO',
    SECONDO_PIANO: 'SECONDO_PIANO',
    TERZO_PIANO: 'TERZO_PIANO',
    QUARTO_PIANO: 'QUARTO_PIANO',
    QUINTO_PIANO: 'QUINTO_PIANO',
    SESTO_PIANO: 'SESTO_PIANO',
    SETTIMO_PIANO: 'SETTIMO_PIANO',
    MANSARDA: 'MANSARDA'
};
export type Piano = typeof Piano[keyof typeof Piano];

export const TipoRata = {
    DA_BANDO: 'DA_BANDO',
    MENSILE: 'MENSILE',
    QUADRIMESTRALE: 'QUADRIMESTRALE',
    UNICA: 'UNICA'
};

export type TipoRata = typeof TipoRata[keyof typeof TipoRata];

export const RuoloUtente = {
    ADMIN: 'ADMIN',
    SPORTELLO: 'SPORTELLO',
    PORTINERIA: 'PORTINERIA',
    RAGIONERIA: 'RAGIONERIA',
    CONTROLLO_ALLOGGI: 'CONTROLLO_ALLOGGI'
};

export type RuoloUtente = typeof RuoloUtente[keyof typeof RuoloUtente];

export const CronologiaAzione = {
    CREATE: 'CREATE',
    RETRIEVE: 'RETRIEVE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE'
};

export type CronologiaAzione = typeof CronologiaAzione[keyof typeof CronologiaAzione];

export const CronologiaRisorsa = {
    OSPITE: 'OSPITE',
    PRESIDENTE: 'PRESIDENTE'
};

export type CronologiaRisorsa = typeof CronologiaRisorsa[keyof typeof CronologiaRisorsa];
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
