import React from "react";
import red from "../assets/counter-red-large.svg";
import yellow from "../assets/counter-yellow-large.svg";

interface SlotProps {
  ch: string | null;
  y: number;
  x: number;
}

const Slot: React.FC<SlotProps> = ({ ch, y, x }) => {
  return (
    <div className="slot" data-x={x} data-y={y}>
      {ch && (
        <img
          src={ch === "X" ? red : yellow}
          alt={ch === "X" ? "Red" : "Yellow Counter"}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Slot;
