import axios, { AxiosInstance } from 'axios';

import { AxiosContainer } from '@/utils/baseController';
import { handleError } from '@/utils/handleError';

import { AuthController } from './auth';
import { ComuniController } from './comuni';
import { ContabilitaController } from './contabilita';
import { ContiRicaviCanoniController } from './conti-ricavi-canoni';
import { ContiRicaviConsumiController } from './conti-ricavi-consumi';
import { DipartimentiUnitnController } from './dipartimenti-unitn';
import { OspitiController } from './ospiti';
import { PresidentiController } from './presidenti';
import { ProvinceController } from './province';
import { QuietanziantiController } from './quietanzianti';
import { StatiController } from './stati';
import { TabelloneController } from './tabellone';
import { TariffeController } from './tariffe';
import { TipiBollettaController } from './tipi-bolletta';
import { TipiContrattoController } from './tipi-contratto';
import { TipiFabbricatoController } from './tipi-fabbricato';
import { TipiOspiteController } from './tipi-ospite';
import { TipiStanzaController } from './tipi-stanza';
import { TipiStudenteController } from './tipi-studente';
import { TipiTariffaController } from './tipi-tariffa';
import { UtentiController } from './utenti';
import { UtilizziStanzaController } from './utilizzi-stanza';

const DEFAULT_ROOT_ENDPOINT = 'http://localhost:3000/api/';

export class OperaTN {
    public token!: string | null;
    public apiRootEndpoint!: string;
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

    constructor(apiRootEndpoint = DEFAULT_ROOT_ENDPOINT, token: string | null = null) {
        this.init(apiRootEndpoint, token);
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

    private init(apiRootEndpoint: string, token: string | null): void {
        this.apiRootEndpoint = apiRootEndpoint;
        this.token = token;
        this.axiosInstance = axios.create({
            baseURL: apiRootEndpoint,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        this.axiosInstance.interceptors.response.use(
            res => res,
            error => {
                throw handleError(error);
            }
        );
    }

    public setApiEndpoint(apiRootEndpoint: string): void {
        this.init(apiRootEndpoint, this.token);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }

    public setToken(token: string | null): void {
        this.init(this.apiRootEndpoint, token);
        this.axiosContainer.axiosInstance = this.axiosInstance;
    }
}
