import { TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { STATUS_CODE, apiGet, apiPost } from "../../api/restClient";
import "./index.css";
import BotaoPadrao from "../../components/BotaoPadrao";
import InputSelect from "../../components/InputSelect";
import { ICidade } from "./types";
import axios from "axios";

const Enderecos: FC = () => {
    const [idCliente, setIdCliente] = useState<number>();
    const [nome, setNome] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [rua, setRua] = useState<string>();
    const [cidade, setCidade] = useState<{ valor: string; texto: string }[]>([]);
    const [bairro, setBairro] = useState<string>();
    const [estado, setEstado] = useState<string>();

    const [cidadeSelecionada, setCidadeSelecionada] = useState('');

    const listaCidades = async () => {

        let url = "/cidades/";

        const fetchCidades = async () => {
            try {
                const response = await axios.get<ICidade[]>(url); 
                const cidades = response.data.map((cidade) => ({
                    valor: cidade.id,
                    texto: cidade.nome
                }));
                setCidade(cidade);
            } catch (error) {
                console.error('Erro ao buscar cidades:', error);
            }
        };

    }

    useEffect(() => {
        const nomeCliente = localStorage.getItem("nomeCliente");
        const emailCliente = localStorage.getItem("emailCliente");
        const idCliente = localStorage.getItem("idCliente")

        listaCidades();
    }, []);

    const salvarEndereco = async () => {
        const data = {
            rua: rua,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            idCliente: idCliente
        };

        console.log('novo endereço >>> ', data)


        const response = await apiPost("/clientes/", data);
        console.log("status >>> ", response.status)
        if (response.status === STATUS_CODE.CREATED) {
            alert("Cliente cadastrado com sucesso!");
        }

    }

    return <>
        <div className="div-cadastro">
            <div className="div-endereco">
                <div className="div-cadastro-linha">
                    <TextField
                        value={rua}
                        fullWidth
                        label="Rua"
                        onChange={(event) => {
                            if (event) {
                                setRua(event.target.value);
                            }
                        }}
                    />
                </div>
                <div className="div-cadastro-linha">
                    <TextField
                        value={bairro}
                        fullWidth
                        label="Bairro"
                        onChange={(event) => {
                            if (event) {
                                setBairro(event.target.value);
                            }
                        }}
                    />
                </div>
                {cidade?.length ? <>
                    <div className="div-cadastro-linha">                        
                            <InputSelect
                            lista={cidade}
                                valor={cidadeSelecionada}
                                label="Cidade"
                                atualizarValor={(valor) => setCidadeSelecionada}
                                />
                    </div>
                </> : <div>sem cidades</div>}
                <div className="div-cadastro-linha">
                    
                </div>
                <div>
                    <BotaoPadrao
                        label="Cadastrar"
                        onClick={() => {
                            salvarEndereco();
                        }} />
                </div>
            </div>
        </div>
    </>

}

export default Enderecos;