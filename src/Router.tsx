import React, { FC } from "react";
import Home from "./pages/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdutosDetalhes from "./pages/ProdutosDetalhes";
import Clientes from "./pages/Clientes";
import Finalizar from "./pages/Finalizar";
import Enderecos from "./pages/Enderecos";


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/produtos/detalhes/:codigoProduto" element={<ProdutosDetalhes/>}/>
                <Route path="/:categoria" element={<Home />}/>
                <Route path="/clientes" element={<Clientes/>}/>
                <Route path="/finalizar/" element={<Finalizar/>}/>
                <Route path="/enderecos" element={<Enderecos/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;