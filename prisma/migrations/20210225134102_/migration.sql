/*
  Warnings:

  - You are about to drop the column `data_invio` on the `bolletta` table. All the data in the column will be lost.
  - You are about to alter the column `cap` on the `dipartimento_unitn` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `cap` on the `domicilio` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - You are about to alter the column `cap` on the `residenza` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(5)`.
  - Made the column `comune` on table `luogo_di_nascita` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "bolletta" DROP COLUMN "data_invio",
ADD COLUMN     "data_invio_eusis" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "dipartimento_unitn" ALTER COLUMN "cap" SET DATA TYPE CHAR(5);

-- AlterTable
ALTER TABLE "domicilio" ADD COLUMN     "istat_comune" TEXT,
ALTER COLUMN "provincia" DROP NOT NULL,
ALTER COLUMN "cap" DROP NOT NULL,
ALTER COLUMN "cap" SET DATA TYPE CHAR(5);

-- AlterTable
ALTER TABLE "luogo_di_nascita" ADD COLUMN     "istat_comune" TEXT,
ALTER COLUMN "comune" SET NOT NULL;

-- AlterTable
ALTER TABLE "residenza" ADD COLUMN     "istat_comune" TEXT,
ALTER COLUMN "provincia" DROP NOT NULL,
ALTER COLUMN "cap" DROP NOT NULL,
ALTER COLUMN "cap" SET DATA TYPE CHAR(5);
