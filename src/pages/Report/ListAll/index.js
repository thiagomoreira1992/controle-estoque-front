import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import Menu from '../../../Components/Menu';

import './styleAll.css';
import { openNav, closeNav } from './scripts'

import api from '../../../services/api';


export default function ListAll() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [profissional, setProfissional] = useState([]);
    const [coluna, setColuna] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        api.get('listarCategoria').then(response2 => {
            setCategoria(response2.data);
        }).then(api.get('listarProfissional').then(response3 => {
            setProfissional(response3.data);
        })).then(api.get('listarMaterial').then(response => {
            setMateriais(response.data);
        })).then(setColuna(0));
    }, []);

    useEffect(() => {
        const ordenar = (coluna) => {
            let ordenedMateriais;
            switch (coluna) {
                case 1:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.categoria < b.categoria)
                            return -1;
                        if (a.categoria > b.categoria)
                            return 1;
                        return 0;
                    });
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                case 2:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.nome < b.nome)
                            return -1;
                        if (a.nome > b.nome)
                            return 1;
                        return 0;
                    });
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                case 3:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.quantidade < b.quantidade)
                            return -1;
                        if (a.quantidade > b.quantidade)
                            return 1;
                        return 0;
                    });
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                case 4:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.validade < b.validade)
                            return -1;
                        if (a.validade > b.validade)
                            return 1;
                        return 0;
                    });
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
                default:
                    ordenedMateriais = materiais.sort((a, b) => {
                        if (a.id < b.id)
                            return -1;
                        if (a.id > b.id)
                            return 1;
                        return 0;
                    });
                    setMateriais(ordenedMateriais);
                    setColuna(0);
                    break;
            }

        }
        ordenar(coluna);
    }, [coluna])

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
                alert('Exclus??o cancelada');
            }

        } catch (err) {
            alert(err);
        }
    }

    async function handleModifier(id) {
        localStorage.setItem('idMaterial', id);

        navigate('/modifier');
    }

    /*function ordenar(coluna) {
        let ordenedMateriais;
        switch (coluna) {
            case 1:
                ordenedMateriais = materiais.sort((a, b) => {
                    if (a.categoria < b.categoria)
                        return -1;
                    if (a.categoria > b.categoria)
                        return 1;
                    return 0;
                });
                setMateriais(ordenedMateriais);
                break;
            case 2:
                ordenedMateriais = materiais.sort((a, b) => {
                    if (a.nome < b.nome)
                        return -1;
                    if (a.nome > b.nome)
                        return 1;
                    return 0;
                });
                setMateriais(ordenedMateriais);
                break;
            case 3:
                ordenedMateriais = materiais.sort((a, b) => {
                    if (a.quantidade < b.quantidade)
                        return -1;
                    if (a.quantidade > b.quantidade)
                        return 1;
                    return 0;
                });
                setMateriais(ordenedMateriais);
                break;
            case 4:
                ordenedMateriais = materiais.sort((a, b) => {
                    if (a.validade < b.validade)
                        return -1;
                    if (a.validade > b.validade)
                        return 1;
                    return 0;
                });
                setMateriais(ordenedMateriais);
                break;
            default:
                ordenedMateriais = materiais.sort((a, b) => {
                    if (a.id < b.id)
                        return -1;
                    if (a.id > b.id)
                        return 1;
                    return 0;
                });
                setMateriais(ordenedMateriais);
                break;
        }
    }*/





    return (
        <div id='main-container'>
            <Helmet>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Helmet>
            <Menu></Menu>
            <div id='main'>
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>???</p></button>
                    <span>Controle de Materiais e Medicamentos</span>
                </section>
                <section class="impressao">
                <Link to="/reports/listallprint" >Impress??o de Relat??rio</Link>
                </section>
                <div id="contentListAll">
                    <ul>
                        <li>
                            <span className="ordenar" onClick={() => setColuna(1)}>Categoria</span>
                            <span className="ordenar" onClick={() => setColuna(2)}>Nome</span>
                            <span className="ordenar" onClick={() => setColuna(3)}>Quantidade</span>
                            <span>Validade</span>
                            <span>Apresenta????o</span>
                            <span>Lote</span>
                            <span>Vigil??ncia</span>
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
                                    <span>{material.vigilancia === true ? "Sim" : "N??o"}</span>
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
