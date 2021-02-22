/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[nome]` on the table `dipartimento_unitn`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "dipartimento_unitn" ADD COLUMN     "sigla" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "dipartimento_unitn.nome_unique" ON "dipartimento_unitn"("nome");
