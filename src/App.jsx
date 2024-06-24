import { useState, useEffect } from "react";
import "./styles/reset.css";
import "./styles.css";
import "./styles/variables.css";

import TitleHeader from "./components/TitleHeader.jsx";
import Game from "./components/Game.jsx";

export default function App() {
  const [currentScore, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [movesArray, setMovesArray] = useState([]);

  return (
    <div className="container">
      <TitleHeader currentScore={currentScore} highScore={highScore} />
      <Game
        currentScore={currentScore}
        setScore={setScore}
        movesArray={movesArray}
        setMovesArray={setMovesArray}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <div className="footer">footer</div>
    </div>
  );
}
