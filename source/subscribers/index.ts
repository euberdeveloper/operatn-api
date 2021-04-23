import { Utente } from '@/services/prisma.service';
import { EventEmitter } from 'events';

import { emitUserCreated, loadUserCreated } from './userCreated.subscriber';

export class Emitter {
    private readonly emitter: EventEmitter;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public loadSubscribers(): void {
        loadUserCreated(this.emitter);
    }

    public emitUserCreated(utente: Utente): void {
        emitUserCreated(this.emitter, utente);
    }
}
export default new Emitter();
