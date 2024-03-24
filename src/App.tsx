import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./components/Rules";
import Game from "./components/Game";
import { BoardProvider } from "./context/BoardContext";

function App() {
  return (
    <Router>
      <BoardProvider>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game/*" element={<Game />} />
          <Route path="/rules/*" element={<Rules />} />
        </Routes>
      </BoardProvider>
    </Router>
  );
}

export default App;
