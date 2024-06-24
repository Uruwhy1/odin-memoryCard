/* eslint-disable react/prop-types */
import "../styles/scoreboard.css";

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <p>High Score: {highScore}</p>
      <p>Current Score: {currentScore}</p>
    </div>
  );
}
