import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProdutoDetalhes } from "./types";
import BotaoPadrao from "../../components/BotaoPadrao";
import InputQuantidade from "../../components/InputQuantidade";
import { ICarrinhoStore } from "../../store/CarrinhoStore/types";
import { addCarrinho, carregarCarrinho } from "../../store/CarrinhoStore/carrinhoStore";
import { STATUS_CODE, apiGet } from "../../api/restClient";

const ProdutosDetalhes: FC = () => {

    const { codigoProduto } = useParams();
    const [produto, setProdutos] = useState<IProdutoDetalhes>();
    const [quantidadeProduto, setQuantidadeProduto] = useState<number>();
    const [openModal, setOpenModal] = useState<boolean>();
    const carrinho: ICarrinhoStore[] = carregarCarrinho();

    useEffect(() => {
        console.log("código produto >>> ", codigoProduto);
        apiGet(`/produtos/${codigoProduto}`).then((response) => {
            if(response.status === STATUS_CODE.OK) {
                console.log("response data >>> ", response.data);
                setProdutos(response.data);

                const carrinhoItem = carrinho.find((c: ICarrinhoStore) => c.id === response.data.id)

                if(carrinhoItem) {
                    setQuantidadeProduto(carrinhoItem.quantidade);
                }
            }
        });

    }, []);

    return <>
        <div className=" ">
            <div className=" ">
                <div className=" ">
                    <img src={produto?.imagemGrande} />
                </div>
                <div className=" ">
                    <div className=" ">{produto?.nome}</div>
                    <hr />
                    <div className=" ">
                        {`codigo de produto: ${produto?.codigoProduto}`}
                    </div>
                    <div className=" ">
                        {`preço: ${produto?.preco}`}
                    </div>
                    <div className=" ">
                        <InputQuantidade
                            quantidade={quantidadeProduto || 0}
                            onChange={(quantidade: number) => {
                                setQuantidadeProduto(quantidade);
                            }}
                        />
                        <BotaoPadrao
                            label="Adicionar"
                            onClick={() => {

                                if (produto) {
                                    const carrinhoItem: ICarrinhoStore = { ...produto, quantidade: quantidadeProduto || 0 }
                                    //copiar todas as tags do objeto

                                    addCarrinho(carrinhoItem);
                                }
                                setOpenModal(true);
                            }} />
                    </div>
                </div>
            </div>
        </div>
    </>


}
export default ProdutosDetalhes;