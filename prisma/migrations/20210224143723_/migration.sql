/*
  Warnings:

  - Added the required column `importo` to the `tipo_bolletta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tipo_bolletta" ADD COLUMN     "importo" DOUBLE PRECISION NOT NULL;
