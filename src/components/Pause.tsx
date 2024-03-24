import React from "react";
import Button from "./Button";
import "../styles/Pause.css";

interface PauseProps {
  isVisible: boolean;
}

const Pause: React.FC<PauseProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null; 
  }

  return (
    <div className="pause-overlay">
      <div className="pause">
        <h1>PAUSE</h1>
        <Button
          to="board"
          backgroundColor="#FFFFFF"
          label="CONTINUE GAME"
          onClick={() => {}}
        />
        <Button
          to="rules"
          label="RESTART"
          backgroundColor="#FFFFFF"
          onClick={() => {}}
        />
        <Button
          to="rules"
          label="QUIT GAME"
          backgroundColor="#FD6687"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Pause;
