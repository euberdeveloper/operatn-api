/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[codice]` on the table `conto_ricavi_canoni`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[conto_ricavi_canoni]` on the table `conto_ricavi_canoni`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[codice]` on the table `conto_ricavi_consumi`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[conto_ricavi_consumi]` on the table `conto_ricavi_consumi`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[quietanziante]` on the table `quietanziante`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_bolletta]` on the table `tipo_bolletta`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[sigla]` on the table `tipo_contratto`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[nome]` on the table `tipo_contratto`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_fabbricato]` on the table `tipo_fabbricato`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_rata]` on the table `tipo_rata`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_stanza]` on the table `tipo_stanza`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_studente]` on the table `tipo_studente`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[sigla]` on the table `tipo_utente`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[tipo_utente]` on the table `tipo_utente`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "conto_ricavi_canoni.codice_unique" ON "conto_ricavi_canoni"("codice");

-- CreateIndex
CREATE UNIQUE INDEX "conto_ricavi_canoni.conto_ricavi_canoni_unique" ON "conto_ricavi_canoni"("conto_ricavi_canoni");

-- CreateIndex
CREATE UNIQUE INDEX "conto_ricavi_consumi.codice_unique" ON "conto_ricavi_consumi"("codice");

-- CreateIndex
CREATE UNIQUE INDEX "conto_ricavi_consumi.conto_ricavi_consumi_unique" ON "conto_ricavi_consumi"("conto_ricavi_consumi");

-- CreateIndex
CREATE UNIQUE INDEX "quietanziante.quietanziante_unique" ON "quietanziante"("quietanziante");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_bolletta.tipo_bolletta_unique" ON "tipo_bolletta"("tipo_bolletta");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_contratto.sigla_unique" ON "tipo_contratto"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_contratto.nome_unique" ON "tipo_contratto"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_fabbricato.tipo_fabbricato_unique" ON "tipo_fabbricato"("tipo_fabbricato");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_rata.tipo_rata_unique" ON "tipo_rata"("tipo_rata");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_stanza.tipo_stanza_unique" ON "tipo_stanza"("tipo_stanza");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_studente.tipo_studente_unique" ON "tipo_studente"("tipo_studente");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_utente.sigla_unique" ON "tipo_utente"("sigla");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_utente.tipo_utente_unique" ON "tipo_utente"("tipo_utente");
