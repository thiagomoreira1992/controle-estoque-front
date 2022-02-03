import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../services/api';

import './styles.css';
import {openNav, closeNav} from'./scripts'

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
                </div>
                <script src="./scripts.js"></script>
            </div>
        );
    }
}