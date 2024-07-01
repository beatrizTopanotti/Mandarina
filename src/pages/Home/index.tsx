import React, { useEffect, useState } from "react";
import { FC } from "react";
import { STATUS_CODE, apiGet } from "../../api/restClient";
import { IProduto } from "./types";
import './index.css';
import BotaoPadrao from "../../components/BotaoPadrao";
import { useParams } from "react-router-dom";

const Home: FC = () => {

    const { categoria } = useParams();

    const [produtos, setProdutos] = useState<any[]>([]);

    const carregarProdutos = async () => {

        console.log("categoria >>> ", categoria)

        let url = "/produtos/";

        if (categoria) {
            url = `/produtos/categoria/${categoria}`;
        }

        const response = await apiGet(url);

        if (response.status === STATUS_CODE.OK) {
            console.log(response);
            setProdutos(response.data);
        }
    }

    useEffect(() => {

        carregarProdutos();
    }, []);

    const redirecionarDetalhesProduto = (idProduto: number) => {
        if (idProduto) {
            window.location.href = `/produtos/detalhes/${idProduto}`;
        }
    }

    return <>
        {produtos?.length ? <>
            <div className="container">
                {produtos.map((produto: IProduto) => {
                    return <>
                        <div className="produto">
                            <a className="produto_imagem" href={`/produtos/detalhes/${produto.id}`}>
                                <img src={produto.imagemPequena} />
                            </a>
                            <div className="produto_nome">
                                <p>{produto.nome} </p>
                            </div>
                            <div className="produto_preco">
                                <p>R${produto.preco}</p>
                            </div>
                            <div>
                                <BotaoPadrao
                                    label="Comprar"
                                    onClick={() => {
                                        redirecionarDetalhesProduto(produto.id);
                                    }}
                                />
                            </div>
                        </div>
                    </>
                })}
            </div>
        </> : <div>Lista de dados</div>}
    </>
}
export default Home;