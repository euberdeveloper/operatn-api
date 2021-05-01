import { AxiosContainer, BaseController } from '@/utils/baseController';

export interface ContabilitaQueryParams {
    startDate: Date;
    endDate: Date;
}

export class ContabilitaController extends BaseController {
    public route = '/contabilita';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    public async sendBollette(params: ContabilitaQueryParams, options: Record<string, any> = {}): Promise<void> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`, { ...options });
        return result.data;
    }
}
