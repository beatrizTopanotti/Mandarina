import { IClienteStore } from "./types";

const CLIENTE_STORE = "cliente";

export const obterCliente = (): IClienteStore => {
    const cliente: IClienteStore = JSON.parse(localStorage.getItem(CLIENTE_STORE) ||  "{}");

    return cliente;
}

export const addClienteStore = (cliente: IClienteStore) => {
    
}