import { Utente } from '@/services/prisma.service';
import { EventEmitter } from 'events';

import { emitUserCreated, loadUserCreated } from './userCreated.subscriber';
import { emitUserDeleted, loadUserDeleted } from './userDeleted.subscriber';

export class Emitter {
    private readonly emitter: EventEmitter;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public loadSubscribers(): void {
        loadUserCreated(this.emitter);
        loadUserDeleted(this.emitter);
    }

    public emitUserCreated(utente: Utente): void {
        emitUserCreated(this.emitter, utente);
        emitUserDeleted(this.emitter, utente);
    }

    public emitUserDeleted(utente: Utente): void {
        emitUserDeleted(this.emitter, utente);
    }
}
export default new Emitter();
