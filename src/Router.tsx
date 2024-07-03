import React, { FC } from "react";
import Home from "./pages/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProdutosDetalhes from "./pages/ProdutosDetalhes";
import FinalizarCompra from "./pages/FinalizarCompra";


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/produtos/detalhes/:codigoProduto" element={<ProdutosDetalhes/>}/>
                <Route path="/:categoria" element={<Home />}/>
                <Route path="/finalizar" element={<FinalizarCompra />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;