import { Tabellone } from "@server/services/tabellone.service";
import { AxiosContainer, BaseController } from "@/utils/baseController";

export interface TabelloneQueryParams {
    startDate: Date;
    endDate: Date;
}

export class TabelloneController extends BaseController {

    public ROUTE = '/tabellone';

    async get(params: TabelloneQueryParams): Promise<Tabellone[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}${queryParams}`);
        return result.data;
    }

    async getTsv(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/tsv${queryParams}`);
        return result.data;
    }

    async getXlsx(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.ROUTE}/xlsx${queryParams}`);
        return result.data;
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

}