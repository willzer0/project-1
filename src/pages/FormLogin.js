import React from "react";
import Page from "../components/Page";

export default function Form() {
  return (
    <body>
      <div className=" flex flex-col justify-center items-center">
        <Page />
        <div className="absolute flex flex-col h-[500px] w-[400px] bg-[#575A89B2] mt-[300px] rounded-lg">
          <div className="flex flex-col h-[420px] w-[330px] m-auto mt-16 mx-12">
            <h1 className="text-5xl font-DM text-white">hi!</h1>
            <p className="text-[20px] text-white mt-2 font-light">
              login with your email and password
            </p>
            <div>
              <div className="flex flex-col justify-center items-start mt-12">
                <input
                  type="text"
                  placeholder="email"
                  className="border-b-[1px] border-white bg-transparent w-[280px] placeholder:text-white"
                ></input>
                <input
                  type="password"
                  placeholder="password"
                  className="border-b-[1px] border-white bg-transparent w-[280px] mt-11 placeholder:text-white"
                ></input>
              </div>
            </div>
          </div>
          <button className="mx-auto block bg-[#575A89B2] h-16 w-[80%] rounded-md hover:bg-slate-700 shadow-black shadow-sm text-center text-2xl mb-8">
            vote now!
          </button>
        </div>
      </div>
    </body>
  );
}
