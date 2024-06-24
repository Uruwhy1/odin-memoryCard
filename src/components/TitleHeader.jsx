/* eslint-disable react/prop-types */
import ModeToggle from './ModeToggle.jsx'; 


export default function TitleHeader() {
  return (
    <div className="title">
      <ModeToggle />
      <h1>Memory Card Game</h1>
      <p>Do not hit the same card twice!</p>
    </div>
  );
}
