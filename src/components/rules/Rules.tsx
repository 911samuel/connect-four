import React from "react";
import './Rules.css'
import iconCheck from "../../assets/icon-check.svg"
import { Link } from "react-router-dom";

const Rule: React.FC = () => {
  return (
    <div className="rules">
      <div className="rule-container">
        <h1 className="heading-l">RULES</h1>
        <h3 className="heading-s">OBJECTIVE</h3>
        <p className="body-text">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
        <h3 className="heading-s">HOW TO PLAY</h3>
        <ol className="body-text">
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
        <Link to="/">
          <img src={iconCheck} alt="icon-check" className="iconCheck" />
        </Link>
      </div>
    </div>
  );
};

export default Rule;
