/* eslint-disable react/prop-types */
import "../styles/game.css";
import Cards from "./Cards";

export default function Game({
  movesArray,
  setMovesArray,
  setScore,
  currentScore,
  highScore,
  setHighScore,
}) {
  const handleClick = (id) => {
    if (movesArray.find((element) => element == id)) {
      alert("LOST XD");
      setScore(0);
      setMovesArray([]);
    } else {
      setMovesArray((prevArray) => [...prevArray, id]);
      setScore(currentScore + 1);

      if (currentScore >= highScore) setHighScore(currentScore + 1);
    }
  };

  return (
    <div className="game">
      <Cards handleClick={handleClick} />
    </div>
  );
}
