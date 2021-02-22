/*
  Warnings:

  - You are about to drop the column `telefono` on the `ospite` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ospite" DROP COLUMN "telefono",
ADD COLUMN     "telefono_principale" TEXT,
ADD COLUMN     "telefono_secondario" TEXT;
