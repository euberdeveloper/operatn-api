/*
  Warnings:

  - You are about to drop the column `quietanzianteId` on the `tipo_contratto` table. All the data in the column will be lost.
  - You are about to drop the column `contoRicaviConsumiId` on the `tipo_contratto` table. All the data in the column will be lost.
  - You are about to drop the column `contoRicaviCanoniId` on the `tipo_contratto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tipo_contratto" DROP CONSTRAINT "tipo_contratto_contoRicaviCanoniId_fkey";

-- DropForeignKey
ALTER TABLE "tipo_contratto" DROP CONSTRAINT "tipo_contratto_contoRicaviConsumiId_fkey";

-- DropForeignKey
ALTER TABLE "tipo_contratto" DROP CONSTRAINT "tipo_contratto_quietanzianteId_fkey";

-- AlterTable
ALTER TABLE "tipo_contratto" DROP COLUMN "quietanzianteId",
DROP COLUMN "contoRicaviConsumiId",
DROP COLUMN "contoRicaviCanoniId";
