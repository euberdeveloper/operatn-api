-- AlterTable
ALTER TABLE "posto_letto" ALTER COLUMN "posto_letto" DROP DEFAULT,
ALTER COLUMN "posto_letto" SET DATA TYPE TEXT;
DROP SEQUENCE "posto_letto_posto_letto_seq";
