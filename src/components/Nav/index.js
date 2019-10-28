import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      id="navContainer"
    >
      <a className="navbar-brand" href="/" id="title">
        Clicky Game
      </a>
      <div className="scores">
        Score: {props.score}|| Top Score: {props.topScore}
      </div>
    </nav>
  );
}

export default Nav;
