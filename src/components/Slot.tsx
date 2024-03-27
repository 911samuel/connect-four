import React from "react";
import "../styles/Slot.css";

interface SlotProps {
  ch: string | null;
  y: number;
  x: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: (col: number) => void;
}

const Slot: React.FC<SlotProps> = ({
  ch,
  y,
  x,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const slotStyle: React.CSSProperties = {
    backgroundColor:
      ch === "X"
        ? "var(--pink)"
        : ch === "O"
        ? "var(--yellow)"
        : "var(--purple-light)",
    width: "100%",
    height: "100%",
  };

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
      style={slotStyle}
    >
    </div>
  );
};

export default Slot;
