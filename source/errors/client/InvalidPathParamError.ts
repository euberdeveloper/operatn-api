import { BadRequestError } from './BadRequestError';

export class InvalidPathParamError extends BadRequestError {
    protected static readonly defaultMessate = 'Invalid path param';

    constructor(message = InvalidPathParamError.defaultMessate) {
        super(message);
        this.name = 'InvalidPathParamError';
    }
}
