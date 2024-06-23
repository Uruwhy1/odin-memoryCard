import { useState, useEffect } from "react";
import "./styles/reset.css";
import "./styles.css";
import "./styles/variables.css";

import ModeToggle from './components/ModeToggle.jsx'; 

export default function App() {
  // LIGHT/DARK MODE HANDLER
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userPrefersDark) {
      setMode("dark");
    }
  }, []);

  const toggleMode = (arg) => {
    setMode(arg);
  };

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <div className="container">
      <div className="title">
        <ModeToggle mode={mode} toggleMode={toggleMode} />
        <h1>Memory Card Game</h1>
        <p>Do not hit the same card twice!</p>
      </div>
      <div className="game">game</div>
      <div className="footer">footer</div>
    </div>
  );
}
