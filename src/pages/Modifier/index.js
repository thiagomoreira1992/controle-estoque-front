import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Menu from '../../Components/Menu';


import './styles.css';
import { openNav, closeNav } from './scripts'

const optionsBoolean = [
    { value: 1, label: "Sim" },
    { value: 0, label: "Não" }
]

export default function Modifier() {
    const navigate = useNavigate();

    const idMaterial = localStorage.getItem('idMaterial');

    const [idCategoria, setIdCategoria] = useState("");
    const [nome, setNome] = useState('');
    const [validade, setValidade] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [lote, setLote] = useState('');
    const [profissional, setProfissional] = useState('');
    const [vigilancia, setVigilancia] = useState('');
    const [optionsProfissional, setOptionsProfissional] = useState([]);
    const [optionsCategoria, setOptionsCategoria] = useState([]);
    const [material, setMaterial] = useState([]);


    useEffect(() => {
        api.get('listarProfissional').then(response => {
            setOptionsProfissional(response.data.map(resposta => (
                { value: resposta.id, label: resposta.nome }
            )))
        }).then(() => api.get('listarCategoria')).then(response2 => {
            setOptionsCategoria(response2.data.map(resposta2 => (
                { value: resposta2.id, label: resposta2.nome }
            )))
        }).then(() => api.post('listarId', { id: `${idMaterial}` })).then(response3 => {
            setMaterial(response3.data);
            setIdCategoria(response3.data.idCategoria);
            setNome(response3.data.nome);
            setValidade(response3.data.validade);
            setApresentacao(response3.data.apresentacao);
            setLote(response3.data.lote);
            setProfissional(response3.data.profissional);
            setVigilancia(response3.data.vigilancia);
        });
    }, [])


    function handleSetCategoria(int) {
        setIdCategoria(int);
        document.getElementById('nuloCategoria').disabled = true;
    }

    function handleSetProfissional(int) {
        setProfissional(int);
        document.getElementById('nuloProfissional').disabled = true;
    }

    function handleSetVigilancia(int) {
        setVigilancia(int);
        document.getElementById('nuloVigilancia').disabled = true;
    }

    function handleGetCategoria(int) {
        let i;
        for (i in optionsCategoria) {
            if (optionsCategoria[i].value === int) {
                return optionsCategoria[i].label;
            }
        }
    }

    function handleGetProfissional(int) {
        let i;
        for (i in optionsProfissional) {
            if (optionsProfissional[i].value === int) {
                return optionsProfissional[i].label;
            }
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        const id = idMaterial;

        if (idCategoria === null || idCategoria === "" || idCategoria === undefined) {
            setIdCategoria(material.idCategoria);
            console.log(idCategoria + " " + material.idCategoria);
        }
        if (nome === null || nome === "" || nome === undefined) {
            setNome(material.nome);
            console.log(nome + " " + material.nome);
        }
        if (validade === null || validade === "" || validade === undefined) {
            setValidade(material.validade);
            console.log(validade + " " + material.validade);
        }
        if (apresentacao === null || apresentacao === "" || apresentacao === undefined) {
            setApresentacao(material.apresentacao);
            console.log(apresentacao + " " + material.apresentacao);
        }
        if (lote === null || lote === "" || lote === undefined) {
            setLote(material.lote);
            console.log(lote + " " + material.lote);
        }
        if (profissional === null || profissional === "" || profissional === undefined) {
            setProfissional(material.profissional);
            console.log(profissional + " " + console.log(material.profissional));

        }if (vigilancia === null || vigilancia === "" || vigilancia === undefined) {
            setVigilancia(material.vigilancia);
            console.log(vigilancia + " " + material.vigilancia);
        }

        const data = {
            idCategoria,
            nome,
            validade,
            apresentacao,
            lote,
            profissional,
            vigilancia,
            id
        }

        if(data.idCategoria === "" || 
        data.nome === "" ||
        data.validade === "" || 
        data.apresentacao === "" || 
        data.lote === "" || 
        data.profissional === "" ||
        data.vigilancia === "" || 
        data.id === ""){
            alert(JSON.stringify(data))
        }else{
            try {
                const response = await api.post('alterarMaterial', data);
                console.log(data);
                console.log(response);

                alert(`Material ${data.nome} lote: ${data.lote}, alterado!`);

                navigate('/reports/listall');
                localStorage.clear();
            } catch (err) {
                alert(err);
            }
        }
    }

    return (
        <div id='main-container'>
            <Helmet>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Helmet>
            <Menu></Menu>
            <div id='main'>
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <span>Controle de Materiais e Medicamentos</span>
                </section>
                <div className="registro">
                    <div id="contentCheckValidity">
                        <span>
                            <strong>Materiais próximos da data de Validade</strong>
                        </span>
                        <ul>
                            <li>
                                <span>Categoria</span>
                                <span>Nome</span>
                                <span>Quantidade</span>
                                <span>Validade</span>
                                <span>Apresentação</span>
                                <span>Lote</span>
                                <span>Vigilância</span>
                                <span>Profissional</span>
                            </li>
                        </ul>
                        <ul className="resultCheckValidity">
                            <li>
                                <span>{handleGetCategoria(material.idCategoria)}</span>
                                <span>{material.nome}</span>
                                <span>{material.quantidade}</span>
                                <span>{material.validade}</span>
                                <span>{material.apresentacao}</span>
                                <span>{material.lote}</span>
                                <span>{material.vigilancia === true ? "Sim" : "Não"}</span>
                                <span>{handleGetProfissional(material.profissional)}</span>
                            </li>
                        </ul>
                    </div>
                    <form className="content" onSubmit={handleRegister}>
                        <label>
                            Categoria:
                            <select value={idCategoria} placeholder="Categoria"  onChange={e => handleSetCategoria(e.target.value)
                                /*setIdCategoria(e.target.value).then(() => setNomeCategoria(handleGetCategoria(e.target.value))) || console.log(handleGetCategoria(e.target.value));
                            */}>
                                <option id="nuloCategoria">{handleGetCategoria(material.idCategoria)}</option>
                                {optionsCategoria.map(categoria => (
                                    <option key={categoria.value} value={categoria.value}>{categoria.label}</option>
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
                            <select value={vigilancia} placeholder="Vigilancia" onChange={e => handleSetVigilancia(e.target.value)}>
                                <option id='nuloVigilancia'>{material.vigilancia === true ? "Sim" : "Não"}</option>
                                {optionsBoolean.map(escolha => (
                                    <option key={escolha.value} value={escolha.value}>{escolha.label}</option>
                                ))}
                            </select>
                        </label>
                        <label>Profissional:
                            <select value={profissional} placeholder="Profissional" onChange={e => handleSetProfissional(e.target.value)}>
                                <option id='nuloProfissional'>{handleGetProfissional(material.profissional)}</option>
                                {optionsProfissional.map(funcionario => (
                                    <option key={funcionario.value} value={funcionario.value}>{funcionario.label}</option>
                                ))}
                            </select>
                        </label>
                        <label className="formButton">
                            <button className="button" type="submit">Cadastrar</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );

}
