import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import Login from './Component/User/Login'
import NoMatch from './Component/NotFound/NotFound';
import ViewProduct from './Component/Product/ViewProduct'
import ForgotPW from './Component/User/ForgotPW'
import Register from './Component/User/Register'
import Mypage from './Component/User/Mypage'


export default function AppRouter(){
    
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/products" element={<ViewProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/resetpassword" element={<ForgotPW />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="*" element={<NoMatch />}/>
    </Routes>
    </BrowserRouter>
    )
}