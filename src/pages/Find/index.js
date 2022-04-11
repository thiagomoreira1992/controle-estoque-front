import React, { Component, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Menu from '../../Components/Menu';

import { FiTrash2, FiEdit } from 'react-icons/fi';

import './stylesFind.css';
import { openNav, closeNav } from './scripts'



export default function Register() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [profissional, setProfissional] = useState([]);
    const [coluna, setColuna] = useState(1);
    const [busca, setBusca] = useState();

    useEffect(() => {
        api.get('listarCategoria').then(response2 => {
            setCategoria(response2.data);
        }).then(api.get('listarProfissional').then(response3 => {
            setProfissional(response3.data);
        })).then(setColuna(0));
    }, []);

    /*useEffect(()=> {
        api.get('listarBusca').then(response => {
            setMateriais(response.data);
    })}, [materiais]);*/

    const navigate = useNavigate();

    async function handleFind(e) {
        e.preventDefault();

        const data = {
            busca
        }
        try {
            const response = await api.post('listarBusca', data).then(response=> {
                setMateriais(response.data);
            });


        } catch (err) {
            alert(err);
        }
    }

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
        <div id="main-container">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <Menu></Menu>
            <div id="main">
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <spam>Controle de Materiais e Medicamentos</spam>
                </section>
                <div className="registro">
                    <form className="content" onSubmit={handleFind}>
                        <label>Nome:
                            <input
                                id="busca"
                                placeholder="Busca"
                                value={busca}
                                onChange={e => setBusca(e.target.value)}
                            />
                        </label>
                        <label className="formButton">
                            <button className="button" type="submit">Buscar</button>
                        </label>
                    </form>
                </div>
                <div id="contentListAll">
                    <ul>
                        <li>
                            <span className="ordenar" onClick={() => setColuna(1)}>Categoria</span>
                            <span className="ordenar" onClick={() => setColuna(2)}>Nome</span>
                            <span className="ordenar" onClick={() => setColuna(3)}>Quantidade</span>
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
            <script src="./scripts.js"></script>
        </div>
    );

}