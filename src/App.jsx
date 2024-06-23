import { useState } from "react";
import "./styles/reset.css";
import "./styles.css";
import "./styles/variables.css";

export default function App() {
  const [gameState, setGameState] = useState("stopped");

  return (
    <div className="container">
      {gameState === "stopped" && (
        <div className="instructions-container">
          <div className="instructions-card">
            <div className="center">
              <h1>Instructions</h1>
              <p>Welcome to the Memory Card Game!</p>
            </div>

            <ul> Here's how to play:
              <li>There are ten cards displayed on the screen.</li>
              <li>
                Your goal is to pick a card that you haven't picked before.
              </li>
              <li>
                If you pick a card that you have already chosen earlier in the
                game, you lose.
              </li>
              <li>
                The game continues until you pick a duplicate card or until you
                successfully pick all cards without repeating.
              </li>
              <li>
                Try to remember the cards you have picked to avoid choosing the
                same one again!
              </li>
            </ul>
            <p className="good-luck-message">Good luck and have fun!</p>
          </div>
          <button
            className="start-game"
            onClick={() => setGameState("started")}
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}
