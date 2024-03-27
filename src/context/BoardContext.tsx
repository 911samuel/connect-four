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
  cpuPlay: () => void;
  handleMove: (col: number) => void;
  handleResetAndRedirect: () => void;
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

  const handleMove = (col: number) => {
    if (winner || board[0][col] !== "") return;
    const updatedBoard = [...board];
    let row = board.length - 1;
    while (row >= 0 && updatedBoard[row][col]) {
      row--;
    }
    if (row >= 0) {
      updatedBoard[row][col] = currentPlayer;
      setBoard(updatedBoard);
      const winner = checkWin(updatedBoard, row, col);
      if (winner) {
        setWinner(winner);
        if (winner === "X") {
          setScorePlayer1(scorePlayer1 + 1);
        } else if (winner === "O") {
          setScorePlayer2(scorePlayer2 + 1);
        }
      } else {
        switchPlayer();
        setTurnTime(30);
      }
    }
  };

  const cpuPlay = () => {
    const availableCols: number[] = [];
    for (let col = 0; col < board[0].length; col++) {
      if (board[0][col] === "") {
        availableCols.push(col);
      }
    }
    if (availableCols.length > 0) {
      const randomCol =
        availableCols[Math.floor(Math.random() * availableCols.length)];
      handleMove(randomCol);
    }
  };

  const checkWin = (board: string[][], row: number, col: number) => {
    for (let r = 0; r <= board.length - 4; r++) {
      if (
        board[r][col] &&
        board[r][col] === board[r + 1][col] &&
        board[r][col] === board[r + 2][col] &&
        board[r][col] === board[r + 3][col]
      ) {
        return board[r][col];
      }
    }

    for (let c = 0; c <= board[row].length - 4; c++) {
      if (
        board[row][c] &&
        board[row][c] === board[row][c + 1] &&
        board[row][c] === board[row][c + 2] &&
        board[row][c] === board[row][c + 3]
      ) {
        return board[row][c];
      }
    }

    for (let r = 0; r <= board.length - 4; r++) {
      for (let c = 0; c <= board[r].length - 4; c++) {
        if (
          board[r][c] &&
          board[r][c] === board[r + 1][c + 1] &&
          board[r][c] === board[r + 2][c + 2] &&
          board[r][c] === board[r + 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }

    for (let r = 3; r < board.length; r++) {
      for (let c = 0; c <= board[r].length - 4; c++) {
        if (
          board[r][c] &&
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }

    return null;
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
    setBackground((prevBackground) =>
      prevBackground === turnBackgroundRed
        ? turnBackgroundYellow
        : turnBackgroundRed
    );
  };

  const handleResetAndRedirect = () => {
    handlePlayAgain();
    setMarker(markerRed);
    setCurrentPlayer("X");
    setBackground(turnBackgroundRed);
    setScorePlayer1(0);
    setScorePlayer2(0);
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
    cpuPlay,
    handleMove,
    handleResetAndRedirect,
  };

  return (
    <BoardContext.Provider value={contextValue}>
      {children}
    </BoardContext.Provider>
  );
};
