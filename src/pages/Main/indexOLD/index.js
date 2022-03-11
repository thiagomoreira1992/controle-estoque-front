import React, { Component } from 'react';
import {Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
//import api from '../../services/api';

import './styles.css';
import { openNav, closeNav, closeNavClick } from './scripts'

let div;
export default class Main extends Component {
    render() {
        return (
            <div id='main-container'>
                <Helmet>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                </Helmet>
                <div id='sidebar'>
                <Link to="" className="closebtn" onClick={closeNav}>X</Link>
                    <Link to="/move" onClick={closeNav}>Movimentar</Link>
                    <Link to="/register" onClick={closeNav}>Cadastrar</Link>
                    <Link to="/" onClick={closeNav}>Verificar Validade</Link>
                    <Link to="/reports" onClick={closeNav}>Relatórios</Link>
                </div>
                <div id='main'>
                <section className="menu">
                        <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                        <spam>Controle de Materiais e Medicamentos</spam>
                        </section>
                </div>
            </div>
        );
    }
}