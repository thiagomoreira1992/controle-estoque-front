import React from 'react';
import {Link} from 'react-router-dom';
import { closeNav } from './scripts';

export default function Menu() {
    return (
        <div id="sidebar">
            <Link to="" className="closebtn" onClick={closeNav}>X</Link>
            <Link to="/move" onClick={closeNav}>Movimentar</Link>
            <Link to="/register" onClick={closeNav}>Cadastrar</Link>
            <Link to="/find" onClick={closeNav}>Buscar</Link>
            <Link to="/" onClick={closeNav}>Verificar Validade</Link>
            <Link to="/reports" onClick={closeNav}>Relatórios</Link>
        </div>
    )
}