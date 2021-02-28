import { BadRequestError } from './BadRequestError';

export class InvalidIdError extends BadRequestError {
    protected static readonly defaultMessate = 'Invalid id';

    constructor(message = InvalidIdError.defaultMessate) {
        super(message);
        this.name = 'InvalidIdError';
    }
}
