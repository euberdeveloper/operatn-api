import { AxiosInstance } from "axios";

export interface AxiosContainer {
    axiosInstance: AxiosInstance;
}

export abstract class BaseController {

    protected abstract ROUTE: string;

    constructor(protected axiosContainer: AxiosContainer) { }

    protected get axiosInstance(): AxiosInstance {
        return this.axiosContainer.axiosInstance;
    }

    protected parseQueryParams(params: any, parents: string[] = []): string {
        const keys = Object.keys(params);
        const prefix = parents.length ? parents.join() + '.' : '';
        return keys
          .reduce((result, key) => result + (typeof params[key] === 'object' ? this.parseQueryParams(params[key], [...parents, key]) : `${prefix}${key}=${params[key]}`), keys.length && !parents.length ? '?' : '');
      }
}