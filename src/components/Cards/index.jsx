import React from "react";
import "./styles.css";

let styles = { width: "18rem" };

function Card({ handleInput, id, name, image, clicked }) {
  return (
    <div className="card" style={styles}>
      <img
        key={id}
        src={image}
        className="card-img-top"
        alt={name}
        onClick={() => handleInput(id)}
        clicked={clicked}
      />
    </div>
  );
}

export default Card;
