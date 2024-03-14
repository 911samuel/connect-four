import React from "react";
import Slot from "../slots/Sloat";
import group12 from "../../assets/Group12.svg";
import { Link } from "react-router-dom";
import "./Board.css";
import turnBackgroundRed from "../../assets/turn-background-red.svg";
import Player from  "../player/Player";


interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];

  return (
    <>
      <div className="container">
        <div className="header">
          <Link to={"/"} className="button-header">
            <h4>MENU</h4>
          </Link>
          <img src={group12} alt="logo" />
          <Link to={"/"} className="button-header">
            <h4>RESTART</h4>
          </Link>
        </div>
        <div className="board">
          < Player />
          <div id="board">
          {board.map((row, i) => {
            return row.map((ch, j) => (
              <Slot key={`${i}-${j}`} ch={ch} y={i} x={j} />
            ));
          })}
        </div>
        </div>
        
        <div className="turn">
          <img src={turnBackgroundRed} alt="image" className="image" />
          <div className="text-overlay">
            <h4>PLAYER 1’S TURN</h4>
            <h1>3s</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
