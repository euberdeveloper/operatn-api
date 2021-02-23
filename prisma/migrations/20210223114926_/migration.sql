/*
  Warnings:

  - You are about to drop the column `valido_dal` on the `stanza` table. All the data in the column will be lost.
  - You are about to drop the column `valido_al` on the `stanza` table. All the data in the column will be lost.
  - Added the required column `valida_dal` to the `stanza` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stanza" DROP COLUMN "valido_dal",
DROP COLUMN "valido_al",
ADD COLUMN     "valida_dal" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "valida_al" TIMESTAMP(3);
