/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[utilizzo_stanza]` on the table `utilizzo_stanza`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "utilizzo_stanza.utilizzo_stanza_unique" ON "utilizzo_stanza"("utilizzo_stanza");
