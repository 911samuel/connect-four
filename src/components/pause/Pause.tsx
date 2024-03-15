import React from "react";
import Button from "../button/Button";
import "./Pause.css";

const Pause: React.FC = () => {
  return (
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
  );
};

export default Pause;
