/*
  Warnings:

  - The migration will change the primary key for the `domicilio` table. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "domicilio" DROP CONSTRAINT "domicilio_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id", "uid");
