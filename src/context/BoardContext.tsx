import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import markerRed from "../assets/marker-red.svg";
import turnBackgroundRed from "../assets/turn-background-red.svg";
import turnBackgroundYellow from "../assets/turn-background-yellow.svg";
import markerYellow from "../assets/marker-yellow.svg";

interface BoardContextValue {
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  currentPlayer: "X" | "O";
  setCurrentPlayer: React.Dispatch<React.SetStateAction<"X" | "O">>;
  winner: string | null;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  turnTime: any;
  setTurnTime: React.Dispatch<React.SetStateAction<number>>;
  marker: string;
  setMarker: React.Dispatch<React.SetStateAction<string>>;
  markerPosition: { x: number; y: number } | null;
  setMarkerPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number } | null>
  >;
  scorePlayer1: number;
  setScorePlayer1: React.Dispatch<React.SetStateAction<number>>;
  scorePlayer2: number;
  setScorePlayer2: React.Dispatch<React.SetStateAction<number>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  switchPlayer: () => void;
  handlePlayAgain: () => void;
}

const BoardContext = createContext<BoardContextValue | null>(null);

export const useBoardContext = (): BoardContextValue => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }
  return context;
};

export const BoardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<string | null>(null);
  const [turnTime, setTurnTime] = useState<number>(30);
  const [marker, setMarker] = useState<string>(markerRed);
  const [markerPosition, setMarkerPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [scorePlayer1, setScorePlayer1] = useState<number>(0);
  const [scorePlayer2, setScorePlayer2] = useState<number>(0);
  const [background, setBackground] = useState<string>(turnBackgroundRed);

  useEffect(() => {
    const timer = setInterval(() => {
      setTurnTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (turnTime === 0) {
      setTurnTime(30);
      switchPlayer();
    }
  }, [turnTime]);

  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setMarker((prevMarker) =>
      prevMarker === markerRed ? markerYellow : markerRed
    );
    setBackground((prevBackground) =>
      prevBackground === turnBackgroundRed
        ? turnBackgroundYellow
        : turnBackgroundRed
    );
  };

  const handlePlayAgain = () => {
    setBoard([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);

    setWinner(null);
    setTurnTime(30);
    setMarker(currentPlayer === "X" ? markerYellow : markerRed );
    setMarkerPosition(null);
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  const contextValue: BoardContextValue = {
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    winner,
    setWinner,
    turnTime,
    setTurnTime,
    marker,
    setMarker,
    markerPosition,
    setMarkerPosition,
    scorePlayer1,
    setScorePlayer1,
    scorePlayer2,
    setScorePlayer2,
    background,
    setBackground,
    switchPlayer,
    handlePlayAgain,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};
