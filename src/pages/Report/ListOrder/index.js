import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Menu from '../../../Components/Menu';

import './styleOrder.css';
import { openNav, closeNav } from './scripts'

import api from '../../../services/api';
import moment from 'moment';


export default function ListAll() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [coluna, setColuna] = useState(1);

    useEffect(() => {
        api.get('group').then(response => {
            setMateriais(response.data[0]);
            console.log(response.data[0]);
        }).then(setColuna(0));
    }, []);

    useEffect(() => {
        const ordenar = (coluna) => {
            let ordenedMateriais;
            switch (coluna) {
                case 2:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.nome < b.nome)
                            return -1;
                        if (a.nome > b.nome)
                            return 1;
                        return 0;
                    });
                    setMateriais([]);
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                case 3:
                    ordenedMateriais = materiais.sort((a, b) => {
                        return a.quantidade - b.quantidade;
                    });
                    setMateriais([]);
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                    case 4:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.apresentacao < b.apresentacao)
                            return -1;
                        if (a.apresentacao > b.apresentacao)
                            return 1;
                        return 0;
                    });
                    setMateriais([]);
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                default:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a < b)
                            return -1;
                        if (a > b)
                            return 1;
                        return 0;
                    });
                    setMateriais([]);
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
            }

        }
        ordenar(coluna);
        console.log(materiais[0]);
    }, [coluna])


    return (
        <div id='main-container'>
            {window.onafterprint = () => {
                document.getElementById("printButton").style.visibility = "visible";
                document.getElementById("diaHora").style.visibility = "hidden";
            }}
            <Helmet>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Helmet>
            <Menu></Menu>
            <div id='main'>
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <span>Controle de Materiais e Medicamentos</span>
                </section>
                <section class="printButton">
                    <p id="diaHora">{moment().format('MMMM Do YYYY, hh:mm:ss')}</p>
                    <button id="printButton" onClick={() => {
                        document.getElementById("printButton").style.visibility = "hidden";
                        document.getElementById("diaHora").style.visibility = "visible";
                        window.print();

                    }}>Imprimir</button>

                </section>
                <div id="contentListOrder">
                    <ul>
                        <li className="titulo">
                            <span className="ordenar" onClick={() => setColuna(2)}>Nome</span>
                            <span className="ordenar" onClick={() => setColuna(3)}>Quantidade</span>
                            <span className="ordenar" onClick={() => setColuna(4)}>Apresentação</span>
                        </li>
                        {
                            materiais.map(material => {
                                i++;
                                return (
                                    <li className="result" key={material[i]}>
                                        <span>{material.nome}</span>
                                        <span>{material.quantidade}</span>
                                        <span>{material.apresentacao}</span>
                                    </li>
                                );
                                
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
