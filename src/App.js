import "./App.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/liked' element={<Liked />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

