/*
  Warnings:

  - You are about to drop the column `uid_ospite` on the `bolletta` table. All the data in the column will be lost.
  - The migration will change the primary key for the `conto_corrente` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `conto_corrente` table. All the data in the column will be lost.
  - You are about to drop the column `ospiteUid` on the `contratto` table. All the data in the column will be lost.
  - The migration will change the primary key for the `contratto_su_ospite` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid_persona` on the `contratto_su_ospite` table. All the data in the column will be lost.
  - The migration will change the primary key for the `documento_identita` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `documento_identita` table. All the data in the column will be lost.
  - The migration will change the primary key for the `domicilio` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `domicilio` table. All the data in the column will be lost.
  - The migration will change the primary key for the `luogo_di_nascita` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `luogo_di_nascita` table. All the data in the column will be lost.
  - The migration will change the primary key for the `ospite` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `ospite` table. All the data in the column will be lost.
  - The migration will change the primary key for the `persona` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `persona` table. All the data in the column will be lost.
  - The migration will change the primary key for the `presidente` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `presidente` table. All the data in the column will be lost.
  - The migration will change the primary key for the `residenza` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uid` on the `residenza` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[id_persona]` on the table `domicilio`. If there are existing duplicate values, the migration will fail.
  - Added the required column `id_ospite` to the `bolletta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `conto_corrente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_persona` to the `contratto_su_ospite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `documento_identita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_persona` to the `domicilio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `luogo_di_nascita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `ospite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `presidente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `residenza` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bolletta" DROP CONSTRAINT "bolletta_uid_ospite_fkey";

-- DropForeignKey
ALTER TABLE "conto_corrente" DROP CONSTRAINT "conto_corrente_uid_fkey";

-- DropForeignKey
ALTER TABLE "contratto" DROP CONSTRAINT "contratto_ospiteUid_fkey";

-- DropForeignKey
ALTER TABLE "contratto_su_ospite" DROP CONSTRAINT "contratto_su_ospite_uid_persona_fkey";

-- DropForeignKey
ALTER TABLE "documento_identita" DROP CONSTRAINT "documento_identita_uid_fkey";

-- DropForeignKey
ALTER TABLE "domicilio" DROP CONSTRAINT "domicilio_uid_fkey";

-- DropForeignKey
ALTER TABLE "luogo_di_nascita" DROP CONSTRAINT "luogo_di_nascita_uid_fkey";

-- DropForeignKey
ALTER TABLE "ospite" DROP CONSTRAINT "ospite_uid_fkey";

-- DropForeignKey
ALTER TABLE "presidente" DROP CONSTRAINT "presidente_uid_fkey";

-- DropForeignKey
ALTER TABLE "residenza" DROP CONSTRAINT "residenza_uid_fkey";

-- AlterTable
ALTER TABLE "bolletta" DROP COLUMN "uid_ospite",
ADD COLUMN     "id_ospite" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "conto_corrente" DROP CONSTRAINT "conto_corrente_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "contratto" DROP COLUMN "ospiteUid",
ADD COLUMN     "ospiteId" INTEGER;

-- AlterTable
ALTER TABLE "contratto_su_ospite" DROP CONSTRAINT "contratto_su_ospite_pkey",
DROP COLUMN "uid_persona",
ADD COLUMN     "id_persona" INTEGER NOT NULL,
ADD PRIMARY KEY ("id_contratto", "id_persona");

-- AlterTable
ALTER TABLE "documento_identita" DROP CONSTRAINT "documento_identita_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "documento" DROP NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "domicilio" DROP CONSTRAINT "domicilio_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id_persona" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "luogo_di_nascita" DROP CONSTRAINT "luogo_di_nascita_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ospite" DROP CONSTRAINT "ospite_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "persona" DROP CONSTRAINT "persona_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "presidente" DROP CONSTRAINT "presidente_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "residenza" DROP CONSTRAINT "residenza_pkey",
DROP COLUMN "uid",
ADD COLUMN     "id" INTEGER NOT NULL,
ADD PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "domicilio.id_persona_unique" ON "domicilio"("id_persona");

-- AddForeignKey
ALTER TABLE "bolletta" ADD FOREIGN KEY ("id_ospite") REFERENCES "ospite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conto_corrente" ADD FOREIGN KEY ("id") REFERENCES "ospite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto" ADD FOREIGN KEY ("ospiteId") REFERENCES "ospite"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contratto_su_ospite" ADD FOREIGN KEY ("id_persona") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documento_identita" ADD FOREIGN KEY ("id") REFERENCES "ospite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "domicilio" ADD FOREIGN KEY ("id") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "luogo_di_nascita" ADD FOREIGN KEY ("id") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ospite" ADD FOREIGN KEY ("id") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presidente" ADD FOREIGN KEY ("id") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "residenza" ADD FOREIGN KEY ("id") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;
