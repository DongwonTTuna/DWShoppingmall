import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Top from './App';
import Login from './Component/User/Login'
import NoMatch from './Component/NotFound/NotFound';
import School from './Component/Overay/School';
import ViewProduct from './Component/Product/ViewProduct'
import ForgotPW from './Component/User/ForgotPW'
import Register from './Component/User/Register'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Top />} />
        <Route path="products" element={<ViewProduct />} />
        <Route path="school" element={<School />} />
        <Route path="login" element={<Login />} />
        <Route path="/login/resetpassword" element={<ForgotPW />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch />}/>
    </Routes>
    </BrowserRouter>
);