/*
  Warnings:

  - You are about to drop the column `uid_ospite` on the `contratto` table. All the data in the column will be lost.
  - You are about to drop the `contratti_su_posti_letto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "contratti_su_posti_letto" DROP CONSTRAINT "contratti_su_posti_letto_id_contratto_fkey";

-- DropForeignKey
ALTER TABLE "contratti_su_posti_letto" DROP CONSTRAINT "contratti_su_posti_letto_id_posto_letto_fkey";

-- DropForeignKey
ALTER TABLE "contratto" DROP CONSTRAINT "contratto_uid_ospite_fkey";

-- AlterTable
ALTER TABLE "contratto" DROP COLUMN "uid_ospite",
ADD COLUMN     "ospiteUid" TEXT;

-- CreateTable
CREATE TABLE "contratto_su_ospite" (
    "id_contratto" INTEGER NOT NULL,
    "uid_persona" TEXT NOT NULL,

    PRIMARY KEY ("id_contratto","uid_persona")
);

-- CreateTable
CREATE TABLE "contratto_su_posto_letto" (
    "id_contratto" INTEGER NOT NULL,
    "id_posto_letto" INTEGER NOT NULL,

    PRIMARY KEY ("id_contratto","id_posto_letto")
);

-- DropTable
DROP TABLE "contratti_su_posti_letto";

-- AddForeignKey
ALTER TABLE "contratto_su_ospite" ADD FOREIGN KEY ("id_contratto") REFERENCES "contratto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto_su_ospite" ADD FOREIGN KEY ("uid_persona") REFERENCES "persona"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto_su_posto_letto" ADD FOREIGN KEY ("id_contratto") REFERENCES "contratto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto_su_posto_letto" ADD FOREIGN KEY ("id_posto_letto") REFERENCES "posto_letto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("ospiteUid") REFERENCES "ospite"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
