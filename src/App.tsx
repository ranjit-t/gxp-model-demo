import { useState } from "react";
import "./App.css";
import Content from "./Components/Content";

import Header from "./Components/Header";
import Menu from "./Components/Menu";

export default function App() {
  const [isMenuOpen, setisMenuOpen] = useState(true);
  return (
    <div className="w-[100vw] h-[100vh]">
      <Header />
      <div className="flex h-[calc(100vh-64px)]">
        <Menu setisMenuOpen={setisMenuOpen} isMenuOpen={isMenuOpen} />
        <Content isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}
