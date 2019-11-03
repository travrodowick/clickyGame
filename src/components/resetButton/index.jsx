import React from "react";

const GameOver = ({ restartGame }) => (
  <button className="resetBtn" onClick={restartGame}>
    Play Again
  </button>
);

export default GameOver;
