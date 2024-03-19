import React, { useEffect, useState } from "react";
import Slot from "../slots/Sloat";
import group12 from "../../assets/Group12.svg";
import { Link } from "react-router-dom";
import "./Board.css";
import turnBackgroundRed from "../../assets/turn-background-red.svg";
import player1 from "../../assets/player-one.svg";
import player2 from "../../assets/player-two.svg";
import marker from "../../assets/marker-red.svg";

interface BoardProps { }

const Board: React.FC<BoardProps> = () => {
  const [board, setBoard] = useState<string[][]>([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [turnTime, setTurnTime] = useState<number>(30);
  const [markerPosition, setMarkerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (x: number) => {
    setMarkerPosition({ x, y: 0 }); 
  };

  const handleMouseLeave = () => {
    setMarkerPosition(null); 
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTurnTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (turnTime === 0) {
      switchPlayer();
      setTurnTime(30);
    }
  }, [turnTime]);

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleMove = (col: number) => {
    if (winner || board[0][col] !== "") return; 
    const updatedBoard = [...board];
    let row = board.length - 1;
    while (row >= 0 && updatedBoard[row][col]) {
      row--;
    }
    if (row >= 0) {
      updatedBoard[row][col] = currentPlayer;
      setBoard(updatedBoard);
      const winner = checkWin(updatedBoard, row, col);
      if (winner) {
        setWinner(winner);
      } else {
        switchPlayer(); 
        setTurnTime(30); 
      }
    }
  };


  
  const checkWin = (board: string[][], row: number, col: number) => {
    // Check for vertical win
    for (let r = 0; r <= board.length - 4; r++) {
      if (
        board[r][col] &&
        board[r][col] === board[r + 1][col] &&
        board[r][col] === board[r + 2][col] &&
        board[r][col] === board[r + 3][col]
      ) {
        return board[r][col];
      }
    }

    // Check for horizontal win
    for (let c = 0; c <= board[row].length - 4; c++) {
      if (
        board[row][c] &&
        board[row][c] === board[row][c + 1] &&
        board[row][c] === board[row][c + 2] &&
        board[row][c] === board[row][c + 3]
      ) {
        return board[row][c];
      }
    }

    // Check for diagonal win (down-right)
    for (let r = 0; r <= board.length - 4; r++) {
      for (let c = 0; c <= board[r].length - 4; c++) {
        if (
          board[r][c] &&
          board[r][c] === board[r + 1][c + 1] &&
          board[r][c] === board[r + 2][c + 2] &&
          board[r][c] === board[r + 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }

    // Check for diagonal win (up-right)
    for (let r = 3; r < board.length; r++) {
      for (let c = 0; c <= board[r].length - 4; c++) {
        if (
          board[r][c] &&
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }

    return null;
  };

  const handleSlotClick = (y: number, x: number) => {
    console.log(`Slot at (${y}, ${x}) clicked`);
  };

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
          {markerPosition && typeof markerPosition.y !== "undefined" && (
            <img
              className="marker"
              src={marker}
              alt=""
              style={{
                top: markerPosition.y * 100 + "%",
                left: `calc(${
                  markerPosition.x * (100 / board[0].length)
                }% + 50px)`,
              }}
            />
          )}
          <div id="board">
            {board.map((row, i) =>
              row.map((ch, j) => (
                <Slot
                  key={`${i}-${j}`}
                  ch={ch}
                  y={i}
                  x={j}
                  onMouseEnter={() => handleMouseEnter(j)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleMove(j)}
                  onClickSlot={handleSlotClick}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="turn">
        <img src={turnBackgroundRed} alt="Turn Background" className="image" />
        <div className="text-overlay">
          <h4 className="heading-xs">{`PLAYER ${
            currentPlayer === "X" ? "1" : "2"
          }’S TURN`}</h4>
          <h1 className="heading-l">{`${turnTime}s`}</h1>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
};

export default Board;
