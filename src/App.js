import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import { Col, Row, Container } from "./components/Grid/grid.js";
import Card from "./components/imageCards";
import characters from "./cardInfo.json";

class App extends Component {
  //setting initail state of the game
  state = {
    characters: characters,
    pickedThisMatch: [],
    score: 0,
    topScore: 0
  };

  // componentDidMount() {
  //   this.loadCards();
  // }

  //shuffle function to randomize the order of the characters array
  shuffleCharacters = randomOrderCharacters => {
    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [randomOrderCharacters[i], randomOrderCharacters[j]] = [
        randomOrderCharacters[j],
        randomOrderCharacters[i]
      ];
    }
    return randomOrderCharacters;
  };

  // loadCards = () => {
  //   shuffleCharacters()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Nav />
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
                  {this.state.characters.map((character, i) => (
                    <Col size="md-4">
                      <Card
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        key={i}
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
}

export default App;
