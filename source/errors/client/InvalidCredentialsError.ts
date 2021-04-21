import { UserNotAuthenticatedError } from './UserNotAuthenticatedError';

export class InvalidCredentials extends UserNotAuthenticatedError {
    protected static readonly defaultMessage: string = 'Invalid credentials';

    constructor(message = InvalidCredentials.defaultMessage) {
        super(message);
        this.name = 'InvalidCredentials';
    }
}
