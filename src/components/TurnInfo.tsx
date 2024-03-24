import React from "react";
import { useBoardContext } from "../context/BoardContext";
import winnerImage from "../assets/Rectangle.png";

const TurnInfo: React.FC = () => {
    
  const { background, turnTime, winner, currentPlayer, handlePlayAgain } =
    useBoardContext();

  let turnText = "";
  let backgroundImage = background;
  let timeDisplay = turnTime;

  if (winner) {
    backgroundImage = winnerImage;
    turnText = `PLAYER ${winner === "X" ? "1" : "2"} WINS`;
    timeDisplay = "WINS"; 
  } else {
    turnText = `PLAYER ${currentPlayer === "X" ? "1" : "2"}'S TURN`;
  }

  return (
    <div className="turn">
      <img src={backgroundImage} alt="Turn Background" className="image" />
      <div className="text-overlay">
        <h4 className="heading-xs">{turnText}</h4>
        <h1 className="heading-l">{`${timeDisplay}s`}</h1>
        {winner && <button onClick={handlePlayAgain}>PLAY AGAIN</button>}
      </div>
    </div>
  );
};

export default TurnInfo;
