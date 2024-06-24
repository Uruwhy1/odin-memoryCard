/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import MoonIcon from "../assets/images/moon.svg?react";
import SunIcon from "../assets/images/sun.svg?react";


export default function ModeToggle() {

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
    <div
      className={"mode-toggle " + mode}
      onClick={() => toggleMode(mode === "dark" ? "light" : "dark")}
    >
      <MoonIcon className={mode === "dark" ? "light-up" : ""} />
      <p>|</p>
      <SunIcon className={mode === "light" ? "light-up" : ""} />
    </div>
  );
}
