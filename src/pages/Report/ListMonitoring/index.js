import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import './stylemonitoring.css';
import { openNav, closeNav } from './scriptsmonitoring'

import api from '../../../services/api';


export default function ListMovimentacao() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [profissional, setProfissional] = useState([]);


    useEffect(() => {
        api.get('listarProfissional').then(response3 => {
            setProfissional(response3.data);
        }).then(api.get('listarMaterial').then(response => {
            setMateriais(response.data);
        })).then(api.get('listarMovimentacao').then(response2 => {
            //setMovimentacoes(response2.data);
            setMovimentacoes(response2.data.filter(movimentacao => movimentacao.idMaterial !== materiais.id));
            console.log(response2.data.filter(movimentacao => movimentacao.idMaterial !== materiais.id))

        })).then(() => {
            setMovimentacoes(movimentacoes.filter(movimentacao => movimentacao.idMaterial !== materiais.id));
            console.log(movimentacoes.filter(movimentacao => movimentacao.idMaterial !== materiais.id))
            console.log(materiais)
        })

    }, []);

    function handleGetMaterial(int) {
        for (i in materiais) {
            if (materiais[i].id === int) {
                return materiais[i].nome;
            }
        }
    }

    function handleGetProfissional(int) {
        for (i in profissional) {
            if (profissional[i].id === int) {
                return profissional[i].nome;
            }
        }
    }

    /*function teste(e) {
        console.log(e);
        const teste = materiais;
        console.log(materiais);
        console.log(teste);

        teste.sort(function (a,b) {
            console.log(a.e);
            return a.e < b.e ? -1 : a.e > b.e ? 1 : 0;
        })

        console.log(teste);
    }*/

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
                    <span>Controle de Materiais e Medicamentos</span>
                </section>
                <div id="contentListMonitoring">
                    <ul>
                        <li>
                            <span>Material</span>
                            <span>Lote</span>
                            <span>Quantidade</span>
                            <span>Profissional</span>
                            <span>Data</span>
                        </li>
                    </ul>
                    <ul className="resultMonitoring">
                        {
                            movimentacoes.map(movimentacao => (
                                <li key={movimentacao.id}>
                                    <span>{handleGetMaterial(movimentacao.idMaterial)}</span>
                                    <span>{movimentacao.lote}</span>
                                    <span>{movimentacao.quantidade}</span>
                                    <span>{handleGetProfissional(movimentacao.profissional)}</span>
                                    <span>{new Intl.DateTimeFormat().format(new Date(movimentacao.createdAt))/*movimentacao.createdAt*/}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
