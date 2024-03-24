import React, { useState } from "react";
import group12 from "../assets/Group12.svg";
import { Link } from "react-router-dom";
import Pause from "./Pause";

const Header: React.FC = () => {
  const [showPause, setShowPause] = useState(false);

  const handleRestart = () => {
    setShowPause(true);
  };

  return (
    <div className="header">
      <Link to={"/"} className="button-header">
        <h4 className="heading-xs">MENU</h4>
      </Link>
      <img src={group12} alt="logo" />
      <button className="button-header" onClick={handleRestart}>
        <h4 className="heading-xs">RESTART</h4>
      </button>
      <Pause isVisible={showPause} />
    </div>
  );
};

export default Header;
