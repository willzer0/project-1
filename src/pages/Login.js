import React from "react";
import Img from "../image/img.png";
export default function AboutUsPage() {
  return (
    <body class="flex justify-center items-center self-center">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center font-inter text-4xl mt-10">
          WELCOME TO <br />
          UNKLAB FORMS
        </div>
        <img src={Img} class="h-96 w-80 " />
        <div class="h-20 w-32 mt-1 text-1xl">
          <p class="text-center">infoinfoinfoinfo</p>
          <p class="text-center">infoinfoinfo</p>
          <p class="text-center">info</p>
        </div>
        <div class="bg-zinc-300 h-20 w-[100%] rounded-md hover:bg-slate-500 shadow-black shadow-sm text-center pt-5 ">
          <button class="text-2xl">LOGIN</button>
        </div>
      </div>
    </body>
  );
}
