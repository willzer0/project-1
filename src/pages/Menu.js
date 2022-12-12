import React from "react";

export default function AboutUsPage() {
  return (
    <body class="flex justify-center items-center">
      <div class="flex flex-col justify-center items-center h-[100%] w-[32%]">
        <div class="font-inter text-4xl mt-10 w-80">
          WELCOME TO UNKLAB barab kodo kasdhjfglkxncvlioeutksfndcg FORMS
        </div>
        <div class="flex flex-col justify-center items-center bg-blue-700 p-12 mt-8 rounded-lg">
          <div class="h-64 w-auto rounded-lg overflow-y-scroll">
            <a
              href="#"
              class="font-inter bg-red-300 h-20 w-80 flex flex-col justify-center items-center hover:bg-red-500 hover:underline"
            >
              PEMILIHAN PENGURUS BEM
            </a>
            <a
              href="#"
              class="font-inter bg-red-300 h-20 w-80 flex flex-col justify-center items-center hover:bg-red-500 hover:underline"
            >
              PEMILIHAN PENGURUS BEM
            </a>
            <a
              href="#"
              class="font-inter bg-red-300 h-20 w-80 flex flex-col justify-center items-center hover:bg-red-500 hover:underline"
            >
              PEMILIHAN REKTOR BARU
            </a>
            <a
              href="#"
              class="font-inter bg-red-300 h-20 w-80 flex flex-col justify-center items-center hover:bg-red-500 hover:underline"
            >
              VOTING LOKASI FIK DAY
            </a>
            <a
              href="#"
              class="font-inter bg-red-300 h-20 w-80 flex flex-col justify-center items-center hover:bg-red-500 hover:underline"
            >
              ASD
            </a>
          </div>
          <div class="h-32 w-full mt-5 flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="VOTE TOKEN"
              class="h-12 w-[90%] font-inter text-center rounded-md bg-zinc-300"
            />
            <button class="font-inter bg-zinc-300 h-12 w-[90%] rounded-md mt-4 hover:bg-zinc-400 hover:underline shadow-black shadow-sm">
              ENTER
            </button>
            <a
              href="#"
              class="font-inter text-1xl h-6 hover:underline hover:text-white"
            >
              CREATE YOUR OWN VOTE FORM
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
