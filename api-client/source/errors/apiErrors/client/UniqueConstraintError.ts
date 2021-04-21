import { BadRequestError } from './BadRequestError';

export class UniqueConstraintError extends BadRequestError {
    protected static readonly defaultMessage: string = 'Unique constraint failed';

    constructor(message = UniqueConstraintError.defaultMessage) {
        super(message);
        this.name = 'UniqueConstraintError';
    }
}
