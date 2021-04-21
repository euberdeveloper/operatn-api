import { ApiError } from '../ApiError';

export class UserNotAuthenticated extends ApiError {
    public static readonly code = 401;
    protected static readonly defaultMessage: string = 'User not authenticated';

    constructor(message = UserNotAuthenticated.defaultMessage) {
        super(UserNotAuthenticated.code, message);
        this.name = 'UserNotAuthenticated';
    }
}
