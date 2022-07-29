import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./logo.png";
import cookies from "js-cookies";

export default function Navi() {
  const Nav = useNavigate();
  const Name = useRef();
  const [CheckLogindata, SetCheckLogin] = useState();

  useEffect(() => {
    let a = JSON.parse(cookies.getItem("login"));
    if (a === null) {
      return SetCheckLogin(
        <div className="h-full w-full relative z-10 inline-flex whitespace-nowrap items-center space-x-3 md:ml-5 lg:justify-end">
          <button
            onClick={() => Nav("/login")}
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
          >
            ログイン
          </button>
        </div>
      );
    }
    Name.current = a["nickname"];
    SetCheckLogin(
      <div
        onMouseEnter={() => onHover()}
        className="border h-16 rounded-md shadow-md whitespace-nowrap text-center flex items-center justify-center"
      >
        <p>{Name.current}様</p>
      </div>
    );
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Logout = () => {
    cookies.removeItem("login");
    window.location.reload();
  };
  const onHover = () => {
    SetCheckLogin(
      <>
        <div
          onMouseEnter={() => onHover()}
          onMouseLeave={() => onOut()}
          className="absolute duration-500 transition-all child -top-[32px] h-80 w-full bg-white z-[10] border rounded-md shadow-md whitespace-nowrap group"
        > 
        <div
        className=" border-b h-16 rounded-md whitespace-nowrap flex items-center justify-center group"
        >
        <p>{Name.current}様</p>
      </div>
      <div id='hid' className="overfl h-[250px] invisible text-center">
          <div className="mt-2">
            <h1>ポイント：    64p</h1>
          </div>
          
          <div className="absolute bottom-2 flex  space-x-4 flex-row">
            <button onClick={() => Nav('/mypage')} className="bg-gray-200 p-2 rounded-md ml-2">
              Mypage
            </button>
            <button
              onClick={() => Logout()}
              className=" p-2 bg-red-400 rounded-md"
            >
              Logout
            </button>
          </div>
          </div>
        </div>
      </>
    );
  setTimeout(() =>{document.getElementById('hid').classList.remove('invisible')},400) 
  };
  const onOut = () => {
    SetCheckLogin(
      <div
        onMouseEnter={() => onHover()}
        className=" border h-16 rounded-md shadow-md whitespace-nowrap text-center flex items-center justify-center"
      >
        <p>{Name.current}様</p>
      </div>
    );
  };
  return (
    <section className="w-screen px-8 text-gray-700 bg-white body-font">
      <div className="container flex items-center  justify-between py-5 mx-auto md:flex-row max-w-7xl">
        <div>
          <button className="w-16 h-16" onClick={() => Nav("/")}>
            <img src={Logo} alt="" />
          </button>
        </div>
        <div>
          <nav className="flex items-center h-0 justify-center space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <div className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
              <button onClick={() => Nav("/")} className="block">
                Home
              </button>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-500 hover:text-gray-900"
                ></span>
              </span>
            </div>
            <div className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900">
              <button onClick={() => Nav("/products")} className="block">
                Product
              </button>
              <span className="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block w-full h-full transform bg-gray-500 hover:text-gray-900"
                ></span>
              </span>
            </div>
          </nav>
        </div>
        <div className="w-44 relative">{CheckLogindata}</div>
      </div>
      <hr className="mx-auto max-w-7xl" />
    </section>
  );
}
