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

    protected parseQueryParams(params: any, parents: string[] = []): string {
        const keys = Object.keys(params);
        const prefix = parents.length ? parents.join() + '.' : '';
        return keys.reduce(
            (result, key, index) =>
                result +
                (index === 0 ? '' : '&') +
                (typeof params[key] === 'object'
                    ? this.parseQueryParams(params[key], [...parents, key])
                    : `${prefix}${key}=${params[key]}`),
            keys.length && !parents.length ? '?' : ''
        );
    }
}
