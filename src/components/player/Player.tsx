import React from "react";
import player1 from '../../assets/player-one.svg'
import player2 from '../../assets/player-two.svg'
import './Player.css'

const Player: React.FC = () => {
  const players = [
    { name: "PLAYER 1", score: 12, image: player1 },
    { name: "Player 2", score: 8, image: player2 },
  ];

  return (
    <div className="players-container">
      {players.map((player, index) => (
        <div key={index} className="player-info">
          <img src={player.image} alt="" />
          <h3>{player.name}</h3>
          <h4>Score: {player.score}</h4>
        </div>
      ))}
    </div>
  );
};

export default Player;
