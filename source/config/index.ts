/* eslint-disable @typescript-eslint/naming-convention */
import * as dotenv from 'dotenv';
import * as path from 'path';

declare const process: {
    env: Record<string, string>;
    cwd: () => string;
};

dotenv.config({
    path: path.join(process.cwd(), '.env')
});

const CONFIG = {
    SERVER: {
        PORT: 3000
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
    SECURITY: {
        SALT_ROUNDS: +process.env.SECURITY_SALT_ROUNDS
    },
    LOGGER: {
        DEBUG: process.env.LOGGER_DEBUG === 'true'
    }
};

export default CONFIG;
