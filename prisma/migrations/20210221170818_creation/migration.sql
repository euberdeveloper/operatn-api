-- CreateEnum
CREATE TYPE "Sesso" AS ENUM ('MASCHIO', 'FEMMINA');

-- CreateEnum
CREATE TYPE "Piano" AS ENUM ('PIANO_TERRA', 'PIANO_RIALZATO', 'PRIMO_PIANO', 'SECONDO_PIANO', 'TERZO_PIANO', 'QUARTO_PIANO', 'QUINTO_PIANO', 'SESTO_PIANO', 'SETTIMO_PIANO');

-- CreateEnum
CREATE TYPE "RuoloUtente" AS ENUM ('ADMIN', 'SPORTELLO', 'PORTINERIA', 'CONTROLLO_ALLOGGI');

-- CreateEnum
CREATE TYPE "CronologiaAzione" AS ENUM ('CREATE', 'RETRIEVE', 'UPDATE', 'DELETE');

-- CreateEnum
CREATE TYPE "CronologiaRisorsa" AS ENUM ('OSPITE', 'PRESIDENTE');

-- CreateTable
CREATE TABLE "persona" (
    "uid" TEXT NOT NULL,
    "codice_fiscale" TEXT,
    "nome" TEXT NOT NULL,
    "cognome" TEXT NOT NULL,
    "sesso" "Sesso" NOT NULL,
    "data_nascita" TIMESTAMP(3) NOT NULL,
    "data_creazione" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eliminato" TIMESTAMP(3),

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "luogo_di_nascita" (
    "uid" TEXT NOT NULL,
    "stato" TEXT NOT NULL,
    "provincia" TEXT,
    "comune" TEXT,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "residenza" (
    "uid" TEXT NOT NULL,
    "stato" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "cap" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "n_civico" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "domicilio" (
    "uid" TEXT NOT NULL,
    "stato" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "cap" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "n_civico" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "presidente" (
    "uid" TEXT NOT NULL,
    "data_inizio_mandato" TIMESTAMP(3) NOT NULL,
    "data_fine_mandato" TIMESTAMP(3) NOT NULL,
    "firma" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "ospite" (
    "uid" TEXT NOT NULL,
    "email" TIMESTAMP(3) NOT NULL,
    "telefono" TIMESTAMP(3) NOT NULL,
    "foto" TEXT NOT NULL,
    "codice_dipartimento_unitn" TEXT,
    "possiede_cauzione" BOOLEAN NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "conto_corrente" (
    "uid" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "banca" TEXT NOT NULL,
    "swift_bic" TEXT NOT NULL,
    "aba" TEXT NOT NULL,
    "agenzia" TEXT NOT NULL,
    "transit_code" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "documento_identita" (
    "uid" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "ente" TEXT NOT NULL,
    "data_scadenza" TIMESTAMP(3) NOT NULL,
    "data_rilascio" TIMESTAMP(3) NOT NULL,
    "cittadinanza" TEXT NOT NULL,
    "documento" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "dipartimento_unitn" (
    "codice" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "cap" TEXT NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "n_civico" TEXT NOT NULL,
    "sito_web" TEXT NOT NULL,

    PRIMARY KEY ("codice")
);

-- CreateTable
CREATE TABLE "fabbricato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "provincia" TEXT NOT NULL,
    "comune" TEXT NOT NULL,
    "cap" CHAR(5) NOT NULL,
    "indirizzo" TEXT NOT NULL,
    "numero_civico" TEXT NOT NULL,
    "id_tipo_fabbricato" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_fabbricato" (
    "id" SERIAL NOT NULL,
    "tipo_fabbricato" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stanza" (
    "id" SERIAL NOT NULL,
    "id_fabbricato" INTEGER NOT NULL,
    "unita_immobiliare" TEXT NOT NULL,
    "numero_stanza" TEXT NOT NULL,
    "id_tipo_stanza" INTEGER NOT NULL,
    "centro_di_costo" TEXT NOT NULL,
    "gestione_diretta" BOOLEAN NOT NULL,
    "handicap" BOOLEAN NOT NULL,
    "bagno" BOOLEAN NOT NULL,
    "piano" "Piano" NOT NULL,
    "valido_dal" TIMESTAMP(3) NOT NULL,
    "valido_al" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_stanza" (
    "id" SERIAL NOT NULL,
    "tipo_stanza" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manutenzione" (
    "id" SERIAL NOT NULL,
    "data_inizio" TIMESTAMP(3) NOT NULL,
    "data_fine" TIMESTAMP(3),
    "id_stanza" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posto_letto" (
    "id" SERIAL NOT NULL,
    "id_stanza" INTEGER NOT NULL,
    "posto_letto" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tariffa" (
    "id" SERIAL NOT NULL,
    "id_tipo_utente" INTEGER NOT NULL,
    "id_utilizzo_stanza" INTEGER NOT NULL,
    "id_tipo_fabbricato" INTEGER NOT NULL,
    "id_tipo_tariffa" INTEGER NOT NULL,
    "prezzo_consumi" DOUBLE PRECISION NOT NULL,
    "prezzo_canone" DOUBLE PRECISION NOT NULL,
    "valida_dal" TIMESTAMP(3) NOT NULL,
    "valida_al" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utilizzo_stanza" (
    "id" SERIAL NOT NULL,
    "utilizzo_stanza" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_utente" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,
    "tipo_utente" TEXT NOT NULL,
    "id_conto_ricavi_consumi" INTEGER NOT NULL,
    "id_conto_ricavi_canoni" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_utilizzo_stanza" (
    "id" SERIAL NOT NULL,
    "tipo_utilizzo_stanza" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_tariffa" (
    "id" SERIAL NOT NULL,
    "tipo_tariffa" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contratto" (
    "id" SERIAL NOT NULL,
    "data_inizio" TIMESTAMP(3) NOT NULL,
    "data_fine" TIMESTAMP(3) NOT NULL,
    "data_firma_contratto" TIMESTAMP(3),
    "data_contabilizzazione" TIMESTAMP(3),
    "data_chiusura_anticipata" TIMESTAMP(3),
    "checkout" DOUBLE PRECISION,
    "data_checkin" TIMESTAMP(3) NOT NULL,
    "data_checkout" TIMESTAMP(3),
    "cauzione" DOUBLE PRECISION,
    "id_tipo_rata" INTEGER NOT NULL,
    "id_tariffa" INTEGER NOT NULL,
    "id_tipo_contratto" INTEGER NOT NULL,
    "id_quietanziante" INTEGER NOT NULL,
    "uid_ospite" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contratti_su_posti_letto" (
    "id_contratto" INTEGER NOT NULL,
    "id_posto_letto" INTEGER NOT NULL,

    PRIMARY KEY ("id_contratto","id_posto_letto")
);

-- CreateTable
CREATE TABLE "tipo_rata" (
    "id" SERIAL NOT NULL,
    "tipo_rata" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_contratto" (
    "id" SERIAL NOT NULL,
    "id_tipo_studente" INTEGER NOT NULL,
    "sigla" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "quietanzianteId" INTEGER,
    "contoRicaviConsumiId" INTEGER,
    "contoRicaviCanoniId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quietanziante" (
    "id" SERIAL NOT NULL,
    "quietanziante" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_studente" (
    "id" SERIAL NOT NULL,
    "tipo_studente" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conto_ricavi_consumi" (
    "id" SERIAL NOT NULL,
    "codice" TEXT NOT NULL,
    "conto_ricavi_consumi" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conto_ricavi_canoni" (
    "id" SERIAL NOT NULL,
    "codice" TEXT NOT NULL,
    "conto_ricavi_canoni" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bolletta" (
    "id" SERIAL NOT NULL,
    "importo_consumi" DOUBLE PRECISION,
    "importo_canone" DOUBLE PRECISION,
    "importo_totale" DOUBLE PRECISION NOT NULL,
    "competenza_al" TIMESTAMP(3) NOT NULL,
    "competenza_dal" TIMESTAMP(3) NOT NULL,
    "data_scadenza" TIMESTAMP(3) NOT NULL,
    "data_invio" TIMESTAMP(3),
    "data_registrazione" TIMESTAMP(3),
    "centro_di_costo" TEXT NOT NULL,
    "conto_ricavi_consumi" TEXT NOT NULL,
    "conto_ricavi_canoni" TEXT NOT NULL,
    "id_bolletta_stornata" INTEGER,
    "id_tipo_bolletta" INTEGER NOT NULL,
    "id_contratto" INTEGER NOT NULL,
    "uid_ospite" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_bolletta" (
    "id" SERIAL NOT NULL,
    "tipo_bolletta" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stato" (
    "codice_iso" TEXT NOT NULL,
    "codice_stato" TEXT NOT NULL,
    "codice_istat" TEXT NOT NULL,
    "codice_istat_inps" TEXT NOT NULL,
    "denominazione" TEXT NOT NULL,

    PRIMARY KEY ("codice_iso")
);

-- CreateTable
CREATE TABLE "provincia" (
    "sigla" TEXT NOT NULL,
    "denominazione" TEXT NOT NULL,
    "regione" TEXT NOT NULL,
    "codice_stato" TEXT NOT NULL,

    PRIMARY KEY ("sigla")
);

-- CreateTable
CREATE TABLE "comune" (
    "id" INTEGER NOT NULL,
    "codice_istat" TEXT NOT NULL,
    "denominazione" TEXT NOT NULL,
    "sigla_provincia" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "utente" (
    "uid" TEXT NOT NULL,
    "nome_utente" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ruolo" "RuoloUtente" NOT NULL,
    "token_recupero_password" TEXT,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "cronologia" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "ip" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "azione" "CronologiaAzione" NOT NULL,
    "risorsa" "CronologiaRisorsa" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stanza.id_fabbricato_unita_immobiliare_numero_stanza_unique" ON "stanza"("id_fabbricato", "unita_immobiliare", "numero_stanza");

-- CreateIndex
CREATE UNIQUE INDEX "tariffa.id_tipo_utente_id_utilizzo_stanza_id_tipo_fabbricato_id_tipo_tariffa_unique" ON "tariffa"("id_tipo_utente", "id_utilizzo_stanza", "id_tipo_fabbricato", "id_tipo_tariffa");

-- CreateIndex
CREATE UNIQUE INDEX "stato.codice_stato_unique" ON "stato"("codice_stato");

-- CreateIndex
CREATE UNIQUE INDEX "stato.codice_istat_unique" ON "stato"("codice_istat");

-- CreateIndex
CREATE UNIQUE INDEX "stato.codice_istat_inps_unique" ON "stato"("codice_istat_inps");

-- CreateIndex
CREATE UNIQUE INDEX "stato.denominazione_unique" ON "stato"("denominazione");

-- CreateIndex
CREATE UNIQUE INDEX "provincia.denominazione_unique" ON "provincia"("denominazione");

-- CreateIndex
CREATE UNIQUE INDEX "comune.codice_istat_unique" ON "comune"("codice_istat");

-- CreateIndex
CREATE UNIQUE INDEX "comune.denominazione_unique" ON "comune"("denominazione");

-- CreateIndex
CREATE UNIQUE INDEX "utente.nome_utente_unique" ON "utente"("nome_utente");

-- AddForeignKey
ALTER TABLE "luogo_di_nascita" ADD FOREIGN KEY ("uid") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "residenza" ADD FOREIGN KEY ("uid") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "domicilio" ADD FOREIGN KEY ("uid") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presidente" ADD FOREIGN KEY ("uid") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ospite" ADD FOREIGN KEY ("codice_dipartimento_unitn") REFERENCES "dipartimento_unitn"("codice") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ospite" ADD FOREIGN KEY ("uid") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conto_corrente" ADD FOREIGN KEY ("uid") REFERENCES "ospite"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_identita" ADD FOREIGN KEY ("uid") REFERENCES "ospite"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fabbricato" ADD FOREIGN KEY ("id_tipo_fabbricato") REFERENCES "tipo_fabbricato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stanza" ADD FOREIGN KEY ("id_fabbricato") REFERENCES "fabbricato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "stanza" ADD FOREIGN KEY ("id_tipo_stanza") REFERENCES "tipo_stanza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manutenzione" ADD FOREIGN KEY ("id_stanza") REFERENCES "stanza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posto_letto" ADD FOREIGN KEY ("id_stanza") REFERENCES "stanza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tariffa" ADD FOREIGN KEY ("id_tipo_utente") REFERENCES "tipo_utente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tariffa" ADD FOREIGN KEY ("id_utilizzo_stanza") REFERENCES "utilizzo_stanza"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tariffa" ADD FOREIGN KEY ("id_tipo_fabbricato") REFERENCES "tipo_fabbricato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tariffa" ADD FOREIGN KEY ("id_tipo_tariffa") REFERENCES "tipo_tariffa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_utente" ADD FOREIGN KEY ("id_conto_ricavi_consumi") REFERENCES "conto_ricavi_consumi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_utente" ADD FOREIGN KEY ("id_conto_ricavi_canoni") REFERENCES "conto_ricavi_canoni"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("id_tipo_rata") REFERENCES "tipo_rata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("id_tariffa") REFERENCES "tariffa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("id_tipo_contratto") REFERENCES "tipo_contratto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("id_quietanziante") REFERENCES "quietanziante"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("uid_ospite") REFERENCES "ospite"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratti_su_posti_letto" ADD FOREIGN KEY ("id_contratto") REFERENCES "contratto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratti_su_posti_letto" ADD FOREIGN KEY ("id_posto_letto") REFERENCES "posto_letto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_contratto" ADD FOREIGN KEY ("id_tipo_studente") REFERENCES "tipo_studente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_contratto" ADD FOREIGN KEY ("quietanzianteId") REFERENCES "quietanziante"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_contratto" ADD FOREIGN KEY ("contoRicaviConsumiId") REFERENCES "conto_ricavi_consumi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tipo_contratto" ADD FOREIGN KEY ("contoRicaviCanoniId") REFERENCES "conto_ricavi_canoni"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolletta" ADD FOREIGN KEY ("id_bolletta_stornata") REFERENCES "bolletta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolletta" ADD FOREIGN KEY ("id_tipo_bolletta") REFERENCES "tipo_bolletta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolletta" ADD FOREIGN KEY ("id_contratto") REFERENCES "contratto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bolletta" ADD FOREIGN KEY ("uid_ospite") REFERENCES "ospite"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provincia" ADD FOREIGN KEY ("codice_stato") REFERENCES "stato"("codice_iso") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comune" ADD FOREIGN KEY ("sigla_provincia") REFERENCES "provincia"("sigla") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cronologia" ADD FOREIGN KEY ("uid") REFERENCES "utente"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
