import axios from "axios";
import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
import Logo from "./logo.png"

export default function Navi(){
    const Nav = useNavigate();
    const [CheckLogindata, SetCheckLogin] = useState();
    const CheckLogin = () => {
        axios.get('http://localhost/php/dongwonmall/checklogin.php').then((response) => {
            console.log(response.data.login)
            if (response.data.login === 1){
                console.log(response.data.data)
            } else{
                SetCheckLogin(<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
                <button onClick={()=> Nav('/login')} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                ログイン
                </button>
                <span className="inline-flex rounded-md shadow-sm">
                    <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    登録 
                    </button>
                </span>
            </div>)
            }
        })



    }

  return (
  <section ref={() =>CheckLogin()} className="relative w-screen px-8 text-gray-700 bg-white body-font">
    <div className="container flex items-center  justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div><button className="w-16 h-16" onClick={()=> Nav('/')}><img  src={Logo} alt=""/></button></div>
        <div><nav className="flex items-center h-0 justify-center space-x-5 text-base md:-ml-5 md:py-0 md:absolute">

            <div  className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <button onClick={()=> Nav('/')} className="block">Home</button>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                    <span x-show="hover" className="absolute inset-0 inline-block w-full h-full transform bg-gray-500 hover:text-gray-900"></span>
                </span>
            </div>
            <div  className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
                <button onClick={()=> Nav('/products')} className="block">Product</button>
                <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                    <span x-show="hover" className="absolute inset-0 inline-block w-full h-full transform bg-gray-500 hover:text-gray-900"></span>
                </span>
            </div>
        </nav>
        </div>
        <div>{CheckLogindata}</div>
    </div>
  </section>
  );
}
