import { Utente } from '@/services/prisma.service';
import { EventEmitter } from 'events';

import { emitUserCreated, loadUserCreated } from './userCreated.subscriber';
import { emitUserDeleted, loadUserDeleted } from './userDeleted.subscriber';
import { emitContabilitaXml, loadContabilitaXml } from './contabilitaXml.subscriber';
import { BollettaInfo, emitContabilitaXlsx, loadContabilitaXlsx } from './contabilitaXlsx.subscriber';

export class Emitter {
    private readonly emitter: EventEmitter;

    constructor() {
        this.emitter = new EventEmitter();
    }

    public loadSubscribers(): void {
        loadUserCreated(this.emitter);
        loadUserDeleted(this.emitter);
        loadContabilitaXml(this.emitter);
        loadContabilitaXlsx(this.emitter);
    }

    public emitUserCreated(utente: Utente): void {
        emitUserCreated(this.emitter, utente);
    }

    public emitUserDeleted(utente: Utente): void {
        emitUserDeleted(this.emitter, utente);
    }

    public emitContabilitaXml(failedXml: string[], passedXml: string[], dirname: string): void {
        emitContabilitaXml(this.emitter, failedXml, passedXml, dirname);
    }

    public emitContabilitaXlsx(bollette: BollettaInfo[], passedBollette: Set<number>, dirname: string): void {
        emitContabilitaXlsx(this.emitter, bollette, passedBollette, dirname);
    }
}
export default new Emitter();
