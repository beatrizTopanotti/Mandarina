import React, { FC } from "react";
import Home from "./pages/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;