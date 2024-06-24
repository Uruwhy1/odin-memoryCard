import { useState, useEffect } from "react";
import "./styles/reset.css";
import "./styles.css";
import "./styles/variables.css";

import TitleHeader from "./components/TitleHeader.jsx";
import Game from "./components/Game.jsx";

export default function App() {
  

  return (
    <div className="container">
      <TitleHeader />
      <Game />
      <div className="footer">footer</div>
    </div>
  );
}
