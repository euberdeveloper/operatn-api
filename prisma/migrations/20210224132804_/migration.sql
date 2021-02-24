-- DropForeignKey
ALTER TABLE "domicilio" DROP CONSTRAINT "domicilio_id_fkey";

-- AddForeignKey
ALTER TABLE "domicilio" ADD FOREIGN KEY ("id_persona") REFERENCES "persona"("id") ON DELETE CASCADE ON UPDATE CASCADE;
