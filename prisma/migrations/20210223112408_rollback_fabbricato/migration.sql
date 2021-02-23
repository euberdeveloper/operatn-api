/*
  Warnings:

  - You are about to drop the column `valido_dal` on the `fabbricato` table. All the data in the column will be lost.
  - You are about to drop the column `valido_al` on the `fabbricato` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "fabbricato.valido_dal_unique";

-- AlterTable
ALTER TABLE "fabbricato" DROP COLUMN "valido_dal",
DROP COLUMN "valido_al";
