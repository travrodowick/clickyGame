import React from "react";
import "./App.css";

import { Container } from "./components/Grid/grid.js";
import Board from "./components/Board";
import GameOver from "./components/resetButton";

const App = () => {
  return (
    <div>
      <Container fluid>
        <Board />
        <GameOver />
      </Container>
    </div>
  );
};

export default App;
