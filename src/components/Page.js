import React from "react";
import Img from "../image/voto.png";

export default function Page() {
  return (
    <div class="flex flex-col justify-center items-center">
      <div class="flex flex-col justify-center items-center font-Jose text-7xl mt-5">
        voto.
      </div>
      <img src={Img} class="h-96 w-[430px] mt-14" />
    </div>
  );
}
