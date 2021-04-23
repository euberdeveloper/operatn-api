import { EventEmitter } from 'events';

const EVENT_NAME = 'USER_CREATED';

export function loadUserCreated(emitter: EventEmitter): void {
    emitter.on(EVENT_NAME, async (data: any) => {
        console.log('Ciao', data);
    });
}

export function emitUserCreated(emitter: EventEmitter, data: any): void {
    emitter.emit(EVENT_NAME, data);
}
