/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[nome]` on the table `fabbricato`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "fabbricato.nome_unique" ON "fabbricato"("nome");
