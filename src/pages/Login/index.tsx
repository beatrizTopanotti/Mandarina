import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { FC, useState } from "react"
import "./index.css";
import { AlternateEmail, Key, Visibility, VisibilityOff, VisibilityOutlined } from "@mui/icons-material";
import { STATUS_CODE, apiPost } from "../../api/restClient";
import { IClienteStore } from "../../store/ClienteStore/types";
import { addClienteStore } from "../../store/ClienteStore/clienteStore";

interface LoginProperties {
    onClose: () => void,
    onLogin: (cliente: IClienteStore) => void; /*função não opcional, tem que ser declarada na tag */
}

const Login: FC<LoginProperties> = ({
    onClose,
    onLogin,
}) => {

    const [tipoSenha, setTipoSenha] = useState<Boolean>(false)
    const [email, setEmail] = useState<String>();
    const [senha, setSenha] = useState<String>();

    const onTipoSenha = () => {
        setTipoSenha(!tipoSenha);
    }

    const autenticarCliente = async () => {

        const data = {
            email: email,
            senha: senha,
        }

        const response = await apiPost("/clientes/autenticar/", data);

        if (response.status === STATUS_CODE.OK) {
            const dataResult = response.data;

            const cliente: IClienteStore = {
                id: dataResult.id,
                nome: dataResult.nome,
                email: dataResult.email,
            }
            
            addClienteStore(cliente);
            onLogin(cliente);
            
            return;
        }

        alert("usuário ou senha inválido!");
    }

    return <>
        <div className="div-login">
            <div className="div-login-linha">
                <TextField
                    fullWidth /* como o outro ficou grande, usamos isso para cobrir o espaço na div*/
                    label="Email"
                    value={email}
                    onChange={(event) => {
                        if (event) {
                            setEmail(event.target.value);
                        }
                    }}
                    type="email"
                    InputProps={{
                        startAdornment: <>
                            <InputAdornment position="start">
                                <AlternateEmail />
                            </InputAdornment>
                        </>
                    }}
                />
            </div>
            <div className="div-login-linha">
                <TextField
                    label="Senha"
                    value={senha}
                    onChange={(event) => {
                        if (event) {
                            setSenha(event.target.value);
                        }
                    }}
                    type={tipoSenha ? "text" : "password"}
                    InputProps={{
                        startAdornment: <>
                            <InputAdornment position="start">
                                <Key />
                            </InputAdornment>
                        </>,
                        endAdornment: <>
                            <IconButton onClick={onTipoSenha}>
                                {tipoSenha ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </>
                    }}
                />
            </div>
            <div className="div-login-linha">
                <Button onClick={onClose} style={{ width: "50%" }}>Voltar</Button>
                <Button style={{ width: "50%" }} variant="contained"
                    onClick={() => {
                        autenticarCliente();
                    }}
                >Entrar</Button>
            </div>
            <div className="div-login-linha">
                <p>não tem uma conta? <a href="/clientes/">Cadastre-se</a></p></div>
        </div>
    </>
}
export default Login;