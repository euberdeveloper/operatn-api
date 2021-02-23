/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[old_code]` on the table `fabbricato`. If there are existing duplicate values, the migration will fail.
  - Added the required column `old_code` to the `fabbricato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fabbricato" ADD COLUMN     "old_code" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "stanza" ALTER COLUMN "centro_di_costo" DROP NOT NULL,
ALTER COLUMN "valido_al" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "fabbricato.old_code_unique" ON "fabbricato"("old_code");
