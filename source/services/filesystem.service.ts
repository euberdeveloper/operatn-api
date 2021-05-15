import { v4 as uuid } from 'uuid';
import { Workbook } from 'exceljs';
import * as path from 'path';
import * as dree from 'dree';

import { FileSystemError } from '@/errors';
import { writeFile, mkdir } from '@/utils/fsAsync';
import logger from '@/utils/logger';
import CONFIG from '@/config';

export interface FilesInfo {
    path: string;
    size: string;
    extension: string;
}

export interface DirsInfo {
    path: string;
    size: string;
}

export class FileSystemService {
    private async save(basepath: string, data: string, fileName: string, subpath = ''): Promise<string> {
        const dirPath = path.join(basepath, subpath);
        const filePath = path.resolve(dirPath, fileName);

        try {
            await mkdir(dirPath, { recursive: true });
            await writeFile(filePath, data);
        } catch (error) {
            logger.warning('File system error', error);
            throw new FileSystemError();
        }

        return filePath;
    }

    private async saveRandomName(basepath: string, data: string, extension: string, subpath = ''): Promise<string> {
        const file = `${uuid()}.${extension}`;
        const dirPath = path.join(basepath, subpath);
        const filePath = path.resolve(dirPath, file);

        try {
            await mkdir(dirPath, { recursive: true });
            await writeFile(filePath, data);
        } catch (error) {
            logger.warning('File system error', error);
            throw new FileSystemError();
        }

        return filePath;
    }

    private async saveXls(basepath: string, workbook: Workbook, fileName: string, subpath = ''): Promise<string> {
        const dirPath = path.join(basepath, subpath);
        const filePath = path.resolve(dirPath, fileName);

        try {
            await mkdir(dirPath, { recursive: true });
            await workbook.xlsx.writeFile(filePath);
        } catch (error) {
            logger.warning('File system error', error);
            throw new FileSystemError();
        }

        return filePath;
    }

    public async saveTempRandomName(data: string, extension: string, subpath = ''): Promise<string> {
        return this.saveRandomName(CONFIG.TEMP.PATH, data, extension, subpath);
    }

    public async saveStoredRandomName(data: string, extension: string, subpath = ''): Promise<string> {
        return this.saveRandomName(CONFIG.STORED.PATH, data, extension, subpath);
    }

    public async saveTemp(data: string, fileName: string, subpath = ''): Promise<string> {
        return this.save(CONFIG.TEMP.PATH, data, fileName, subpath);
    }

    public async saveStored(data: string, fileName: string, subpath = ''): Promise<string> {
        return this.save(CONFIG.STORED.PATH, data, fileName, subpath);
    }

    public async saveTempXls(workbook: Workbook, fileName?: string, subpath = ''): Promise<string> {
        fileName = fileName ?? `${uuid()}.xlsx`;
        return this.saveXls(CONFIG.TEMP.PATH, workbook, fileName, subpath);
    }

    public async saveStoredXls(workbook: Workbook, fileName?: string, subpath = ''): Promise<string> {
        fileName = fileName ?? `${uuid()}.xlsx`;
        return this.saveXls(CONFIG.STORED.PATH, workbook, fileName, subpath);
    }

    public async filesOfStoredDir(dirpath: string): Promise<FilesInfo[]> {
        try {
            const p = path.join(CONFIG.STORED.PATH, dirpath);
            const filesInfo = (await dree.scanAsync(p, {
                depth: 1,
                sizeInBytes: true,
                hash: false
            })) as dree.Dree | null;
            return filesInfo?.children
                ? filesInfo.children
                      .filter(node => node.type === dree.Type.FILE)
                      .map(node => ({
                          path: node.relativePath,
                          size: node.size as string,
                          extension: node.extension as string
                      }))
                : [];
        } catch (error) {
            logger.warning('File system error', error);
            throw new FileSystemError();
        }
    }

    public async dirsOfStoredDir(dirpath: string): Promise<DirsInfo[]> {
        try {
            const p = path.join(CONFIG.STORED.PATH, dirpath);
            const dirsInfo = (await dree.scanAsync(p, {
                depth: 1,
                sizeInBytes: true,
                hash: false
            })) as dree.Dree | null;
            return dirsInfo?.children
                ? dirsInfo.children
                      .filter(node => node.type === dree.Type.DIRECTORY)
                      .map(node => ({
                          path: node.relativePath,
                          size: node.size as string
                      }))
                : [];
        } catch (error) {
            logger.warning('File system error', error);
            throw new FileSystemError();
        }
    }
}

export default new FileSystemService();
