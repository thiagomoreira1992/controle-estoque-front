import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Select from 'react-select';

import './styles.css';
import {openNav, closeNav} from'./scripts'

const options = [
    {value: 2 , label:" Materiais"},
    {value: 3, label: "Medicamentos"},
    {value: 4, label: "Papelaria"}
]

export default class Main extends Component {
    render() {
        return (
            <div id="main-container">
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
                <div id="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>X</a>
                    <a href="#">Movimentar</a>
                    <a href="#">Cadastrar</a>
                    <a href="#">Verificar Validade</a>
                    <a href="#">Relatórios</a>
                </div>
                <div id="main">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <h2>Collapsed Sidebar</h2>
                    <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
                    <div className="registro">
                        <form className="content">
                            <label>
                                Categoria:
                        <Select className="react-select" placeholder="Categoria" options={options} name="Categoria"  isClearable />
                            </label>
                            <label>Nome:
                                <input placeholder="Nome"/>
                            </label>
                            <label>
                                Quantidade:
                                <input type="number" placeholder="Quantidade"/>
                            </label>
                            <label>Validade:
                                <input type="date" placeholder="Data"/>
                            </label>
                            <label>
                                Apresentação:
                                <input type="text" placeholder="Apresentação"/>
                            </label>
                            <label>Lote:
                                <input type="text" placeholder="Lote"/>
                            </label>
                        </form>
                    </div>
                </div>
                <script src="./scripts.js"></script>
            </div>
        );
    }
}