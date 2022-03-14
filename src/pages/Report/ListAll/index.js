import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FiTrash2 } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';

import './styleAll.css';
import { openNav, closeNav } from './scripts'

import api from '../../../services/api';


export default function ListAll() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [profissional, setProfissional] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('listarCategoria').then(response2 => {
            setCategoria(response2.data);
        }).then(api.get('listarProfissional').then(response3 => {
            setProfissional(response3.data);
        })).then(api.get('listarMaterial').then(response => {
            setMateriais(response.data);
        }))
    }, []);

    function handleGetCategoria(int) {
        for (i in categoria) {
            if (categoria[i].id === int) {
                return categoria[i].nome;
            }
        }
    }

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

    async function handleDeletMaterial(id) {
        try {
            if (window.confirm(`Deletar ${handleGetMaterial(id)}`) === true) {
                await api.post('removermaterial', {
                    id: `${id}`
                });

                alert(`Material ${handleGetMaterial(id)} deletado!`);
                setMateriais(materiais.filter(material => material.id !== id));
            } else {
                alert('Exclusão cancelada');
            }

        } catch (err) {
            alert(err);
        }
    }

    async function handleModifier(id) {
        localStorage.setItem('idMaterial', id);

        navigate('/modifier');
    }


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
                <div id="contentListAll">
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
                    <ul className="result">
                        {
                            materiais.map(material => (
                                <li key={material.id}>
                                    <span>{handleGetCategoria(material.idCategoria)}</span>
                                    <span>{material.nome}</span>
                                    <span>{material.quantidade}</span>
                                    <span>{new Intl.DateTimeFormat().format(new Date(material.validade))}</span>
                                    <span>{material.apresentacao}</span>
                                    <span>{material.lote}</span>
                                    <span>{material.vigilancia === true ? "Sim" : "Não"}</span>
                                    <span>{handleGetProfissional(material.profissional)}</span>
                                    <span>
                                        <button onClick={() => handleModifier(material.id)}>
                                            <FiEdit size={20} color="323232" />
                                        </button>
                                        <button onClick={() => handleDeletMaterial(material.id)}>
                                            <FiTrash2 size={20} color="323232" />
                                        </button>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
