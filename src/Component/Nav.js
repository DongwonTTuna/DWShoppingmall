import React, { useState, useEffect, useRef } from "react"
import {useNavigate} from 'react-router-dom'
import Logo from "./logo.png"
import cookies from "js-cookies"

export default function Navi(){
    const Nav = useNavigate()
    const [CheckLogindata, SetCheckLogin] = useState()
    const p = useRef()
    useEffect(()=> {
        let a = cookies.getItem('login')
        if (a === null){
            return SetCheckLogin(<div className="h-full w-full relative z-10 inline-flex whitespace-nowrap items-center space-x-3 md:ml-5 lg:justify-end">
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
        a = JSON.parse(a)
        p.current = a['nickname']
        SetCheckLogin(
            <div onMouseOver={() => onHover()}  className="border h-16 rounded-md shadow-md whitespace-nowrap text-center">
                <><p className="mt-2" >いらっしゃいませ</p><p>{p.current}様</p></>
            </div>
        )
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const Logout = () => {
        cookies.removeItem('login')
        window.location.reload()
    }
    const Mypage = () => {

    }
    const onHover = () =>{
        SetCheckLogin(
            <div onMouseLeave={() => onOut()}  className="border h-16 rounded-md shadow-md whitespace-nowrap text-center flex justify-center space-x-1">
                <button onClick = {() => Mypage()} className="ml-2 py-1">
                    マイページ
                </button>
                <button onClick = {() => Logout()} className=" px-1 bg-red-400 rounded-md ">
                    ログアウト
                </button>

            </div>
        )
    }
    const onOut = () =>{
        SetCheckLogin(
            <div onMouseOver={() => onHover()}  className="border h-16 rounded-md shadow-md whitespace-nowrap text-center">
                <><p className="mt-2" >いらっしゃいませ</p><p>{p.current}様</p></>
            </div>
        )
    }
    return (
    <section className="relative w-screen px-8 text-gray-700 bg-white body-font">
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
            <div className=" w-44">{CheckLogindata}</div>
        </div>
    </section>
    );
}
