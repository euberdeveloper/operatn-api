import { ApiError } from '../ApiError';

export class InternalServerError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessate = 'Internal server error';

    constructor(message = InternalServerError.defaultMessate) {
        super(InternalServerError.code, message);

        this.name = 'InternalServerError';
    }
}
