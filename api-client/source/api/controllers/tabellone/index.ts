import { Tabellone } from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export interface TabelloneQueryParams {
    startDate: Date;
    endDate: Date;
}

export class TabelloneController extends BaseController {
    public route = '/tabellone';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async get(params: TabelloneQueryParams): Promise<Tabellone[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    public async getTsv(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/tsv${queryParams}`);
        return result.data;
    }

    public async getXlsx(params: TabelloneQueryParams): Promise<any> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/xlsx${queryParams}`);
        return result.data;
    }
}
