import React from "react";
import "./styles.css";
import characters from "../../cardInfo.json";

let styles = { width: "18rem" };

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

const Card = props => (
  <div className="card" style={styles}>
    <img
      //   key={props.}
      key={props.id}
      src={props.image}
      className="card-img-top"
      alt={props.name}
      onClick={shuffleCharacters()}
    />
  </div>
);

export default Card;
