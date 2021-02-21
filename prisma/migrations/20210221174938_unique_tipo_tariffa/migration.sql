/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[tipo_tariffa]` on the table `tipo_tariffa`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tipo_tariffa.tipo_tariffa_unique" ON "tipo_tariffa"("tipo_tariffa");
