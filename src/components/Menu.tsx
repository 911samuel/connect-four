import React from "react";
import Button from "./Button";
import player from "../assets/player-vs-player.svg";
import group12 from "../assets/Group12.svg";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <img src={group12} alt="logo" />
      <Button
        to="board"
        label="PLAY VS PLAYER"
        image={player}
        onClick={() => {}}
      />
      <Button
        to="rules"
        label="GAME RULES"
        backgroundColor="#FFFFFF"
        onClick={() => {}}
      />

      <div className="pause">
        <h1>PAUSE</h1>
        <Button
          to="board"
          backgroundColor="#FFFFFF"
          label="CONTINUE GAME"
          image={player}
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

export default Menu;
