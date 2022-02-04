import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/Main';
import Report from './pages/Report';
import Register from './pages/Register';
import Move from './pages/Move';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/reports" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/move" element={<Move/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;