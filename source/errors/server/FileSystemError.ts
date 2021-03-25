import { ApiError } from '../ApiError';

export class FileSystemError extends ApiError {
    public static readonly code = 500;
    private static readonly defaultMessate = 'File system error';

    constructor(message = FileSystemError.defaultMessate) {
        super(FileSystemError.code, message);

        this.name = 'FileSystemError';
    }
}
