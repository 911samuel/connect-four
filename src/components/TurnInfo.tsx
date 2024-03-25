import React from "react";
import { useBoardContext } from "../context/BoardContext";
import winnerImage from "../assets/Rectangle.png";
import "../styles/TurnInfo.css"

const TurnInfo: React.FC = () => {
    
  const { background, turnTime, winner, currentPlayer, handlePlayAgain } =
    useBoardContext();

  let turnText = "";
  let backgroundImage = background;
  let timeDisplay = `${turnTime}s`;
  let textColor = winner ? "black" : "white"; 

  if (winner) {
    backgroundImage = winnerImage;
    turnText = `PLAYER ${winner === "X" ? "1" : "2"}`;
    timeDisplay = "WINS"; 
  } else {
    turnText = `PLAYER ${currentPlayer === "X" ? "1" : "2"}'S TURN`;
  }

  return (
    <div className="turn">
      <img src={backgroundImage} alt="Turn Background" className="image" />
      <div className="text-overlay" style={{ color: textColor }}>
        <h4 className="heading-xs">{turnText}</h4>
        <h1 className="heading-l">{`${timeDisplay}`}</h1>
        {winner && (
          <button
            className="try"
            onClick={handlePlayAgain}
            style={{
              backgroundColor:
                winner === "X" ? "var(--pink)" : "var(--purple-dark)",
            }}
          >
            PLAY AGAIN
          </button>
        )}
      </div>
    </div>
  );
};

export default TurnInfo;
