import React from "react";
import Button from "./Button";
import "../styles/Pause.css";
import { useBoardContext } from "../context/BoardContext";

interface PauseProps {
  isVisible: boolean;
  onResume: () => void;
  onRestart: () => void;
}
const Pause: React.FC<PauseProps> = ({
  isVisible,
  onResume,
}) => {
  if (!isVisible) {
    return null;
  }
  const { handlePlayAgain } =
    useBoardContext();
  
  const handleRestartAndClose = () => {
    handlePlayAgain(); 
    onResume(); 
  };
  
  return (
    <div className="pause-overlay">
      <div className="pause">
        <h1>PAUSE</h1>
        <Button
          to="board"
          backgroundColor="#FFFFFF"
          label="CONTINUE GAME"
          onClick={onResume}
        />
        <Button
          to="board"
          label="RESTART"
          backgroundColor="#FFFFFF"
          onClick={handleRestartAndClose}
        />
        <Button to="/" label="QUIT GAME" backgroundColor="#FD6687" />
      </div>
    </div>
  );
};

export default Pause;
