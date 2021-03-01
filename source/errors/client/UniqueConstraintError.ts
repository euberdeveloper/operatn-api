import { BadRequestError } from './BadRequestError';

export class UniqueConstraintError extends BadRequestError {
    protected static readonly defaultMessate = 'Unique constraint failed';

    constructor(message = UniqueConstraintError.defaultMessate) {
        super(message);
        this.name = 'UniqueConstraintError';
    }
}
