import { ApiError, ServerErrorResponse } from '../ApiError';

export class ContabilitaError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessage: string = 'Contabilita error';

    private readonly failedBollette: number[];
    private readonly passedBollette: number[];

    constructor(
        message = ContabilitaError.defaultMessage,
        failedBollette: number[] = [],
        passedBollette: number[] = []
    ) {
        super(ContabilitaError.code, message);

        this.failedBollette = failedBollette;
        this.passedBollette = passedBollette;
        this.name = 'ContabilitaError';
    }

    public getDetails() {
        return {
            failedBollette: this.failedBollette,
            passedBollette: this.passedBollette
        };
    }

    public getServerResponse(): ServerErrorResponse {
        return {
            ...super.getServerResponse(),
            details: {
                failedBollette: this.failedBollette,
                passedBollette: this.passedBollette
            }
        };
    }
}
