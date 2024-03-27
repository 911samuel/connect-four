import React from "react";
import player1 from "../assets/player-one.svg";
import player2 from "../assets/player-two.svg";
import { useBoardContext } from "../context/BoardContext";

const PlayerDevice: React.FC = () => {
  const { scorePlayer1, scorePlayer2 } = useBoardContext();

  return (
    <>
      <div className="playerInfo">
        <div className="rightInfo">
          <div className="player-image">
            <img src={player1} alt="Player 1" />
          </div>
          <h3 className="heading-s">PLAYER 1</h3>
          <h1 className="heading-l">{scorePlayer1}</h1>
        </div>
        <div className="rightInfo right">
          <div className="player-image righImage">
            <img src={player2} alt="Player 2" />
          </div>
          <h1 className="heading-l">{scorePlayer2}</h1>
          <h3 className="heading-s">PLAYER 2</h3>
        </div>
      </div>
    </>
  );
};

export default PlayerDevice;
