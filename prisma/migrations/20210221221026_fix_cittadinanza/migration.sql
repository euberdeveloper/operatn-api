/*
  Warnings:

  - You are about to drop the column `cittadinanza` on the `documento_identita` table. All the data in the column will be lost.
  - Added the required column `cittadinanza` to the `ospite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "documento_identita" DROP COLUMN "cittadinanza";

-- AlterTable
ALTER TABLE "ospite" ADD COLUMN     "cittadinanza" TEXT NOT NULL;
