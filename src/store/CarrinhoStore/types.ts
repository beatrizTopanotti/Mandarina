import { IProduto } from "../../pages/Home/types";

export interface ICarrinhoStore extends IProduto {
    quantidade: number,
}