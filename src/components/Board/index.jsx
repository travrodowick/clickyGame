import React, { useState } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid/grid.js";
import Card from "../Cards";
import characters from "../../cardInfo.json";
import Nav from "../Nav";

function Board() {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const handleInput = id => {
    // setClicked(clicked.push(id));
    if (clicked.includes(id) === true) {
      gameOver();
    } else {
      setClicked([...clicked, id]);
      setScore(clicked.length + 1);
      shuffleCharacters();
      if (score > topScore) {
        setTopScore(score + 1);
      }
    }
  };

  const gameOver = () => {
    setClicked([]);
  };

  // shuffle function to randomize the order of the characters array
  const shuffleCharacters = randomOrderCharacters => {
    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomOrderCharacters[i], randomOrderCharacters[j]] = [
        randomOrderCharacters[j],
        randomOrderCharacters[i]
      ];
    }
    console.log(randomOrderCharacters);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Nav score={score} topScore={topScore} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Clicky Game!?</h1>
              <h3>
                Click on an image to earn points, but don't click on any one
                more than once!
              </h3>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <Row>
                {characters.map(character => (
                  <Col size="md-4" key={character.id}>
                    <Card
                      //   id={character.id}
                      name={character.name}
                      image={character.image}
                      key={character.id}
                      //   clicked={clicked.includes(character.id)}
                      handleInput={() => handleInput(character.id)}
                    />
                  </Col>
                ))}
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Board;
