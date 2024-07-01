import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Sobre from "./pages/Sobre";
import NaoEncontrado from "./pages/NaoEncontrado";
import Clientes from "./pages/Clientes";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/clientes" element={<Clientes />}/>
                <Route path="*" element={<NaoEncontrado/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;