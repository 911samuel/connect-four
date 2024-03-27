import React from "react";
import Header from "./Header";
import TurnInfo from "./TurnInfo";
import PlayerInfo from "./PlayerInfo";
import Board from "./Board";
import player1 from "../assets/player-one.svg";
import player2 from "../assets/player-two.svg";
import { useBoardContext } from "../context/BoardContext";
import PlayerDevice from "./PlayerDevice";

const PlayerVsPlayer: React.FC = () => {
  const { scorePlayer1, scorePlayer2, winner } = useBoardContext();
  

  return (
    <div>
      <Header />
      <div className="players-container">
        <PlayerInfo
          image={player1}
          playerName={"Player 1"}
          score={scorePlayer1}
        />
        < PlayerDevice />
        <Board />
        <PlayerInfo
          image={player2}
          playerName={"Player 2"}
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
