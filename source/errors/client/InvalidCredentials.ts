import { UserNotAuthenticated } from './UserNotAuthenticated';

export class InvalidCredentials extends UserNotAuthenticated {
    protected static readonly defaultMessate = 'Invalid credentials';

    constructor(message = InvalidCredentials.defaultMessate) {
        super(message);
        this.name = 'InvalidCredentials';
    }
}
