import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/Main/';
import Report from './pages/Report';
import Register from './pages/Register';
import Move from './pages/Move';
import ListAll from './pages/Report/ListAll'
<<<<<<< HEAD
import ListMaterial from './pages/Report/ListMaterial'
import ListMedicamentos from './pages/Report/ListMedicamentos'
import ListPapelaria from './pages/Report/ListPapelaria'
import Modifier from './pages/Modifier';
=======
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/reports" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/move" element={<Move/>}/>
            <Route path="/reports/listall" element={<ListAll/>}/>
<<<<<<< HEAD
            <Route path="/reports/listmateriais" element={<ListMaterial/>}/>
            <Route path="/reports/listmedicamentos" element={<ListMedicamentos/>}/>
            <Route path="/reports/listpapelaria" element={<ListPapelaria/>}/>
            <Route path="/modifier" element={<Modifier/>}/>
=======
>>>>>>> d97c394ca8eacfc53c2925b49e2c0096319b66df
        </Routes>
    </BrowserRouter>
);

export default Router;