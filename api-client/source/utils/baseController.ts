import { AxiosInstance } from "axios";

export interface AxiosContainer {
    axiosInstance: AxiosInstance;
}

export abstract class BaseController {

     protected abstract ROUTE: string;

    constructor(protected axiosContainer: AxiosContainer) {}

    protected get axiosInstance(): AxiosInstance {
        return this.axiosContainer.axiosInstance;
    }
}