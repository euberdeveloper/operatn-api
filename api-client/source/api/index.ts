import axios, { AxiosInstance } from 'axios';

import { AxiosContainer } from '@/utils/baseController';
import { handleError } from '@/utils/handleError';

import { AuthController } from './auth';
import { ComuniController } from './comuni';
import { ContabilitaController } from './contabilita';
import { TipiStanzaController } from './tipi-stanza';
import { TipiTariffaController } from './tipi-tariffa';
import { TipiStudenteController } from './tipi-studente';
import { TipiOspiteController } from './tipi-ospite';

const DEFAULT_ROOT_ENDPOINT = 'http://localhost:3000/api/';

export class OperaTN {

    token!: string | null;
    apiRootEndpoint!: string;
    axiosInstance!: AxiosInstance;

    readonly auth: AuthController;
    readonly comuni: ComuniController;
    readonly contabilita: ContabilitaController;
    readonly tipiStanza: TipiStanzaController;
    readonly tipiTariffa: TipiTariffaController;
    readonly tipiStudente: TipiStudenteController;
    readonly tipiOspite: TipiOspiteController;

    private axiosContainer!: AxiosContainer;

    private init(apiRootEndpoint: string, token: string | null): void {
        this.apiRootEndpoint = apiRootEndpoint;
        this.token = token;
        this.axiosInstance = axios.create({
            baseURL: apiRootEndpoint,
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        this.axiosInstance.interceptors.response.use(res => res, error => { throw handleError(error) });
    }

    constructor(apiRootEndpoint = DEFAULT_ROOT_ENDPOINT, token: string | null = null) {
        this.init(apiRootEndpoint, token);
        this.axiosContainer = { axiosInstance: this.axiosInstance };

        this.auth = new AuthController(this.axiosContainer);
        this.comuni = new ComuniController(this.axiosContainer);
        this.contabilita = new ContabilitaController(this.axiosContainer);
        this.tipiStanza = new TipiStanzaController(this.axiosContainer);
        this.tipiTariffa = new TipiTariffaController(this.axiosContainer);
        this.tipiStudente = new TipiStudenteController(this.axiosContainer);
        this.tipiOspite = new TipiOspiteController(this.axiosContainer);
    }

    setApiEndpoint(apiRootEndpoint: string): void {
        this.init(apiRootEndpoint, this.token);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }

    setToken(token: string | null): void {
        this.init(this.apiRootEndpoint, token);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }

}