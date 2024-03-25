import React, { useState } from "react";
import Slot from "./Slot";
import "../styles/Board.css";
import { useBoardContext } from "../context/BoardContext";

interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const {
    board,
    setBoard,
    marker,
    winner,
    setWinner,
    setTurnTime,
    switchPlayer,
    currentPlayer,
    scorePlayer1,
    setScorePlayer1,
    scorePlayer2,
    setScorePlayer2
  } = useBoardContext();

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
        if (winner === "X") {
          setScorePlayer1(scorePlayer1 + 1);
        } else if (winner === "O") {
          setScorePlayer2(scorePlayer2 + 1);
        }
      } else {
        switchPlayer();
        setTurnTime(30);
      }
    }
  };

  const checkWin = (board: string[][], row: number, col: number) => {
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

  return (
    <>
      <div className="board">
        {markerPosition && typeof markerPosition.y !== "undefined" && (
          <img
            className="marker"
            src={marker}
            alt=""
            style={{
              position: "absolute",
              top: "-35px",
              left: `calc(${
                markerPosition.x * (100 / board[0].length)
              }% + 25px)`,
              zIndex: 999,
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
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
