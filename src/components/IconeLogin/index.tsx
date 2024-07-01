import { PersonOutline } from "@mui/icons-material";
import { FC, useState } from "react";
import "./index.css";
import Login from "../Login";
import { Popover } from "@mui/material";
import { IClienteStore } from "../../store/ClienteStore/types";
import { obterCliente } from "../../store/ClienteStore/clienteStore";

const IconeLogin: FC = () => {
    const [openPopover, setOpenPopover] = useState<boolean>(false);
    const [ancoraPopover, setAncoraPopover] = useState<HTMLDivElement | null>(null);
    const [clienteStore, setClienteStore] = useState<IClienteStore>(obterCliente());

    const onClickLogin = (evento: React.MouseEvent<HTMLDivElement>) => {
        setOpenPopover((openPopover) => !openPopover);
        setAncoraPopover(evento.currentTarget);
    }

    const onClosePopover = () => {
        setOpenPopover(false);
    }
    return <>
        <div className="container-login" onClick={onClickLogin}>
            <div className="div-logo">
                <PersonOutline color="primary" sx={{ fontSize: 40 }} />
            </div>
            <div className="div-usuario">
                <div className="texto-login">
                    Olá, {clienteStore?.nome + "!" ? clienteStore.nome : "Visitante!"}
                    {clienteStore?.nome ? "seja bem vindo" : "entre ou cadastre-se"}
                </div>
            </div>
        </div>
        {/*&& é só if sem else e o ? é if e precisa de I:"" pro else*/
        !clienteStore?.nome && <>
            <Popover
                open={openPopover}
                onClose={onClosePopover}
                anchorEl={ancoraPopover}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}>

                <Login 
                onClose={onClosePopover}
                onLogin={(cliente: IClienteStore) => {
                    setClienteStore(cliente);
                    onClosePopover();
                }} />
            </Popover>
        </>}

    </>
}

export default IconeLogin;

function setOpenPopover(arg0: boolean) {
    throw new Error("Function not implemented.");
}
