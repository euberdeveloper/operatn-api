import { AxiosContainer, BaseController } from '@/utils/baseController';

export interface ContabilitaQueryParams {
    startDate: Date;
    endDate: Date;
}

export class ContabilitaController extends BaseController {
    public route = '/contabilita';

    async sendBollette(params: ContabilitaQueryParams): Promise<void> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`);
        return result.data;
    }

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }
}
