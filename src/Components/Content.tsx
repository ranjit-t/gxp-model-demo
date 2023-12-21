import React, { useState } from "react";
import Screen1 from "./Screen1";
import open from "../assets/open.png";
import close from "../assets/close.png";
import Screen2 from "./Screen2";

export default function Content({ isMenuOpen, isDarkMode }: any) {
  const [isDoubleScreen, setisDoubleScreen] = useState(true);
  return (
    <div
      className=" h-full p-[1rem] transition-width ease-in-out duration-100 shadow-lg "
      style={{ width: isMenuOpen ? "calc(100% - 336px)" : "calc(100% - 48px)" }}
    >
      <button
        className="flex gap-2"
        onClick={() => setisDoubleScreen((prev) => !prev)}
      >
        <img
          src={isDoubleScreen ? close : open}
          alt=""
          className={`w-[2rem] h-[2rem] ${
            isDarkMode && "filter invert-[100%]"
          }`}
        />
      </button>
      <div className="w-full h-full h-[calc(100vh-64px-80px)] mt-[1rem] mt-b-[1rem] ">
        <Screen1 isDoubleScreen={isDoubleScreen} />
        <Screen2 isDoubleScreen={isDoubleScreen} />
      </div>
    </div>
  );
}
