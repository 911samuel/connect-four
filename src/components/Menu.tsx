import React from "react";
import Button from "./Button";
import player from "../assets/player-vs-player.svg";
import group12 from "../assets/Group12.svg";
import "../styles/Menu.css";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <img className="group12" src={group12} alt="logo" />
      <Button
        to="cpu"
        label="YOU VS CPU"
        image={player}
        onClick={() => {}}
      />
      <Button
        to="game"
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
    </div>
  );
};

export default Menu;
