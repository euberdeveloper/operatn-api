import { ApiError } from '../ApiError';

export class ContabilitaError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessage: string = 'Contabilita error';

    private readonly failedBollette: number[];

    constructor(message = ContabilitaError.defaultMessage, failedBollette: number[] = []) {
        super(ContabilitaError.code, message);

        this.failedBollette = failedBollette;
        this.name = 'ContabilitaError';
    }
}
