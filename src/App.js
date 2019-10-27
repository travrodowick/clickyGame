import React from "react";
import "./App.css";
import Game from "./pages";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Game />
    </div>
  );
}

export default App;
