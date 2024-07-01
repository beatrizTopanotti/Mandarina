import {ShoppingCart } from "@mui/icons-material"
import { FC } from "react"
import "./index.css";
import { Badge } from "@mui/material";
import { obterQuantidadeCarrinho } from "../../store/CarrinhoStore/carrinhoStore";

const CarrinhoDrawer: FC = () => {
    return <>
        <div className="carrinho">
            <Badge
            badgeContent={obterQuantidadeCarrinho()}
            color="primary"
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left"
                }}>
                <ShoppingCart color="action" />
            </Badge>
        </div>
    </>
}

export default CarrinhoDrawer