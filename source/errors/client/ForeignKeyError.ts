import { BadRequestError } from './BadRequestError';

export class ForeignKeyError extends BadRequestError {
    protected static readonly defaultMessate = 'Foreign key constraint failed';

    constructor(message = ForeignKeyError.defaultMessate) {
        super(message);
        this.name = 'ForeignKeyError';
    }
}
