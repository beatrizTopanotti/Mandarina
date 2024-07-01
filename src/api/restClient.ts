import axios, { Axios } from "axios";

const api = new Axios({baseURL: "http://localhost:8080/"});

export interface IDataResponse {
    status: number;
    data?: any;
    message: string;
}

export interface AxiosResponse {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    request?: any;
//parâmetros 
}

export enum STATUS_CODE {
    OK = 200,
    CREATED = 201,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
}

export const apiGet = async (url: string) : Promise<IDataResponse> => {


    // essa validaçõa é feita mais para erros de conexão
    // se for um erro de lógica vai cair no trycatch do back-end
    try {
        const response: AxiosResponse = await api.get(url);
    // await é uma função feita para esperar a função retornar para assim passar para o próximo
    // evita consumo de memória 

        if(response === undefined) {
            return {
                status: STATUS_CODE.INTERNAL_SERVER_ERROR,
                message: "Erro, não mapeado",
            }
        }

        if(response.status === STATUS_CODE.NO_CONTENT) {
            return {
                status: response.status,
                message: "Nenhum conteúdo foi retornado",
            }
        }

        return {
            status: response.status,
            message: "OK",
            data: JSON.parse(response.data),
        }

    } catch (e) {
        return {
            status: STATUS_CODE.INTERNAL_SERVER_ERROR,
            message: "retorno",
        }
    }

}
