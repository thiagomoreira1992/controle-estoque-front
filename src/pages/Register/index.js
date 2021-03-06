import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Select from 'react-select';
import moment from 'moment';

import Menu from '../../Components/Menu';

import './styles.css';
import { openNav, closeNav } from './scripts'

const options = [
    { value: 2, label: " Materiais" },
    { value: 3, label: "Medicamentos" },
    { value: 4, label: "Papelaria" }
]
const optionsBoolean = [
    { value: 1, label: "Sim" },
    { value: 0, label: "Não" }
]

const optionProfissional = [
    { value: 0, label: "Profissional" },
    { value: 2, label: "Eduarda" }
]
export default function Register() {
    const [idCategoria, setIdCategoria] = useState("");
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [validade, setValidade] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [lote, setLote] = useState('');
    const [profissional, setProfissional] = useState(null);
    const [vigilancia, setVigilancia] = useState(null);
    const [optionsProfissional, setOptionsProfissional] = useState([]);
    const [optionsCategoria, setOptionsCategoria] = useState([]);


    useEffect(() => {
        api.get('listarProfissional').then(response => {
            console.log(response.data);
            /*response.data.map(resposta => (
                setOptionsProfissional([{
                    value: resposta.id, label: resposta.nome
                }])
            ))*/
            setOptionsProfissional(response.data.map(resposta => (
                { value: resposta.id, label: resposta.nome }
            )))
        }).then(() => api.get('listarCategoria')).then(response2 => {
            setOptionsCategoria(response2.data.map(resposta2 => (
                { value: resposta2.id, label: resposta2.nome })))
        });
    }, [])

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            idCategoria,
            nome,
            quantidade,
            validade,
            apresentacao,
            lote,
            profissional,
            vigilancia
        }

        if (idCategoria === null || idCategoria === "" || idCategoria === undefined) {
            alert('Todos os Campos precisam ser preenchidos!');
            document.getElementById('categoria').focus();
        } else if (nome === null || nome === "" || nome === undefined) {
            alert('Todos os Campos precisam ser preenchidos!');
            document.getElementById('nome').focus();
        } else if (quantidade === null || quantidade === "" || quantidade === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('quantidade').focus();
        } else if (validade === null || validade === "" || validade === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('validade').focus();
        } else if (apresentacao === null || apresentacao === "" || apresentacao === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('apresentacao').focus();
        } else if (lote === null || lote === "" || lote === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('lote').focus();
        } else if (profissional === null || profissional === "" || profissional === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('profissional').focus();
        } else if (vigilancia === null || vigilancia === "" || vigilancia === undefined) {
            alert('Todos os Campos precisam ser preenchidos!')
            document.getElementById('vigilancia').focus();
        } else if (validade <= moment().add(1, 'month').format('YYYY-MM-DD')) {
            alert('Data de validade inferior ou muito próxima da data atual!');
        } else {
            try {
                const response = await api.post('criarMaterial', data);
                console.log(data);
                console.log(response);

                alert(response.data.body);

                navigate('/register');
                window.location.reload();
            } catch (err) {
                alert(err);
            }
        }

    }

    return (
        <div id="main-container">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Menu></Menu>
            <div id="main">
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <spam>Controle de Materiais e Medicamentos</spam>
                </section>
                <div className="registro">
                    <form className="content" onSubmit={handleRegister}>
                        <label>
                            Categoria:
                            {/*<Select
                                id="categoria"
                                className="react-select"
                                placeholder="Categoria"
                                options={optionsCategoria}
                                name="Categoria"
                                defaultValue={idCategoria}
                                onChange={e => setIdCategoria(e.value)}
                            />*/}
                            <select id="categoria" value={idCategoria} name="Categoria" onChange={e => setIdCategoria(e.target.value)}>
                                <option hidden selected>Categoria</option>
                                {optionsCategoria.map(categoria => (
                                    <option value={categoria.value}>{categoria.label}</option>
                                ))}
                            </select>
                        </label>
                        <label>Nome:
                            <input
                                id="nome"
                                placeholder="Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </label>
                        <label>
                            Quantidade:
                            <input
                                id="quantidade"
                                type="number"
                                placeholder="Quantidade"
                                value={quantidade}
                                onChange={e => setQuantidade(e.target.value)}
                            />
                        </label>
                        <label>Validade:
                            <input
                                id="validade"
                                type="date" placeholder="Data"
                                value={validade}
                                onChange={e => setValidade(e.target.value)}
                            />
                        </label>
                        <label>
                            Apresentação:
                            <input
                                id="apresentacao"
                                type="text"
                                placeholder="Apresentação"
                                value={apresentacao}
                                onChange={e => setApresentacao(e.target.value)}
                            />
                        </label>
                        <label>Lote:
                            <input
                                id="lote"
                                type="text"
                                placeholder="Lote"
                                value={lote}
                                onChange={e => setLote(e.target.value)}
                            />
                        </label>
                        <label>
                            Vigilância:
                            {/*<Select
                                id="vigilancia"
                                className="react-select"
                                placeholder="Vigilância"
                                options={optionsBoolean}
                                defaultvalue={vigilancia}
                                onChange={e => setVigilancia(e.value)}
                            />*/}
                            <select id="vigilancia" value={vigilancia} onChange={e => setVigilancia(e.target.value)}>
                                <option hidden selected>Vigilância</option>
                                {optionsBoolean.map(escolha => (
                                    <option value={escolha.value}>{escolha.label}</option>
                                ))}
                            </select>
                        </label>
                        <label>Profissional:
                            {/*<Select
                                id="profissional"
                                className="react-select"
                                placeholder="Profissional"
                                options={optionsProfissional}
                                defaultValue={profissional}
                                onChange={e => setProfissional(e.value)}
                            />*/}
                            <select id="profissional" value={profissional} onChange={e => setProfissional(e.target.value)}>
                                <option hidden selected>Profissional</option>
                                {optionsProfissional.map(funcionario => (
                                    <option value={funcionario.value}>{funcionario.label}</option>
                                ))}
                            </select>
                        </label>
                        <label className="formButton">
                            <button className="button" type="submit">Cadastrar</button>
                        </label>
                    </form>
                </div>
            </div>
            <script src="./scripts.js"></script>
        </div>
    );
}
