import "./App.css";
import Board from "./components/Board";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/board/*" element={<Board />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
