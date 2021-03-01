import { BadRequestError } from './BadRequestError';

export class InvalidBodyError extends BadRequestError {
    protected static readonly defaultMessate = 'Invalid body';

    constructor(message = InvalidBodyError.defaultMessate) {
        super(message);
        this.name = 'InvalidBodyError';
    }
}
