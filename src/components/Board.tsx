import React, { useState } from "react";
import Slot from "./Slot";
import "../styles/Board.css";
import { useBoardContext } from "../context/BoardContext";

interface BoardProps {}

const Board: React.FC<BoardProps> = () => {
  const {
    board,
    marker,
    handleMove
  } = useBoardContext();

  const [markerPosition, setMarkerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);


  const handleMouseEnter = (x: number) => {
    setMarkerPosition({ x, y: 0 });
  };

  const handleMouseLeave = () => {
    setMarkerPosition(null);
  };

  return (
    <>
      <div className="board">
        {markerPosition && typeof markerPosition.y !== "undefined" && (
          <img
            className="marker"
            src={marker}
            alt=""
            style={{
              position: "absolute",
              top: "-35px",
              left: `calc(${
                markerPosition.x * (100 / board[0].length)
              }% + 25px)`,
              zIndex: 999,
            }}
          />
        )}
        <div id="board">
          {board.map((row, i) =>
            row.map((ch, j) => (
              <Slot
                key={`${i}-${j}`}
                ch={ch}
                y={i}
                x={j}
                onMouseEnter={() => handleMouseEnter(j)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMove(j)}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
