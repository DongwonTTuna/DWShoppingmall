import React from "react";
export function Features() {
  return (
    <>
      <section className="h-auto bg-white">
        <div className="px-10 py-24 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:text-center">
            <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
              <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                ウェブサイト
              </span>
              を依頼する<br />
              新しい方法
            </h1>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">
            特徴
          </h2>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            <div className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
                  <circle cx="6" cy="14" r="3"></circle>
                  <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">HTTPS接続</h4>
              <p className="text-base text-center text-gray-500">
                保安性の優れたHTTPSを適用した仕様で構築されます。
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M18 8a3 3 0 0 1 0 6"></path>
                  <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"></path>
                  <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">報告</h4>
              <p className="text-base text-center text-gray-500">
                システムに不具合が生じた場合、事前に登録したメールに報告されます。
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                  <line x1="12" y1="12" x2="20" y2="7.5"></line>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <line x1="12" y1="12" x2="4" y2="7.5"></line>
                  <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">
                パッケージ化
              </h4>
              <p className="text-base text-center text-gray-500">
                パッケージをカートに追加するだけで機能の追加が出来ます。
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9l3 3l-3 3"></path>
                  <line x1="13" y1="15" x2="16" y2="15"></line>
                  <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">開発ツール</h4>
              <p className="text-base text-center text-gray-500">
                ウェブページの状況を一目に確認できるツールを提供いたします。
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="9.5" y1="11" x2="9.51" y2="11"></line>
                  <line x1="14.5" y1="11" x2="14.51" y2="11"></line>
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                  <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3"></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">更新の保証</h4>
              <p className="text-base text-center text-gray-500">
                デザインが変わることなく、ソースコードの最適化を行い、メールにてお知らせいたします。
              </p>
            </div>
            <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
              <div className="p-3 text-white bg-blue-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 "
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <line x1="15" y1="5" x2="15" y2="7"></line>
                  <line x1="15" y1="11" x2="15" y2="13"></line>
                  <line x1="15" y1="17" x2="15" y2="19"></line>
                  <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
                </svg>
              </div>
              <h4 className="text-xl font-medium text-gray-700">割引</h4>
              <p className="text-base text-center text-gray-500">
                多くの機能を追加すればするほど
                <br />
                割引率は上がります。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
