import React from "react";
import red from "../../assets/counter-red-large.svg";
import yellow from "../../assets/counter-yellow-large.svg";
import "./Slot.css";

interface SlotProps {
  ch: string | null;
  y: number;
  x: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: (col: number) => void;
  onClickSlot: (y: number, x: number) => void;
}

const imageStyle: React.CSSProperties = {
  width: "100%", 
  height: "auto",
};

const Slot: React.FC<SlotProps> = ({
  ch,
  y,
  x,
  onMouseEnter,
  onMouseLeave,
  onClick,
  onClickSlot,
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
        onClickSlot(y, x);
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
