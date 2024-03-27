import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./components/Rules";
import { BoardProvider } from "./context/BoardContext";
import PlayerVsCpu from "./components/PlayerVsCpu";
import PlayerVsPlayer from "./components/PlayerVsPlayer";

function App() {
  return (
    <Router>
      <BoardProvider>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cpu/*" element={<PlayerVsCpu />} />
          <Route path="/game/*" element={<PlayerVsPlayer />} />
          <Route path="/rules/*" element={<Rules />} />
        </Routes>
      </BoardProvider>
    </Router>
  );
}

export default App;
