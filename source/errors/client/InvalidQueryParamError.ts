import { BadRequestError } from './BadRequestError';

export class InvalidQueryParamError extends BadRequestError {
    protected static readonly defaultMessate = 'Invalid query param';

    constructor(message = InvalidQueryParamError.defaultMessate) {
        super(message);
        this.name = 'InvalidQueryParamError';
    }
}
