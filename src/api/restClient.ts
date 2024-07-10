import axios, { Axios } from "axios";

const api = new Axios({baseURL: process.env.REACT_APP_API_BASE_URL });
// deployed host: https://mandarinaapi.onrender.com
// local: http://localhost:8080

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

    try {
        const response: AxiosResponse = await api.get(url);

        console.log(response);
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

export const apiPost = async (url: string, data: any) : Promise<IDataResponse> => {

    try {
        const response: AxiosResponse = await api.post(url, JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(response === undefined) {
            return {
                status: STATUS_CODE.INTERNAL_SERVER_ERROR,
                message: "Erro não mapeado",
            }
        }

        if(response.status === STATUS_CODE.NO_CONTENT) {
            return {
                status: response.status,
                message: "Nenhum conteúdo foi retornado"
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
            message: "Erro não mapeado"
        }
    }

}
