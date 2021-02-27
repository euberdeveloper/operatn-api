import { PrismaClient, Utente } from '@prisma/client';
const prisma = new PrismaClient();

export async function findByUid(uid: string): Promise<Utente | null> {
    return prisma.utente.findUnique({ where: { uid } });
}
export async function findByNomeUtente(nomeUtente: string): Promise<Utente | null> {
    return prisma.utente.findUnique({ where: { nomeUtente: nomeUtente } });
}
