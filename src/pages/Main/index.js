import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
<<<<<<< HEAD
import { ImArrowRight2 } from "react-icons/im";

import './styleMain.css';
import { openNav, closeNav} from './scripts'
=======
import { FiTrash2 } from 'react-icons/fi';
//import api from '../../services/api';

import './styleMain.css';
import { openNav, closeNav, closeNavClick } from './scripts'
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df

import api from '../../services/api';


export default function CheckValidity() {
    let i;
    const [materiais, setMateriais] = useState([]);
    const [categoria, setCategoria] = useState([]);
<<<<<<< HEAD
    const [profissional, setProfissional] = useState([]);
=======
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df

    useEffect(() => {
        /*api.get('listarMaterial').then(response => {
            setMateriais(response.data);
        }).then(api.get('listarCategoria')
        .then(response2 => {
            setCategoria(response2.data);
        }))*/
        api.get('listarCategoria').then(response2 => {
            setCategoria(response2.data);
<<<<<<< HEAD
        }).then(api.get('listarProfissional').then(response3 => {
            setProfissional(response3.data);
        })).then(api.get('verificaValidade').then(response => {
=======
        }).then(api.get('verificaValidade').then(response => {
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
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

<<<<<<< HEAD
    function handleGetProfissional(int) {
        for (i in profissional) {
            if (profissional[i].id === int) {
                return profissional[i].nome;
            }
        }
    }

=======
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
    async function handleDeletMaterial(id) {
        try {
            if (window.confirm(`Deletar ${handleGetMaterial(id)}`) == true) {
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
                <div id="contentCheckValidity">
                    <span>
                        <strong>Materiais próximos da data de Validade</strong>
                    </span>
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
                    <ul className="resultCheckValidity">
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
<<<<<<< HEAD
                                    <span>{handleGetProfissional(material.profissional)}</span>
=======
                                    <span>{material.profissional}</span>
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
                                </li>
                            ))
                        }
                    </ul>
<<<<<<< HEAD

                </div>

                <ImArrowRight2 size={250} color="2f436c"/>
=======
                </div>
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
            </div>
        </div>
    );
}
