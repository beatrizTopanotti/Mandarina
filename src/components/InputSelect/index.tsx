import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FC } from "react";

interface InputSelectProperties {
    lista: any[],   
    valor: any, 
    atualizarValor: (valor: any) => void,
    label: string,
} 
const InputSelect: FC <InputSelectProperties> = ({
    lista,
    valor,
    atualizarValor,
    label
}) => {

    return <>
        <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
            <Select
                label={label}
                value={valor}
                onChange={(event) => {
                    if(event){
                        atualizarValor(event.target.value);
                    }
                    
                }}>
                {lista.map((l: any) => (
                        <MenuItem 
                            value={l.valor}
                            key={l.valor}>
                            {l.texto}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>    
    </>
}

export default InputSelect;