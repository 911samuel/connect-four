import React from "react";
import Slot from "../slots/Sloat";
import group12 from "../../assets/Group12.svg";
import { Link } from "react-router-dom";
import "./Board.css";
import turnBackgroundRed from "../../assets/turn-background-red.svg";
import player1 from "../../assets/player-one.svg";
import player2 from "../../assets/player-two.svg";
import marker from "../../assets/marker-red.svg";

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
    <div>
      <div className="header">
        <Link to={"/"} className="button-header">
          <h4 className="heading-xs">MENU</h4>
        </Link>
        <img src={group12} alt="logo" />
        <Link to={"/pause"} className="button-header">
          <h4 className="heading-xs">RESTART</h4>
        </Link>
      </div>
      <div className="players-container">
        <div className="player-info player-info-right">
          <div className="player-image">
            <img src={player1} alt="Player 1" />
          </div>
          <h3 className="heading-s">PLAYER 1</h3>
          <h1 className="heading-l">12</h1>
        </div>
        <div className="player-info player-info-left">
          <div className="player-image">
            <img src={player2} alt="Player 2" />
          </div>
          <h3 className="heading-s">PLAYER 2</h3>
          <h1 className="heading-l">8</h1>
        </div>
        <div className="playerInfo">
          <div className="rightInfo">
            <div className="player-image">
              <img src={player1} alt="Player 1" />
            </div>
            <h3 className="heading-s">PLAYER 1</h3>
            <h1 className="heading-l">12</h1>
          </div>
          <div className="rightInfo right">
            <div className="player-image righImage">
              <img src={player2} alt="Player 2" />
            </div>
            <h1 className="heading-l">12</h1>
            <h3 className="heading-s">PLAYER 2</h3>
          </div>
        </div>
        <div className="board">
          <img className="marker" src={marker} alt="" />
          <div id="board">
            {board.map((row, i) =>
              row.map((ch, j) => <Slot key={`${i}-${j}`} ch={ch} y={i} x={j} />)
            )}
          </div>
        </div>
      </div>
      <div className="turn">
        <img src={turnBackgroundRed} alt="Turn Background" className="image" />
        <div className="text-overlay">
          <h4 className="heading-xs">PLAYER 1’S TURN</h4>
          <h1 className="heading-l">3s</h1>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Board;
