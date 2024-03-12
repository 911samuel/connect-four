import React, { useState } from "react";
import Slot from "./Sloat";

interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);

  const [currPlayer, setCurrPlayer] = useState<"X" | "O">("X");
  const [oppPlayer, setOppPlayer] = useState<"X" | "O">("O");
  const [gameOver, setGameOver] = useState(false);

  const checkWin = (row: number, column: number, ch: string): boolean => {
    try {
      if (
        board[row + 1][column] === ch &&
        board[row + 2][column] === ch &&
        board[row + 3][column] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row + 1][column + 1] === ch &&
        board[row + 2][column + 2] === ch &&
        board[row + 3][column + 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row + 1][column - 1] === ch &&
        board[row + 2][column - 2] === ch &&
        board[row + 3][column - 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row][column + 1] === ch &&
        board[row][column + 2] === ch &&
        board[row][column + 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row][column - 1] === ch &&
        board[row][column - 2] === ch &&
        board[row][column - 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row - 1][column - 1] === ch &&
        board[row - 2][column - 2] === ch &&
        board[row - 3][column - 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    try {
      if (
        board[row - 1][column + 1] === ch &&
        board[row - 2][column + 2] === ch &&
        board[row - 3][column + 3] === ch
      ) {
        return true;
      }
    } catch (e) {
      console.log(e);
    }

    return false;
  };

  const updateBoard = (row: number, column: number, ch: string): boolean => {
    setBoard((prev) => {
      const boardCopy = [...prev];
      boardCopy[row][column] = ch;
      return boardCopy;
    });
    return checkWin(row, column, ch);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const column = Number(target.getAttribute("x"));
    let row = board.findIndex((rowArr, index) => {
      return rowArr[column] !== "" || index === board.length - 1;
    });
    if (row !== board.length - 1) row -= 1;
    if (board[row][column] !== "") row -= 1;

    const isWin = updateBoard(row, column, currPlayer);
    setGameOver(isWin);

    if (!isWin) {
      const currPlayerCopy = currPlayer;
      setCurrPlayer(oppPlayer);
      setOppPlayer(currPlayerCopy);
    }
  };

  return (
    <>
      <div className="container">
        {gameOver && (
          <h1>Game Over! {oppPlayer === "X" ? "Red" : "Black"} Wins!</h1>
        )}
        <h2 id="playerDisplay">{currPlayer === "X" ? "Red" : "Black"} Move</h2>
        <div id="board" onClick={gameOver ? undefined : handleClick}>
          {board.map((row, i) => {
            return row.map((ch, j) => (
              <Slot key={`${i}-${j}`} ch={ch} y={i} x={j} />
            ));
          })}
        </div>
      </div>
    </>
  );
};

export default Board;
