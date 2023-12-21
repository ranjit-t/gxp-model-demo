import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";

import Header from "./Components/Header";
import Menu from "./Components/Menu";

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh]">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div
        className={`flex h-[calc(100vh-64px)] ${
          isDarkMode ? "bg-[#2d2d30] text-white" : ""
        } `}
      >
        <Menu setisMenuOpen={setisMenuOpen} isMenuOpen={isMenuOpen} />
        <Content
          isMenuOpen={isMenuOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>
    </div>
  );
}
