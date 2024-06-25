import { useEffect, useState } from "react";
import "./styles/reset.css";
import "./styles.css";
import "./styles/variables.css";

import TitleHeader from "./components/TitleHeader.jsx";
import Game from "./components/Game.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [currentScore, setScore] = useState(0);
  
  const [movesArray, setMovesArray] = useState([]);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem("highScore");
    return storedHighScore ? JSON.parse(storedHighScore) : 0;
  });

  useEffect(() => {
    localStorage.setItem("highScore", JSON.stringify(highScore));
  }, [highScore]);

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
      <Footer />
    </div>
  );
}
