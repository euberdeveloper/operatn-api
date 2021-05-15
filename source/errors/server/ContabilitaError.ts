import { ApiError, ServerErrorResponse } from '../ApiError';

export class ContabilitaError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessage: string = 'Contabilita error';

    public readonly failedBollette: number[];
    public readonly passedBollette: number[];

    constructor(
        message = ContabilitaError.defaultMessage,
        details = { failedBollette: [] as number[], passedBollette: [] as number[] }
    ) {
        super(ContabilitaError.code, message);

        this.failedBollette = details.failedBollette;
        this.passedBollette = details.passedBollette;
        this.name = 'ContabilitaError';
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
