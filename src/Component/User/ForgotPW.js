import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPW() {
    const Navi = useNavigate()
  return (
    <section className="bg-[#F4F7FF] py-20 h-screen flex justify-center items-center">
      <div
        className="
              w-[525px]
              text-center
              bg-gradient-to-bl
              from-white
              to-slate-50
              rounded-lg
              relative
              overflow-hidden
              py-16
              px-10
              sm:px-12
              md:px-[60px]
              "
      >
        <div className="
        bg-slate-200
        rounded-xl
        p-2
        ">
          <h4>
            送信したEメールの方に<br></br>パスワード再設定のリンクが送られます
          </h4>
        </div>

        <input
          className="
        w-full
        rounded-md
        border
        bordder-[#E9EDF4]
        py-3
        px-5
        mt-10
        bg-[#FCFDFE]
        text-base text-body-color
        placeholder-[#ACB6BE]
        outline-none
        focus-visible:shadow-none
        focus:border-blue-500
        "
          type="text"
          placeholder="Eメールを入力してください"
        ></input>
        <button
          className="
        mt-8
        border
        p-2
        rounded
        shadow-md
        hover:shadow-inner
        "
        onClick={() => Navi('/login')}
        >
          送信
        </button>
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
            ></circle>
            <circle
              cx="14.5849"
              cy="25.9911"
              r="1.39737"
              transform="rotate(-90 14.5849 25.9911)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="26.7216"
              cy="25.9911"
              r="1.39737"
              transform="rotate(-90 26.7216 25.9911)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="2.288"
              cy="13.6944"
              r="1.39737"
              transform="rotate(-90 2.288 13.6944)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="14.5849"
              cy="13.6943"
              r="1.39737"
              transform="rotate(-90 14.5849 13.6943)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="26.7216"
              cy="13.6943"
              r="1.39737"
              transform="rotate(-90 26.7216 13.6943)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="2.288"
              cy="38.0087"
              r="1.39737"
              transform="rotate(-90 2.288 38.0087)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="2.288"
              cy="1.39739"
              r="1.39737"
              transform="rotate(-90 2.288 1.39739)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="14.5849"
              cy="38.0089"
              r="1.39737"
              transform="rotate(-90 14.5849 38.0089)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="26.7216"
              cy="38.0089"
              r="1.39737"
              transform="rotate(-90 26.7216 38.0089)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="14.5849"
              cy="1.39761"
              r="1.39737"
              transform="rotate(-90 14.5849 1.39761)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="26.7216"
              cy="1.39761"
              r="1.39737"
              transform="rotate(-90 26.7216 1.39761)"
              fill="#3056D3"
            ></circle>
          </svg>
        </span>
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
            ></circle>
            <circle
              cx="1.39737"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 1.39737 1.99122)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="13.6943"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 13.6943 38.6026)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="13.6943"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 13.6943 1.99122)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="25.9911"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 25.9911 38.6026)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="25.9911"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 25.9911 1.99122)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="38.288"
              cy="38.6026"
              r="1.39737"
              transform="rotate(-90 38.288 38.6026)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="38.288"
              cy="1.99122"
              r="1.39737"
              transform="rotate(-90 38.288 1.99122)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="1.39737"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 1.39737 26.3057)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="13.6943"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 13.6943 26.3057)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="25.9911"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 25.9911 26.3057)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="38.288"
              cy="26.3057"
              r="1.39737"
              transform="rotate(-90 38.288 26.3057)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="1.39737"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 1.39737 14.0086)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="13.6943"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 13.6943 14.0086)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="25.9911"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 25.9911 14.0086)"
              fill="#3056D3"
            ></circle>
            <circle
              cx="38.288"
              cy="14.0086"
              r="1.39737"
              transform="rotate(-90 38.288 14.0086)"
              fill="#3056D3"
            ></circle>
          </svg>
        </span>
      </div>
    </section>
  );
}
