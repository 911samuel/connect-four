import React, { useEffect } from "react";
import Header from "./Header";
import TurnInfo from "./TurnInfo";
import PlayerInfo from "./PlayerInfo";
import Board from "./Board";
import player1 from "../assets/player-one.svg";
import player2 from "../assets/player-two.svg";
import { useBoardContext } from "../context/BoardContext";
import PlayerDevice from "./PlayerDevice";

const PlayerVsPlayer: React.FC = () => {
    const {
      scorePlayer1,
      currentPlayer,
      scorePlayer2,
      winner,
      board,
      handleMove,
    } = useBoardContext();
     useEffect(() => {
       if (currentPlayer === "O" && !winner) {
         setTimeout(() => {
           cpuPlay();
         }, 1000);
       }
     }, [currentPlayer, winner]);
    
     const cpuPlay = () => {
       const availableCols: number[] = [];
       for (let col = 0; col < board[0].length; col++) {
         if (board[0][col] === "") {
           availableCols.push(col);
         }
       }
       if (availableCols.length > 0) {
         const randomCol =
           availableCols[Math.floor(Math.random() * availableCols.length)];
         handleMove(randomCol);
       }
     };


  return (
    <div>
      <Header />
      <div className="players-container">
        <PlayerInfo
          image={player1}
          playerName={"you"}
          score={scorePlayer1}
        />
        <PlayerDevice />
        <Board />
        <PlayerInfo
          image={player2}
          playerName={"cpu"}
          score={scorePlayer2}
        />
      </div>
      <TurnInfo />
      <footer
        className="footer"
        style={{
          backgroundColor:
            winner === "X" || winner === "O"
              ? "var(--pink)"
              : "var(--purple-dark)",
        }}
      ></footer>
    </div>
  );
};

export default PlayerVsPlayer;
