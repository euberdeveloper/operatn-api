/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { AxiosInstance } from 'axios';

export interface AxiosContainer {
    axiosInstance: AxiosInstance;
}

export abstract class BaseController {
    protected abstract route: string;

    constructor(protected axiosContainer: AxiosContainer) {}

    protected get axiosInstance(): AxiosInstance {
        return this.axiosContainer.axiosInstance;
    }

    private parseNonObject(value: any, prefix: string, key: string): string {
        if (value === undefined || value === null) {
            return '';
        }

        let val = value instanceof Date ? value.toISOString() : value;
        return `${prefix}${key}=${val}`;
    }

    protected parseQueryParams(params: any, parents: string[] = []): string {
        const keys = Object.keys(params);
        const prefix = parents.length ? parents.join() + '.' : '';
        return keys.reduce(
            (result, key, index) =>
                result +
                (index === 0 || params[key] === undefined || params[key] === null ? '' : '&') +
                (params[key] && typeof params[key] === 'object' && !(params[key] instanceof Date)
                    ? this.parseQueryParams(params[key], [...parents, key])
                    : this.parseNonObject(params[key], prefix, key)),
            keys.length && !parents.length ? '?' : ''
        );
    }
}
