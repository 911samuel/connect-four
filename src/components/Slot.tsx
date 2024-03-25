import React from "react";
import red from "../assets/counter-red-large.svg";
import yellow from "../assets/counter-yellow-large.svg";
import "../styles/Slot.css";

interface SlotProps {
  ch: string | null;
  y: number;
  x: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: (col: number) => void;
}

const imageStyle: React.CSSProperties = {
  width: "100%", 
  height: "100%", 
};

const Slot: React.FC<SlotProps> = ({
  ch,
  y,
  x,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <div
      className="slot"
      data-x={x}
      data-y={y}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        onClick(y);
      }}
    >
      {ch && (
        <img
          src={ch === "X" ? red : yellow}
          alt={ch === "X" ? "Red" : "Yellow Counter"}
          style={imageStyle}
        />
      )}
    </div>
  );
};

export default Slot;
