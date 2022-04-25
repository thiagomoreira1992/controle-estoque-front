import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/Main/';
import Report from './pages/Report';
import Register from './pages/Register';
import Move from './pages/Move';
import ListAll from './pages/Report/ListAll'
import ListMaterial from './pages/Report/ListMaterial'
import ListMedicamentos from './pages/Report/ListMedicamentos'
import ListPapelaria from './pages/Report/ListPapelaria'
import ListMovimentacao from './pages/Report/ListMonitoring'
import Modifier from './pages/Modifier';
import Find from './pages/Find';
import ListAllPrint from './pages/Report/ListAllPrint'
import ListOrder from './pages/Report/ListOrder';
import ListSpending from './pages/Report/ListSpend'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/reports" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/move" element={<Move/>}/>
            <Route path="/reports/listall" element={<ListAll/>}/>
            <Route path="/reports/listallprint" element={<ListAllPrint/>}/>
            <Route path="/reports/listmateriais" element={<ListMaterial/>}/>
            <Route path="/reports/listmedicamentos" element={<ListMedicamentos/>}/>
            <Route path="/reports/listpapelaria" element={<ListPapelaria/>}/>
            <Route path="/reports/listmovimentacoes" element={<ListMovimentacao/>}/>
            <Route path="/reports/listorder" element={<ListOrder/>}/>
            <Route path="/reports/listofspendings" element={<ListSpending/>}/>
            <Route path="/modifier" element={<Modifier/>}/>
            <Route path="/find" element={<Find/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;