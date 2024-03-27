import React from "react";
import player1 from "../assets/player-one.svg";
import player2 from "../assets/player-two.svg";
import { useBoardContext } from "../context/BoardContext";

interface PlayerDeviceProps {
  gameMode: "playerVsPlayer" | "playerVsCpu"; 
}

const PlayerDevice: React.FC<PlayerDeviceProps> = ({ gameMode }) => {
  const { scorePlayer1, scorePlayer2 } = useBoardContext();

  return (
    <>
      <div className="playerInfo">
        <div className="rightInfo">
          <div className="player-image">
            <img src={player1} alt="Player 1" />
          </div>
          <h3 className="heading-s">
            {gameMode === "playerVsPlayer" ? "PLAYER 1" : "YOU"}
          </h3>
          <h1 className="heading-l">{scorePlayer1}</h1>
        </div>
        <div className="rightInfo right">
          <div className="player-image righImage">
            <img src={player2} alt="Player 2" />
          </div>
          <h1 className="heading-l">{scorePlayer2}</h1>
          <h3 className="heading-s">
            {gameMode === "playerVsPlayer" ? "PLAYER 2" : "CPU"}
          </h3>
        </div>
      </div>
    </>
  );
};

export default PlayerDevice;
