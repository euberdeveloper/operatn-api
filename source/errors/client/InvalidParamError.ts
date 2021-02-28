import { BadRequestError } from './BadRequestError';

export class InvalidParamError extends BadRequestError {
    protected static readonly defaultMessate = 'Invalid param';

    constructor(message = InvalidParamError.defaultMessate) {
        super(message);
        this.name = 'InvalidParamError';
    }
}
