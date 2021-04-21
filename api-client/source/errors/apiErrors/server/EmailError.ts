import { ApiError } from '../ApiError';

export class EmailError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessage: string = 'Email error';

    constructor(message = EmailError.defaultMessage) {
        super(EmailError.code, message);

        this.name = 'EmailError';
    }
}
