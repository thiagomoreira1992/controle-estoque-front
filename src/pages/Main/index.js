import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    render() {
        return (
            <div id="main-container">
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Helmet>
                <div id="sidebar">
                    <a href="javascript:void(0)" className="closebtn" onClick={
                        function closeNav() {
                            document.getElementById("sidebar").style.width = "0";
                            document.getElementById("main").style.marginLeft = "0";
                            document.getElementById("menuSide").style.opacity = "1";
                        }
                    }>X</a>
                    <a href="#">Movimentar</a>
                    <a href="#">Cadastrar</a>
                    <a href="#">Verificar Validade</a>
                    <a href="#">Relatórios</a>
                </div>
                <div id="main">
                    <button className="openbtn" id="menuSide" onClick={
                        function openNav() {
                            document.getElementById("sidebar").style.width = "250px";
                            document.getElementById("main").style.marginLeft = "250px";
                            document.getElementById("menuSide").style.opacity = "0";
                            console.log("abrir");
                        }
                    }><p>☰</p></button>
                    <h2>Collapsed Sidebar</h2>
                    <p>Click on the hamburger menu/bar icon to open the sidebar, and push this content to the right.</p>
                </div>
                <script src="./scripts.js"></script>
            </div>
        );
    }
}