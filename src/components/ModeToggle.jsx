import MoonIcon from "../assets/images/moon.svg?react";
import SunIcon from "../assets/images/sun.svg?react";

import "../styles/modetoggle.css";

export default function ModeToggle({ mode, toggleMode }) {
  return (
    <div className={"mode-toggle " + mode} onClick={() => toggleMode(mode === "dark" ? "light" : "dark")}>
      <MoonIcon className={mode === "dark" ? "light-up" : ""} />
      <p>|</p>
      <SunIcon className={mode === "light" ? "light-up" : ""} />
    </div>
  );
}
