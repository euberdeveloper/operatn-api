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

    public emitUserCreated(data: any): void {
        emitUserCreated(this.emitter, data);
    }
}
export default new Emitter();
