import { UserNotAuthenticated } from './UserNotAuthenticatedError';

export class InvalidCredentials extends UserNotAuthenticated {
    protected static readonly defaultMessage: string = 'Invalid credentials';

    constructor(message = InvalidCredentials.defaultMessage) {
        super(message);
        this.name = 'InvalidCredentials';
    }
}
