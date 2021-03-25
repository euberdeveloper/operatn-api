import { v4 as uuid } from 'uuid';
import * as path from 'path';

import { FileSystemError } from '@/errors';
import { writeFile, mkdir } from '@/utils/fsAsync';
import logger from '@/utils/logger';
import CONFIG from '@/config';

export class FileSystemService {
    public async storeTemp(data: string, extension: string, filename?: string): Promise<string> {
        const file = filename ? `${filename}.${extension}` : `${uuid()}.${extension}`;
        const dirPath = CONFIG.TEMP.PATH;
        const filePath = path.resolve(dirPath, file);

        try {
            await mkdir(dirPath, { recursive: true });
            await writeFile(filePath, data);
        } catch (error) {
            logger.error('File system error', error);
            throw new FileSystemError();
        }

        return filePath;
    }

    public async storeStored(data: string, subpath: string, extension: string, filename?: string): Promise<string> {
        const file = filename ? `${filename}.${extension}` : `${uuid()}.${extension}`;
        const dirPath = path.join(CONFIG.STORED.PATH, subpath);
        const filePath = path.resolve(dirPath, file);

        try {
            await mkdir(dirPath, { recursive: true });
            await writeFile(filePath, data);
        } catch (error) {
            logger.error('File system error', error);
            throw new FileSystemError();
        }

        return filePath;
    }
}

export default new FileSystemService();
