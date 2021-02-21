-- AlterTable
ALTER TABLE "dipartimento_unitn" ADD COLUMN     "creato_il" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "eliminato" TIMESTAMP(3);
