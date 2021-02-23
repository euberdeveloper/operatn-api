/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[valido_dal]` on the table `fabbricato`. If there are existing duplicate values, the migration will fail.
  - Added the required column `valido_dal` to the `fabbricato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "fabbricato" ADD COLUMN     "valido_dal" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valido_al" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "fabbricato.valido_dal_unique" ON "fabbricato"("valido_dal");
