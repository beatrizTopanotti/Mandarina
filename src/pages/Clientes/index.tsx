import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { FC, useState } from "react";
import { STATUS_CODE, apiPost } from "../../api/restClient";
import "./index.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import BotaoPadrao from "../../components/BotaoPadrao";

const Clientes: FC = () => {
    const [nome, setNome] = useState<string>();
    const [sobrenome, setSobrenome] = useState<string>();
    const [documento, setDocumento] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [senha, setSenha] = useState<string>();

    const salvarCliente = async () => {
        const data = {
            nome: nome,
            sobrenome: sobrenome,
            documento: documento,
            email: email,
            senha: senha
        }

        console.log('novo usuario >>> ', data)
        

        const response = await apiPost("/clientes/", data);
        console.log("status >>> ", response.status)
        if(response.status === STATUS_CODE.CREATED){
            alert("Cliente cadastrado com sucesso!");
        }

    }

    const [tipoSenha, setTipoSenha] = useState<Boolean>(false)

    const onTipoSenha = () => {
        setTipoSenha(!tipoSenha);
    }
    return <>
        <div className="div-cadastro">
            <div className="div-cliente">
                <div className="div-cadastro-linha">
                    <TextField
                    value={nome}
                    fullWidth
                    label="Nome"
                    onChange={(event) => {
                        if (event) {
                            setNome(event.target.value);
                        }
                    }}
                    />
                </div>
                <div className="div-cadastro-linha">
                    <TextField
                    value={sobrenome}
                    fullWidth
                    label="Sobrenome"
                    onChange={(event) => {
                        if (event) {
                            setSobrenome(event.target.value);
                        }
                    }}
                    />
                </div>
                <div className="div-cadastro-linha">
                    <TextField
                    value={email}
                    fullWidth
                    label="Email"
                    type="email"
                    onChange={(event) => {
                        if (event) {
                            setEmail(event.target.value);
                        }
                    }}
                    />
                </div>
                <div className="div-cadastro-linha">
                    <TextField
                    value={documento}
                    fullWidth
                    label="CPF"
                    type="text"
                    onChange={(event) => {
                        if (event) {
                            setDocumento(event.target.value);
                        } 
                    }}
                    />
                </div>
                <div className="div-cadastro-linha">
                    <TextField
                    value={senha}
                    fullWidth
                    label="Senha"
                    type={tipoSenha ? "text" : "password"}
                    onChange={(event) => {
                        if (event) {
                            setSenha(event.target.value)
                        }
                    }}
                    InputProps={{
                        endAdornment: <>
                        <IconButton onClick={onTipoSenha}>
                            {tipoSenha ? <VisibilityOff/> : <Visibility />}
                        </IconButton>
                        </>
                    }}
                    />
                </div>
                <div>
                    <BotaoPadrao
                        label="Cadastrar"
                        onClick={() => { 
                            salvarCliente(); 
                        }}/>
                </div> 
            </div>
        </div>
    </>

}

export default Clientes;