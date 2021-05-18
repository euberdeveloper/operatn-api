import {
    Bolletta,
    ContoRicavi,
    Contratto,
    ContrattoSuOspite,
    ContrattoSuOspiteSuPostoLetto,
    Fabbricato,
    LuogoDiNascita,
    Ospite,
    Persona,
    PostoLetto,
    Quietanziante,
    Residenza,
    Stanza,
    Tariffa,
    TipoBolletta,
    TipoContratto,
    TipoFabbricato,
    TipoOspite,
    TipoStanza,
    TipoStudente,
    TipoTariffa
} from '@/db-types';
import { AxiosContainer, BaseController } from '@/utils/baseController';

export type ContrattiCreateBody = Pick<
    Omit<Contratto, 'id'>,
    | 'dataInizio'
    | 'dataFine'
    | 'idQuietanziante'
    | 'idTariffa'
    | 'idTipoContratto'
    | 'tipoRata'
    | 'cauzione'
    | 'checkout'
    | 'note'
> & { id?: number } & {
    ospiti: {
        idOspite: number;
        postiLetto: number[];
    }[];
};
export type ContrattiReplaceBody = Omit<ContrattiCreateBody, 'id'>;
export interface ContrattiChiusuraAnticipataBody {
    dataChiusura: Date;
}

export type ContrattiReturned = Contratto & {
    quietanziante?: Quietanziante;
    tariffa?: Tariffa & {
        tipoTariffa?: TipoTariffa;
        utilizzoStanza?: TipoStanza;
        tipoOspite?: TipoOspite & {
            contoRicaviConsumi?: ContoRicavi;
            contoRicaviCanoni?: ContoRicavi;
        };
        tipoFabbricato?: TipoFabbricato;
    };
    tipoContratto?: TipoContratto & {
        tipoStudente?: TipoStudente;
    };
    contrattiSuOspite?: (ContrattoSuOspite & {
        ospite?: Ospite & {
            persona?: Persona & {
                luogoDiNascita?: LuogoDiNascita;
                residenza?: Residenza;
            };
        };
        contrattiSuOspiteSuPostoLetto?: (ContrattoSuOspiteSuPostoLetto & {
            postoLetto?: PostoLetto & {
                stanza?: Stanza & {
                    fabbricato?: Fabbricato;
                };
            };
        })[];
    })[];
    bollette?: (Bolletta & {
        tipoBolletta?: TipoBolletta;
    })[];
};
export interface ContrattiIncludeParams {
    quietanziante?: boolean;
    tariffa?:
        | {
              tipoTariffa?: boolean;
              utilizzoStanza?: boolean;
              tipoOspite?:
                  | {
                        contoRicaviConsumi?: boolean;
                        contoRicaviCanoni?: boolean;
                    }
                  | boolean;
              tipoFabbricato?: boolean;
          }
        | boolean;
    tipoContratto?:
        | {
              tipoStudente?: boolean;
          }
        | boolean;
    contrattiSuOspite?:
        | {
              ospite?:
                  | {
                        persona?:
                            | {
                                  residenza?: boolean;
                                  luogoDiNascita?: boolean;
                              }
                            | boolean;
                    }
                  | boolean;
              contrattiSuOspiteSuPostoLetto?:
                  | {
                        postoLetto?:
                            | {
                                  stanza?:
                                      | {
                                            fabbricato?: boolean;
                                        }
                                      | boolean;
                              }
                            | boolean;
                    }
                  | boolean;
          }
        | boolean;
    bollette?:
        | {
              tipoBolletta?: boolean;
          }
        | boolean;
}
export interface ContrattiFilterParams {
    dataInizio?: Date;
    dataFine?: Date;
    idOspite?: number;
}

export class ContrattiController extends BaseController {
    public route = '/contratti';

    constructor(axiosContainer: AxiosContainer) {
        super(axiosContainer);
    }

    private purgeValue(value: ContrattiReturned): ContrattiReturned {
        value.dataInizio = new Date(value.dataInizio);
        value.dataFine = new Date(value.dataFine);
        value.dataFirmaContratto = value.dataFirmaContratto ? new Date(value.dataFirmaContratto) : null;
        value.dataChiusuraAnticipata = value.dataChiusuraAnticipata ? new Date(value.dataChiusuraAnticipata) : null;
        value.dataInvioEmail = value.dataInvioEmail ? new Date(value.dataInvioEmail) : null;
        value.dataRispostaEmail = value.dataRispostaEmail ? new Date(value.dataRispostaEmail) : null;
        value.dataInserimento = new Date(value.dataInserimento);
        return value;
    }

    public async getAll(
        params: ContrattiIncludeParams & ContrattiFilterParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}${queryParams}`, { ...options });
        return result.data.map((o: ContrattiReturned) => this.purgeValue(o));
    }

    public async getDaFirmare(
        params: ContrattiIncludeParams & ContrattiFilterParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/da-firmare${queryParams}`, { ...options });
        return result.data.map((o: ContrattiReturned) => this.purgeValue(o));
    }

    public async getDaVisionare(
        params: ContrattiIncludeParams & ContrattiFilterParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/da-visionare${queryParams}`, { ...options });
        return result.data.map((o: ContrattiReturned) => this.purgeValue(o));
    }

    public async getFirmati(
        params: ContrattiIncludeParams & ContrattiFilterParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned[]> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/firmati${queryParams}`, { ...options });
        return result.data.map((o: ContrattiReturned) => this.purgeValue(o));
    }

    public async get(
        id: number,
        params: ContrattiIncludeParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/${id}${queryParams}`, { ...options });
        return this.purgeValue(result.data);
    }

    public async getByToken(
        token: string,
        params: ContrattiIncludeParams = {},
        options: Record<string, any> = {}
    ): Promise<ContrattiReturned> {
        const queryParams = this.parseQueryParams(params);
        const result = await this.axiosInstance.get(`${this.route}/token/${token}${queryParams}`, { ...options });
        return this.purgeValue(result.data);
    }

    public async create(body: ContrattiCreateBody, options: Record<string, any> = {}): Promise<number> {
        const result = await this.axiosInstance.post(`${this.route}`, body, { ...options });
        return result.data;
    }

    public async replace(id: number, body: ContrattiReplaceBody, options: Record<string, any> = {}): Promise<void> {
        await this.axiosInstance.put(`${this.route}/${id}`, body, { ...options });
    }

    public async closeAnticipated(
        id: number,
        body: ContrattiChiusuraAnticipataBody,
        options: Record<string, any> = {}
    ): Promise<void> {
        await this.axiosInstance.post(`${this.route}/${id}/chiusura-anticipata`, body, { ...options });
    }

    public async uploadFirma(id: number, formData: FormData, options: Record<string, any> = {}): Promise<void> {
        await this.axiosInstance.post(`${this.route}/${id}/firma`, formData, { ...options });
    }

    public async sendEmailFirma(id: number, options: Record<string, any> = {}): Promise<void> {
        await this.axiosInstance.post(`${this.route}/${id}/email-firma`, null, { ...options });
    }

    public async uploadFirmaFromEmail(
        token: string,
        formData: FormData,
        options: Record<string, any> = {}
    ): Promise<void> {
        await this.axiosInstance.post(`${this.route}/token/${token}/email-firma`, formData, { ...options });
    }

    public async answerFirmaFromEmail(
        id: number,
        body: { accettato: boolean },
        options: Record<string, any> = {}
    ): Promise<void> {
        await this.axiosInstance.post(`${this.route}/${id}/email-firma/risposta`, body, { ...options });
    }

    public async delete(id: number, options: Record<string, any> = {}): Promise<void> {
        return this.axiosInstance.delete(`${this.route}/${id}`, { ...options });
    }
}
