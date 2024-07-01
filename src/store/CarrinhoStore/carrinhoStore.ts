import { ICarrinhoStore } from "./types";

const CARRINHO_STORE = "carrinho";

export const addCarrinho = (item: ICarrinhoStore) => {

    const carrinho: ICarrinhoStore[] = carregarCarrinho();

    if(carrinho && carrinho.length) {
        const index = carrinho.findIndex((c: ICarrinhoStore) => c.id === item.id);
        if(index > -1){
            carrinho[index] = item;
        } else{
            carrinho.push(item);
        }
    } else{
        carrinho.push(item)
    }

    carrinho.push(item);

    addCarrinhoStore(carrinho);

}

export const carregarCarrinho = (): ICarrinhoStore[] => {
    const carrinho: ICarrinhoStore[] = JSON.parse(localStorage.getItem(CARRINHO_STORE) || "[]");

    return carrinho;
}

const addCarrinhoStore = (carrinho: ICarrinhoStore[]) => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho))
}

export const obterQuantidadeCarrinho = (): number => {
    const carrinho: ICarrinhoStore[] = carregarCarrinho();
    return carrinho.length;
}