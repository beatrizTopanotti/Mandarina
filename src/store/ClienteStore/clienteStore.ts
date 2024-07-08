import { IClienteStore } from "./types";

const CLIENTE_STORE = "cliente";

export const obterCliente = (): IClienteStore => {
    const cliente: IClienteStore = JSON.parse(localStorage.getItem(CLIENTE_STORE) ||  "{}");

    return cliente;
}

export const addClienteStore = (cliente: IClienteStore) => {
    localStorage.setItem(CLIENTE_STORE, JSON.stringify(cliente))
}

export const getClienteStore = (): IClienteStore | null => {
    const cliente = localStorage.getItem(CLIENTE_STORE);
    if (cliente) {
        return JSON.parse(cliente) as IClienteStore;
    }
    return null;
}
