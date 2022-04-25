import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import Select from 'react-select';

import Menu from '../../Components/Menu';

import './styles.css';
import { openNav, closeNav, closeNavClick } from './scripts'


let div;
export default function Move() {
    const [lote, setLote] = useState(null);
    const [quantidade, setQuantidade] = useState(null);
    const [profissional, setProfissional] = useState(null);
    const [optionProfissional, setOptionProfissional] = useState([]);

    const data = {
        lote,
        quantidade,
        profissional
    }

    useEffect(() => {
        api.get('listarProfissional').then(response => {
            setOptionProfissional(response.data.map(resposta => (
                { value: resposta.id, label: resposta.nome }
            )))
        });
        console.log(optionProfissional);
    }, [])

    function resetaBorda(campo) {
        document.getElementById(`${campo}`).style.borderColor = 'gray';
    }

    async function handleMove(e) {
        e.preventDefault();

        function verificaCampo(campo) {

            let condicao = true;
            console.log(campo + " " + typeof toString(campo))
            if (typeof campo === 'string' || campo instanceof String) {
                if (campo.lenght === 0 || campo === null) {
                    condicao = true
                } else {
                    condicao = false
                }
            } else if (campo === null) {
                condicao = true
            } else {
                condicao = false
            }
            /*if ((campo.length = 0 || campo === null ? condicao = true : condicao = false);*/
            console.log(condicao)
            return condicao;
        }

        function marcaCampo(campo) {
            document.getElementById(`${campo}`).focus();
            document.getElementById(`${campo}`).style.borderColor = 'red';
        }

        if (verificaCampo(lote)) {
            console.log(lote + '2');
            marcaCampo('lote');
        } else if (verificaCampo(quantidade)) {
            marcaCampo('quantidade')
        } else if (verificaCampo(profissional)) {
            marcaCampo('profissional')
        } else {
            try {
                const response = await api.post('criarMovimentacao', data)
                console.log(response);

                if (response.data.status === 200 ? alert(response.data.body) : alert(response.data.body));
                window.location.reload();


            } catch (err) {
                alert(err)
            }
        }

    }





    return (
        <div id='main-container'>
            <Helmet>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Helmet>
            <Menu></Menu>
            <div id='main'>
                <section className="menu">
                    <button className="openbtn" id="menuSide" onClick={openNav}><p>☰</p></button>
                    <span>Controle de Materiais e Medicamentos</span>
                </section>
                <div className="registro">
                    <form className="content" onSubmit={handleMove}>
                        <label>Lote:
                            <input
                                id="lote"
                                placeholder="Lote"
                                value={lote}
                                onChange={e => setLote(e.target.value)}
                                onKeyPress={() => resetaBorda('lote')}
                            />
                        </label>
                        <label>Quantidade:
                            <input
                                id="quantidade"
                                type='number'
                                placeholder="Quantidade"
                                value={quantidade}
                                onChange={e => setQuantidade(e.target.value)}
                                onKeyPress={() => resetaBorda('quantidade')}
                            />
                        </label>
                        <label>
                            Profissional:
                            {/*<Select
                                id="profissional"
                                className="react-select"
                                placeholder="Profissional"
                                options={optionProfissional}
                                name="Profissional"
                                defaultValue={profissional}
                                onChange={e => setProfissional(e.value)}                                
                                onClick={() => resetaBorda('profissional')}
    />*/}
                            <select id="profissional" value={profissional} onChange={e => setProfissional(e.target.value)} onClick={() => resetaBorda('profissional')}>
                                <option hidden selected>Profissional</option>
                                {optionProfissional.map(funcionario => (
                                    <option value={funcionario.value}>{funcionario.label}</option>
                                ))}
                            </select>
                        </label>
                        <label className="formButton">
                            <button className="button" type="submit">Cadastrar</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}
