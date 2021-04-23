import { Utente } from '@/services/prisma.service';
import { EventEmitter } from 'events';
import emailService from '@/services/email.service';
import logger from '@/utils/logger';

const EVENT_NAME = 'USER_DELETED';

export function loadUserDeleted(emitter: EventEmitter): void {
    emitter.on(EVENT_NAME, async (utente: Pick<Utente, 'nomeUtente' | 'email' | 'ruolo'>) => {
        logger.info(`Executing subscriber ${EVENT_NAME} for user ${utente.nomeUtente}`);
        try {
            await emailService.utenteDeleted(utente.email, utente);
        } catch (error) {
            logger.error(`Error in ${EVENT_NAME} event`, error);
        }
    });
}

export function emitUserDeleted(emitter: EventEmitter, utente: Pick<Utente, 'nomeUtente' | 'email' | 'ruolo'>): void {
    emitter.emit(EVENT_NAME, utente);
}
