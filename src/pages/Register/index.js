import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Select from 'react-select';

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

const profissional = [
    { value: 0, label: "Profissional" }
]
export default function Main() {
    const [idCategoria, setIdCategoria] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [validade, setValidade] = useState('');
    const [apresentacao, setApresentacao] = useState('');
    const [lote, setLote] = useState('');
    const [profissional, Profissional] = useState('');
    const [vigilancia, setVigilancia] = useState(0);


    function handleRegister(e) {
        e.preventDefault();
    }


    return (
        <div id="main-container">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <div id="sidebar">
                <Link to="" className="closebtn" onClick={closeNav}>X</Link>
                <Link to="/move" onClick={closeNav}>Movimentar</Link>
                <Link to="/register" onClick={closeNav}>Cadastrar</Link>
                <Link to="/" onClick={closeNav}>Verificar Validade</Link>
                <Link to="/reports" onClick={closeNav}>Relatórios</Link>
            </div>
            <div id="main">
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <spam>Controle de Materiais e Medicamentos</spam>
                </section>
                <div className="registro">
                    <form className="content" onSubmit={handleRegister}>
                        <label>
                            Categoria:
                            <Select className="react-select" placeholder="Categoria" options={options} name="Categoria" isClearable />
                        </label>
                        <label>Nome:
                            <input
                                placeholder="Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </label>
                        <label>
                            Quantidade:
                            <input
                                type="number"
                                placeholder="Quantidade"
                                value={quantidade}
                                onChange={e => setQuantidade(e.target.value)}
                            />
                        </label>
                        <label>Validade:
                            <input
                                type="date" placeholder="Data"
                                value={validade}
                                onChange={e => setValidade(e.target.value)}
                            />
                        </label>
                        <label>
                            Apresentação:
                            <input
                                type="text"
                                placeholder="Apresentação"
                                value={apresentacao}
                                onChange={e => setApresentacao(e.target.value)}
                            />
                        </label>
                        <label>Lote:
                            <input
                                type="text"
                                placeholder="Lote"
                                value={lote}
                                onChange={e => setLote(e.target.value)}
                            />
                        </label>
                        <label>
                            Vigilância:
                            <Select
                                className="react-select"
                                placeholder="Vigilância"
                                options={optionsBoolean}
                                isClearable
                                value={vigilancia}
                                onChange={e => setVigilancia(e.target.vigilancia)}
                            />
                        </label>
                        <label>Profissional:
                            <Select className="react-select" placeholder="Profissional" options={profissional} isClearable />
                        </label>
                        <label>
                            <button className="button" type="submit">Cadastrar</button>
                        </label>
                    </form>
                </div>
            </div>
            <script src="./scripts.js"></script>
        </div>
    );
}
