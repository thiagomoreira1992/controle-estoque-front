import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Main from './pages/Main';
import Report from './pages/Report';
import Register from './pages/Register';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;