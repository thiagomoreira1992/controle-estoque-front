import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FiFileText } from 'react-icons/fi';
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
                    <div id="content">
                        <ul>
                            <li>
                                <Link to="/reports/listall">
                                    <FiFileText size="72" color="#323232" />
                                    <span>Listar todos</span>
                                </Link>
                            </li>
                            <li>
                            <Link to="/reports/listmateriais">
                                    <FiFileText size="72" color="#323232" />
                                    <span>Listar Materiais</span>
                                </Link>
                            </li>
                            <li>
                            <Link to="/reports/listmedicamentos">
                                    <FiFileText size="72" color="#323232" />
                                    <span>Listar Medicamentos</span>
                                </Link>
                            </li>
                            <li>
                            <Link to="/reports/listpapelaria">
                                    <FiFileText size="72" color="#323232" />
                                    <span>Listar Papelaria</span>
                                </Link>
                            </li>
                            <li>
                            <Link to="/reports/listmovimentacoes">
                                    <FiFileText size="72" color="#323232" />
                                    <span>Listar Movimentações</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}