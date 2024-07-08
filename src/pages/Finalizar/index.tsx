import { FC } from "react";
import React, { useEffect, useState } from "react";
import "./index.css";
import BotaoPadrao from "../../components/BotaoPadrao";
import { useNavigate } from "react-router-dom";
import { carregarCarrinho } from "../../store/CarrinhoStore/carrinhoStore";



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
                {carrinho.length > 0 ? (
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
                            {carrinho.map((item, index) => (
                                <tr key={index}>
                                    <td><img src={`${item.imagemPequena}`} alt={item.nome} className="imagem-item" /></td>
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

            {carrinho.length > 0 && (
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