/* eslint-disable @typescript-eslint/naming-convention */
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

declare const process: {
    env: Record<string, string>;
    cwd: () => string;
};

dotenv.config({
    path: path.join(process.cwd(), '.env')
});

function getPath(address: string): string {
    return path.join(process.cwd(), address);
}

function fileContent(path: string): string {
    return fs.existsSync(path) ? fs.readFileSync(path, 'utf-8') : '';
}

const CONFIG = {
    SERVER: {
        PORT: process.env.SERVER_PORT || 3000,
        URL: process.env.SERVER_URL
    },
    FRONTEND: {
        URL: process.env.FRONTEND_URL
    },
    DATABASE: {
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_USER: process.env.DATABASE_USER,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_DB: process.env.DATABASE_DB,
        DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
        URL: `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}?schema=${process.env.DATABASE_SCHEMA}`
    },
    REDIS: {
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT
    },
    SECURITY: {
        SALT_ROUNDS: +process.env.SECURITY_SALT_ROUNDS,
        JWT: {
            ALGORITHM: process.env.SECURITY_JWT_ALGORITHM,
            PRIVATE_PASSWORD_PATH: getPath(process.env.SECURITY_JWT_PRIVATE_PASSWORD_PATH),
            PUBLIC_PASSWORD_PATH: getPath(process.env.SECURITY_JWT_PUBLIC_PASSWORD_PATH),
            PRIVATE_PASSWORD: fileContent(getPath(process.env.SECURITY_JWT_PRIVATE_PASSWORD_PATH)),
            PUBLIC_PASSWORD: fileContent(getPath(process.env.SECURITY_JWT_PUBLIC_PASSWORD_PATH)),
            EXPIRATION: process.env.SECURITY_JWT_EXPIRATION,
            ISSUER: process.env.SECURITY_JWT_ISSUER
        }
    },
    LOGGER: {
        DEBUG: process.env.LOGGER_DEBUG === 'true'
    },
    JOBS: {
        TABELLONE_CRON: process.env.JOBS_TABELLONE_CRON
    },
    TEMP: {
        PATH: process.env.TEMP_PATH
    },
    STORED: {
        PATH: process.env.STORED_PATH
    },
    EMAIL: {
        TYPE: process.env.EMAIL_TYPE,
        USER: process.env.EMAIL_USER,
        CLIENT_ID: process.env.EMAIL_CLIENT_ID,
        CLIENT_SECRET: process.env.EMAIL_CLIENT_SECRET,
        REFRESH_TOKEN: process.env.EMAIL_REFRESH_TOKEN,
        ACCESS_TOKEN: process.env.EMAIL_ACCESS_TOKEN,
        EXPIRES: process.env.EMAIL_EXPIRES,
        TEMPLATES_PATH: getPath(process.env.EMAIL_TEMPLATES_PATH)
    },
    CONTABILITA: {
        API_URL: process.env.CONTABILITA_API_URL
    }
};

export default CONFIG;
