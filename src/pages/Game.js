import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid/grid.js";

class Game extends Component {
  state = {
    pickedThisMatch: [],
    score: 0,
    topScore: 0
  };

  // componentDidMount() {
  //   this.loadCards();
  // }

  //   loadCards = () => {
  //     API.getBooks()
  //       .then(res => this.setState({ books: res.data }))
  //       .catch(err => console.log(err));
  //   };

  render() {
    return (
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
              {/* <Input name="title" placeholder="Title (required)" />
                 <Input name="author" placeholder="Author (required)" />
                 <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
                 <FormBtn>Submit Book</FormBtn> */}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
