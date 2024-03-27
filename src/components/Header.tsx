import React, { useState } from "react";
import group12 from "../assets/Group12.svg";
import { Link } from "react-router-dom";
import Pause from "./Pause";
import "../styles/Header.css"
import { useBoardContext } from "../context/BoardContext";

const Header: React.FC = () => {
  const [showPause, setShowPause] = useState(false);
  const { handleResetAndRedirect } = useBoardContext();

  const handleRestart = () => {
    setShowPause(true);
  };

  const handleResume = () => {
    setShowPause(false);
  };

  return (
    <div className="header">
      <Link to={"/"} className="button-header" onClick={handleResetAndRedirect}>
        <h4 className="heading-xs">MENU</h4>
      </Link>
      <img src={group12} alt="logo" />
      <button className="button-header" onClick={handleRestart}>
        <h4 className="heading-xs">RESTART</h4>
      </button>
      <Pause
        isVisible={showPause}
        onResume={handleResume}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default Header;
