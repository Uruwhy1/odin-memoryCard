/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/game.css";
import Cards from "./Cards";
import wonImg from "../assets/images/won.gif";
import lostImg from "../assets/images/lost.gif";

export default function Game({
  movesArray,
  setMovesArray,
  setScore,
  currentScore,
  highScore,
  setHighScore,
}) {
  const [gameState, setGameState] = useState("playing");

  const handleClick = (id) => {
    if (movesArray.find((element) => element == id)) {
      setGameState("lost");
      setScore(0);
      setMovesArray([]);
    } else {
      setMovesArray((prevArray) => [...prevArray, id]);
      setScore(currentScore + 1);

      if (currentScore >= highScore) setHighScore(currentScore + 1);
      if (currentScore + 1 == 10) setGameState("won");
    }
  };

  const handleStart = () => {
    setScore(0);
    setMovesArray([]);
    setGameState("playing");
  };

  return (
    <div className="game">
      {gameState == "lost" && (
        <div className="message-container">
          <h1 className="losing">You lost!</h1>
          <img src={lostImg} alt="a" />
          <StartButton handleStart={handleStart} />
        </div>
      )}
      {gameState == "won" && (
        <div className="message-container">
          <h1 className="winning">You won!</h1>
          <img src={wonImg} alt="a" />
          <StartButton handleStart={handleStart} />
        </div>
      )}
      <Cards handleClick={handleClick} />
    </div>
  );
}

function StartButton({ handleStart }) {
  return <button onClick={handleStart}>Start Game</button>;
}
