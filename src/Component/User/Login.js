import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Logo from '../logo.png'

export default function Login() {
  const [id, setId] = useState("")
  const [passwd, setPasswd] = useState("")
  const Nav = useNavigate()
  const [,setCookie,] = useCookies(["login"])
  const [rememberID, setRememberID] = useState(false)
  const [toggle,setToggle] = useState(false)
  const DoLogin = () => {
    axios.defaults.withCredentials = true;
    if (id.length <= 6 || passwd.length <= 8){
      return
    }
    axios
      .post("http://localhost:4000/login", {
        id: id,
        passwd: passwd,
      },)
      .then((response) => {
        switch (response.data.status) {
          case 1:
            setCookie("login", response.data.data,{path:'/',maxAge: 7200, sameSite:'strict'});
            if (toggle){
              localStorage.setItem("rememberlogin", id)
            } else{
              localStorage.removeItem("rememberlogin")
            }
            
            Nav("/");
            break;
          default:
            break;
        }
      });
  };

  const ToggleRemember = () => {
    setRememberID(!rememberID);
  }

  const ToggleRememberMe = () => {
    setToggle(!toggle)
  }

  useEffect(()=> {
    const a = localStorage.getItem("rememberlogin")
    if (a !== null){
      setToggle(true)
      setId(a)
    }

  },[])

  return (
    <section className="bg-[#F4F7FF] py-20 h-screen flex justify-center items-center">
      <div className="w-full px-4">
        <div
          className="
              max-w-[525px]
              mx-auto
              text-center
              bg-white
              rounded-lg
              relative
              overflow-hidden
              py-16
              px-10
              sm:px-12
              md:px-[60px]
              "
        >
          <div className="mb-10 md:mb-16 text-center">
            <div
              className="inline-block max-w-[160px] mx-auto"
            >
              <img
                className="h-40 w-40"
                src={Logo}
                alt="logo"
              />
            </div>
          </div>
            <div className="mb-6">
              <input
                type="text"
                onChange={(e) => setId(e.target.value) }
                onKeyDown={(e) => {if(e.key ==='Enter'){DoLogin()}}}
                placeholder="Eメール"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-blue-500
                        "
                value={id}
              />
            </div>
            
            <div className="mb-2">
              <input
                type="password"
                onChange={(e) => setPasswd(e.target.value) }
                onKeyDown={(e) => {if(e.key ==='Enter'){DoLogin()}}}
                placeholder="パスワード"
                className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-blue-500
                        "
                value={passwd}
              />
            </div>
            <div className="flex justify-between my-6">
              <div className="text-[#adadad] hover:text-black ">
                <label><input type="Checkbox" onClick={() => ToggleRememberMe()} onChange={() => ToggleRemember()} checked={toggle} className="mr-4" />
              IDを覚える</label>
              </div>
              <div
              onClick={() => Nav("/login/resetpassword")}
              className="
                    text-sm
                    inline-block
                    text-[#adadad]
                    hover:text-black
                    "
              >
              パスワードを忘れた場合
              </div>
            </div>

            <div className="mb-10">
              <input
                type="button"
                onClick={() => DoLogin()}
                value="ログイン"
                className="
                        w-full
                        rounded-md
                        py-4
                        px-5
                        bg-blue-500
                        text-center text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
              />
            </div>
          <p className="text-base mb-6 text-[#adadad]">Connect With</p>
          <ul className="flex justify-between -mx-2 mb-12">
            <li className="px-2 w-full">
              <button
                className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#4064AC]
                        hover:bg-opacity-90
                        w-full
                        "
              >
                <svg
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
            <li className="px-2 w-full">
              <button
                className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#00c300]
                        hover:bg-opacity-90
                        w-full
                        "
              >
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="45" height="35"><path d="M25.12,44.521c-2.114,1.162-2.024-0.549-1.933-1.076c0.054-0.314,0.3-1.787,0.3-1.787c0.07-0.534,0.144-1.36-0.067-1.887 c-0.235-0.58-1.166-0.882-1.85-1.029C11.48,37.415,4.011,30.4,4.011,22.025c0-9.342,9.42-16.943,20.995-16.943S46,12.683,46,22.025 C46,32.517,34.872,39.159,25.12,44.521z M18.369,25.845c0-0.56-0.459-1.015-1.023-1.015h-2.856v-6.678 c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015v7.694c0,0.561,0.459,1.016,1.023,1.016h3.879 C17.91,26.863,18.369,26.406,18.369,25.845z M21.357,18.152c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015 v7.694c0,0.561,0.459,1.016,1.023,1.016c0.565,0,1.023-0.456,1.023-1.016V18.152z M30.697,18.152c0-0.56-0.459-1.015-1.023-1.015 c-0.565,0-1.025,0.455-1.025,1.015v4.761l-3.978-5.369c-0.192-0.254-0.499-0.406-0.818-0.406c-0.11,0-0.219,0.016-0.325,0.052 c-0.419,0.139-0.7,0.526-0.7,0.963v7.694c0,0.561,0.46,1.016,1.025,1.016c0.566,0,1.025-0.456,1.025-1.016v-4.759l3.976,5.369 c0.192,0.254,0.498,0.406,0.818,0.406c0.109,0,0.219-0.018,0.325-0.053c0.42-0.137,0.7-0.524,0.7-0.963V18.152z M36.975,20.984 h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015c0-0.56-0.46-1.015-1.025-1.015h-3.879c-0.565,0-1.023,0.455-1.023,1.015 c0,0.001,0,0.001,0,0.003v3.842v0.001c0,0,0,0,0,0.001v3.845c0,0.561,0.46,1.016,1.023,1.016h3.879 c0.565,0,1.025-0.456,1.025-1.016c0-0.56-0.46-1.015-1.025-1.015h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015 c0-0.561-0.46-1.016-1.025-1.016V20.984z"/></svg>
              </button>
            </li>
            <li className="px-2 w-full">
              <button
                className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        w-full
                        "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                    fill="white"
                  />
                </svg>
              </button>
            </li>
          </ul>
          <div className="flex justify-center">

            <button
              className="
              text-base
              inline-block
              mb-2
              w-full
              rounded-md
              p-2
              border
              shadow-sm
              text-[#adadad]
              hover:text-black
              "
              onClick={() => Nav('/register')}
            >
              登録
            </button>
          <div>
          </div>

            <span className="absolute top-1 right-1">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.39737"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 1.39737 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 1.39737 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 13.6943 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 13.6943 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 25.9911 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 25.9911 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="38.6026"
                  r="1.39737"
                  transform="rotate(-90 38.288 38.6026)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="1.99122"
                  r="1.39737"
                  transform="rotate(-90 38.288 1.99122)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 1.39737 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 13.6943 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 25.9911 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="26.3057"
                  r="1.39737"
                  transform="rotate(-90 38.288 26.3057)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.39737"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 1.39737 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.6943"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 13.6943 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="25.9911"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 25.9911 14.0086)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.288"
                  cy="14.0086"
                  r="1.39737"
                  transform="rotate(-90 38.288 14.0086)"
                  fill="#3056D3"
                />
              </svg>
            </span>
            <span className="absolute left-1 bottom-1">
              <svg
                width="29"
                height="40"
                viewBox="0 0 29 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="2.288"
                  cy="25.9912"
                  r="1.39737"
                  transform="rotate(-90 2.288 25.9912)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 14.5849 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="25.9911"
                  r="1.39737"
                  transform="rotate(-90 26.7216 25.9911)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="13.6944"
                  r="1.39737"
                  transform="rotate(-90 2.288 13.6944)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 14.5849 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="13.6943"
                  r="1.39737"
                  transform="rotate(-90 26.7216 13.6943)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="38.0087"
                  r="1.39737"
                  transform="rotate(-90 2.288 38.0087)"
                  fill="#3056D3"
                />
                <circle
                  cx="2.288"
                  cy="1.39739"
                  r="1.39737"
                  transform="rotate(-90 2.288 1.39739)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 14.5849 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="38.0089"
                  r="1.39737"
                  transform="rotate(-90 26.7216 38.0089)"
                  fill="#3056D3"
                />
                <circle
                  cx="14.5849"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 14.5849 1.39761)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.7216"
                  cy="1.39761"
                  r="1.39737"
                  transform="rotate(-90 26.7216 1.39761)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
