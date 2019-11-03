import React, { useState } from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row, Container } from "../Grid/grid.js";
import Card from "../Cards";
import characters from "../../cardInfo.json";

function Board() {
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState();

  const handleInput = id => {
    setClicked([id]);
  };

  setScore = () => {
    score.setState(score++);
  };

  //shuffle function to randomize the order of the characters array
  const shuffleCharacters = randomOrderCharacters => {
    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomOrderCharacters[i], randomOrderCharacters[j]] = [
        randomOrderCharacters[j],
        randomOrderCharacters[i]
      ];
    }
  };

  return (
    <div>
      <Container fluid>
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
                  <Col size="md-4">
                    <Card
                      id={character.id}
                      name={character.name}
                      image={character.image}
                      key={character.id}
                      clicked={clicked.includes(character.id)}
                      handleInput={
                        (() => handleInput(character.id), shuffleCharacters())
                      }
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
