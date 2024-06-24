/* eslint-disable react/prop-types */
import ModeToggle from "./ModeToggle.jsx";
import Scoreboard from "./Scoreboard.jsx";

export default function TitleHeader({ currentScore, highScore }) {
  return (
    <div className="title">
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <ModeToggle />
      <h1>Memory Card Game</h1>
      <p>Do not hit the same card twice!</p>
    </div>
  );
}
