import { EventEmitter } from 'events';
import filesystemService from '@/services/filesystem.service';
import logger from '@/utils/logger';

const EVENT_NAME = 'CONTABILITA_XML';

export function loadContabilitaXml(emitter: EventEmitter): void {
    emitter.on(EVENT_NAME, async (failedXml: string[], passedXml: string[], dirname: string) => {
        logger.info(`Executing subscriber ${EVENT_NAME}`);
        try {
            const divider = '\n<!-- DIVIDER -->\n';
            const failedText = failedXml.join(divider);
            const passedText = passedXml.join(divider);
            const xml = ['<!-- FAILED -->', failedText, '<!-- PASSED -->', passedText].join('\n');
            await filesystemService.saveStored(xml, `${dirname}.xml`, `contabilita/${dirname}`);
        } catch (error) {
            logger.error(`Error in ${EVENT_NAME} event`, error);
        }
    });
}

export function emitContabilitaXml(
    emitter: EventEmitter,
    failedXml: string[],
    passedXml: string[],
    dirname: string
): void {
    emitter.emit(EVENT_NAME, failedXml, passedXml, dirname);
}
