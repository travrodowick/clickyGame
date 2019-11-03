import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Row, Col, Container } from "./components/Grid/grid.js";
import Board from "./components/Board";
import GameOver from "./components/resetButton";
// import characters from "./cardInfo.json";

const App = () => {
  //setting initail state of the game

  // const [clicked, setClicked] = useState([]);
  // const [score, setScore] = useState(0);
  // const [topScore, setTopScore] = useState(0);
  // const [cards, setCards] = useState([]);

  // const handleInput = id => {
  //   setClicked([id]);
  //   setScore(clicked.length);
  // };

  //shuffle function to randomize the order of the characters array
  // const shuffleCharacters = randomOrderCharacters => {
  //   for (let i = characters.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [randomOrderCharacters[i], randomOrderCharacters[j]] = [
  //       randomOrderCharacters[j],
  //       randomOrderCharacters[i]
  //     ];
  //   }
  // };
  // setScore = () => {
  //   if (clicked.length > score) {
  //     score = clicked.length;
  //   }
  // };

  // updateHighScore = () => {
  //   if (this.state.score > this.state.topScore) {
  //     topScore = score;
  //     score++;
  //     this.setState({ score });
  //   }
  // };

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
