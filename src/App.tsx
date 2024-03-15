import "./App.css";
import Board from "./components/board/Board";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rules from "./components/rules/Rules";
import Pause from "./components/pause/Pause";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/board/*" element={<Board />}></Route>
        <Route path="/rules/*" element={<Rules />}></Route>
        <Route path="/pause/*" element={< Pause />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
