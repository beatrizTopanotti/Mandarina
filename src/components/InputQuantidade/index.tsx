import { Remove, Add } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import { FC } from "react";

interface InputQuantidadeProperties {
    quantidade: number,
    onChange: (quantidade: number) => void;
}

const InputQuantidade: FC<InputQuantidadeProperties> = ({
    quantidade,
    onChange
}) => {
    return <>
        <div className=" ">

            <Box className=" ">
                <IconButton
                    className=" "
                    size="small"
                    onClick={(event) => {
                        const qtde = quantidade - 1;

                        if (qtde) {
                            onChange(qtde);
                        }
                    }}
                >
                    <Remove />
                </IconButton>
                
                <TextField
                    className=" "
                    margin="normal"
                    type="number"
                    size="small"
                    value={quantidade}
                    onChange={(event) => {
                        const quantidade = Number(event.target.value);

                        if (quantidade) {
                            onChange(quantidade);
                        }

                    }}
                />
                <IconButton
                    className=" "
                    size="small"
                    onClick={(event) => {
                        const qtde = quantidade + 1;

                        if (qtde) {
                            onChange(qtde);
                        }
                    }}>
                    <Add />
                </IconButton>
            </Box>
        </div>
    </>
}

export default InputQuantidade;