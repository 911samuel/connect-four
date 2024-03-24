import React from "react";

interface PlayerInfoProps {
  image: string;
  playerName: string;
  score: number;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({
  image,
  playerName,
  score,
}) => {
  return (
    <div className="player-info">
      <div className="player-image">
        <img src={image} alt={playerName} />
      </div>
      <h3 className="heading-s">{playerName}</h3>
      <h1 className="heading-l">{score}</h1>
    </div>
  );
};

export default PlayerInfo;
