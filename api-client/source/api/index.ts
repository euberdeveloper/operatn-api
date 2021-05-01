import axios, { AxiosError, AxiosInstance } from 'axios';

import { AxiosContainer } from '@/utils/baseController';
import { handleError } from '@/utils/handleError';

import {
    AuthController,
    ComuniController,
    ContabilitaController,
    ContiRicaviCanoniController,
    ContiRicaviConsumiController,
    DipartimentiUnitnController,
    OspitiController,
    PresidentiController,
    ProvinceController,
    QuietanziantiController,
    StatiController,
    TabelloneController,
    TariffeController,
    TipiBollettaController,
    TipiContrattoController,
    TipiFabbricatoController,
    TipiOspiteController,
    TipiStanzaController,
    TipiStudenteController,
    TipiTariffaController,
    UtentiController,
    UtilizziStanzaController
} from './controllers';

export * from './controllers';

const DEFAULT_ROOT_ENDPOINT = 'http://localhost:3000/api/';

export type ErrorHandler = (error: { error: AxiosError; config: any }) => void | Promise<void>;
export class OperaTN {
    private _token!: string | null;
    private _apiRootEndpoint!: string;
    private _errorHandler!: ErrorHandler | null;
    private errorHandlerInstance!: number | null;
    public axiosInstance!: AxiosInstance;

    // TODO: contratti/bollette
    // TODO: fabbricati
    public readonly auth: AuthController;
    public readonly comuni: ComuniController;
    public readonly contabilita: ContabilitaController;
    public readonly contiRicaviCanoni: ContiRicaviCanoniController;
    public readonly contiRicaviConsumi: ContiRicaviConsumiController;
    public readonly dipartimentiUnitn: DipartimentiUnitnController;
    public readonly ospiti: OspitiController;
    public readonly presidenti: PresidentiController;
    public readonly province: ProvinceController;
    public readonly quietanzianti: QuietanziantiController;
    public readonly stati: StatiController;
    public readonly tabellone: TabelloneController;
    public readonly tariffe: TariffeController;
    public readonly tipiBolletta: TipiBollettaController;
    public readonly tipiContratto: TipiContrattoController;
    public readonly tipiFabbricato: TipiFabbricatoController;
    public readonly tipiOspite: TipiOspiteController;
    public readonly tipiStanza: TipiStanzaController;
    public readonly tipiStudente: TipiStudenteController;
    public readonly tipiTariffa: TipiTariffaController;
    public readonly utenti: UtentiController;
    public readonly utilizziStanza: UtilizziStanzaController;

    private axiosContainer!: AxiosContainer;

    constructor(
        apiRootEndpoint = DEFAULT_ROOT_ENDPOINT,
        token: string | null = null,
        errorHandler: ErrorHandler | null = null
    ) {
        this.init(apiRootEndpoint, token, errorHandler);
        this.axiosContainer = { axiosInstance: this.axiosInstance };

        this.auth = new AuthController(this.axiosContainer);
        this.comuni = new ComuniController(this.axiosContainer);
        this.contabilita = new ContabilitaController(this.axiosContainer);
        this.contiRicaviCanoni = new ContiRicaviCanoniController(this.axiosContainer);
        this.contiRicaviConsumi = new ContiRicaviConsumiController(this.axiosContainer);
        this.dipartimentiUnitn = new DipartimentiUnitnController(this.axiosContainer);
        this.ospiti = new OspitiController(this.axiosContainer);
        this.presidenti = new PresidentiController(this.axiosContainer);
        this.province = new ProvinceController(this.axiosContainer);
        this.quietanzianti = new QuietanziantiController(this.axiosContainer);
        this.stati = new StatiController(this.axiosContainer);
        this.tabellone = new TabelloneController(this.axiosContainer);
        this.tariffe = new TariffeController(this.axiosContainer);
        this.tipiBolletta = new TipiBollettaController(this.axiosContainer);
        this.tipiContratto = new TipiContrattoController(this.axiosContainer);
        this.tipiFabbricato = new TipiFabbricatoController(this.axiosContainer);
        this.tipiOspite = new TipiOspiteController(this.axiosContainer);
        this.tipiStanza = new TipiStanzaController(this.axiosContainer);
        this.tipiStudente = new TipiStudenteController(this.axiosContainer);
        this.tipiTariffa = new TipiTariffaController(this.axiosContainer);
        this.utenti = new UtentiController(this.axiosContainer);
        this.utilizziStanza = new UtilizziStanzaController(this.axiosContainer);
    }

    private init(apiRootEndpoint: string, token: string | null, errorHandler: ErrorHandler | null): void {
        this._apiRootEndpoint = apiRootEndpoint;
        this._token = token;
        this.axiosInstance = axios.create({
            baseURL: apiRootEndpoint,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        if (this.errorHandlerInstance) {
            this.axiosInstance.interceptors.response.eject(this.errorHandlerInstance);
            this.errorHandlerInstance = null;
            this._errorHandler = null;
        }

        this.axiosInstance.interceptors.response.use(
            res => res,
            error => {
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw { error: handleError(error), config: error.config };
            }
        );

        if (errorHandler) {
            this.errorHandlerInstance = this.axiosInstance.interceptors.response.use(
                res => res,
                async error => {
                    await errorHandler(error);
                }
            );
            this._errorHandler = errorHandler;
        }
    }

    get apiRootEndpoint(): string {
        return this._apiRootEndpoint;
    }
    set apiRootEndpoint(apiEndpoint: string) {
        this.init(apiEndpoint, this.token, this.errorHandler);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }

    get token(): string | null {
        return this._token;
    }
    set token(token: string | null) {
        this.init(this.apiRootEndpoint, token, this.errorHandler);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }

    get errorHandler(): ErrorHandler | null {
        return this._errorHandler;
    }
    set errorHandler(errorHandler: ErrorHandler | null) {
        this.init(this.apiRootEndpoint, this.token, errorHandler);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }
}
