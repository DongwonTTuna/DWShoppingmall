import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import cookies from "js-cookies";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let a = JSON.parse(cookies.getItem("login"));
export default function Mypage() {
  let Nav = useNavigate();
  let [ID, setID] = useState("");
  let [Passwd, setPasswd] = useState("");
  let [Nickname, setNickname] = useState("");
  const [, setCookie] = useCookies(["login"]);

  useEffect(() => {
    if (a === null) {
      alert("ログインの方からお願いします。");
      return Nav("/");
    }
    setID(a["email"]);
    setPasswd(a["passwd"]);
    setNickname(a["nickname"]);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UpdateInfo = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    let passwd = Passwd;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{9,}$/
    if (!regex.test(passwd)){
        return alert('パスワードを確認してください')
    }
    axios
      .post("http://localhost:4000/mypage", {
        id: a["id"],
        email: a["email"],
        passwd: a["passwd"],
        nickname: a["nickname"],
        data: { id: a["id"], email: ID, passwd: Passwd, nickname: Nickname },
      })
      .then((response) => {
        if (response.data.status === 1) {
          Object.assign(response.data.data, { passwd: passwd });
          setCookie("login", response.data.data, {
            path: "/",
            maxAge: 7200,
            sameSite: "strict",
          });
          window.location.href = 'http://localhost:3000/';
        }
      });
  };

  return (
    <section className="h-screen ">
      <div className="flex h-full items-center justify-center">
        <div className="rounded border rounded-md shadow-lg h-[760px] w-[540px]">
          <form
            onSubmit={(e) => UpdateInfo(e)}
            className="flex flex-col justify-center space-y-14"
          >
            <p className="p-20 bg-gray-400 rounded-t-md">
              変更する情報をご記入の上、確定ボタンを押してください。
            </p>
            <table className="border-separate border-spacing-y-16 m-auto text-center">
              <tbody>
                <tr>
                  <td>Email : </td>
                  <td>
                    <input
                      type="text"
                      className="w-[360px] border rounded-md"
                      defaultValue={ID}
                      onChange={(e) => setID(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>パスワード : </td>
                  <td>
                    <input
                      type="text"
                      className="w-[360px]  border rounded-md"
                      defaultValue={Passwd}
                      onChange={(e) => setPasswd(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>あだ名 : </td>
                  <td>
                    <input
                      type="text"
                      className="w-[360px]  border rounded-md"
                      defaultValue={Nickname}
                      onChange={(e) => setNickname(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="submit"
              className="p-2 w-20 m-auto bg-blue-300 rounded-md"
            >
              確定
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
