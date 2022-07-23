import React from 'react';
import Close from './icon/close.png'

export default function Failed() {
return (
    <div className="h-screen flex justify-center items-center">
        <div className="rounded-l-lg bg-blue-500 h-96 px-10 flex justify-center items-center">
            <img className="h-24 w-24" src={Close} alt=""/>
        </div>
        <div className="rounded-r-lg h-96 px-28 flex flex-col justify-center items-center bg-blue-300">
            <h4 className="font-bold mb-20">一致する情報が見つかりませんでした。</h4>
            <button onclick="window.location.host;" className="bg-gray-200 px-4 py-2 rounded-lg shadow-md hover:shadow-inner hover:shadow-gray-600 ">戻る</button>
        </div>
    </div>
)
}