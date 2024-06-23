import React from "react";
import "./index.css";
import { FC } from "react";

const Menubar: FC = () => {
    return <>
        <div className="menu">
            <ul>
                <li><a href="/home">Produtos</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/ORGANIZACAO">Organização</a></li>
                <li><a href="/ESCRITA">Escrita</a></li>
                <li><a href="/CADERNOS">Cadernos</a></li>
                <li><a href="/PRESENTES">Presentes</a></li>
                <li><a href="/TEMATICO">Temático</a></li>
                <li><a href="/PROMOCOES">Promoções</a></li>
            </ul>
        </div>
    </>
}
export default Menubar;