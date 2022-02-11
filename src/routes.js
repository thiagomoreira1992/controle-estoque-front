import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/Main/';
import Report from './pages/Report';
import Register from './pages/Register';
import Move from './pages/Move';
import ListAll from './pages/Report/ListAll'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/reports" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/move" element={<Move/>}/>
            <Route path="/reports/listall" element={<ListAll/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;