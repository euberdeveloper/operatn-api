/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[codice]` on the table `fabbricato`. If there are existing duplicate values, the migration will fail.
  - Added the required column `codice` to the `fabbricato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fabbricato" ADD COLUMN     "codice" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "fabbricato.codice_unique" ON "fabbricato"("codice");
