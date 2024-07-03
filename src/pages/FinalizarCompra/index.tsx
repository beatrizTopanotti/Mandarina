import { FC } from "react";
import React, { useEffect, useState } from "react";
import "./index.css";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { carregarCarrinho } from "../../store/CarrinhoStore/carrinhoStore";

const itensCarrinho = [
    {
        nome: "Produto 1",
        preco: 100,
        quantidade: 2,
        enderecoImagem: "https://scontent.ffln3-1.fna.fbcdn.net/v/t39.6806-6/441877512_1484972749062819_7181323793292260056_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09c5e7&_nc_ohc=UpyybQlvFK4Q7kNvgGgqhJm&_nc_ht=scontent.ffln3-1.fna&oh=00_AYBOsL_nCPgbQHOCuowfoI_AOd3CumoJjFPaSvrGnK_Btg&oe=668AA329"
    },
    {
        nome: "Produto 2",
        preco: 20.0,
        quantidade: 2,
        enderecoImagem: "https://scontent.ffln3-1.fna.fbcdn.net/v/t39.6806-6/441877512_1484972749062819_7181323793292260056_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09c5e7&_nc_ohc=UpyybQlvFK4Q7kNvgGgqhJm&_nc_ht=scontent.ffln3-1.fna&oh=00_AYBOsL_nCPgbQHOCuowfoI_AOd3CumoJjFPaSvrGnK_Btg&oe=668AA329"
    }
];

const FinalizarCompra: FC = () => {
    const navigate = useNavigate();
    const carrinho = carregarCarrinho();

    const calcularTotal = () => {
        return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2);
    };
    
    const finalizarCompra = () => {};
    
    const continuarComprando = () => {
        navigate("/produtos");
    };

    return <>
        <div className="finalizar-container">
            <div className="itens-carrinho">
                <h2>Finalizar compra</h2>
                {itensCarrinho.length > 0 ? (
                    <table className="tabela-carrinho">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nome</th>
                                <th>Quantidade</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itensCarrinho.map((item, index) => (
                                <tr key={index}>
                                    <td><img src={`${item.enderecoImagem}`} alt={item.nome} className="imagem-item" /></td>
                                    <td>{item.nome}</td>
                                    <td>{item.quantidade}</td>
                                    <td>R$ {item.preco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Seu carrinho está vazio.</p>
                )}
            </div>

            {itensCarrinho.length > 0 && (
                <div className="resumo-compra">
                    <h2>Resumo do Pedido</h2>
                    <div className="total-compra">
                        <h3>Subtotal: R$ {calcularTotal()}</h3>
                    </div>
                    <BotaoPadrao
                        label="Finalizar compra"
                        onClick={() => {
                            finalizarCompra();
                        }}
                    />
                    <BotaoPadrao
                        label="Continuar comprando"
                        onClick={() => {
                            continuarComprando();
                        }}
                    />
                </div>
            )}
        </div>
    </>
};

export default FinalizarCompra;