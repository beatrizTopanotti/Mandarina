import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { FC, ReactNode } from "react";

interface ConfirmarModalProperties {
    open: boolean,
    titulo: ReactNode,
    mensagem: ReactNode,
    onConfirmar: () => void,
    onCancelar: () => void,
}

const ConfirmarModal: FC<ConfirmarModalProperties>  = ({
    open,
    titulo,
    mensagem,
    onConfirmar,
    onCancelar
}) => {
    return <>
        <Dialog open={open}>
            <DialogTitle>{titulo}</DialogTitle>
            <DialogContent>{mensagem}</DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={onCancelar}>Cancelar</Button>
                <Button variant="contained" onClick={onConfirmar}>Confirmar</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default ConfirmarModal;