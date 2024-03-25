import React from "react";
import player1 from "../assets/player-one.svg";
import player2 from "../assets/player-two.svg";

interface PlayerDeviceProps {
  score: number;
}

const PlayerDevice: React.FC<PlayerDeviceProps> = ({
  score,
}) => {
  return (
    <>
      <div className="playerInfo">
        <div className="rightInfo">
          <div className="player-image">
            <img src={player1} alt="Player 1" />
          </div>
          <h3 className="heading-s">PLAYER 1</h3>
          <h1 className="heading-l">{score}</h1>
        </div>
        <div className="rightInfo right">
          <div className="player-image righImage">
            <img src={player2} alt="Player 2" />
          </div>
          <h1 className="heading-l">{score}</h1>
          <h3 className="heading-s">PLAYER 2</h3>
        </div>
      </div>
    </>
  );
};

export default PlayerDevice;
