import React from "react";

const gameOver = ({ restartGame }) => (
  <button className="resetBtn" onClick={restartGame}>
    Play Again
  </button>
);
