import "./App.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LikedProvider } from "./LikedContext";

// step 5:wrap the app with the provider so as to have all children having access to the LikedContext
function App() {
  return (
    <>
      <LikedProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liked" element={<Liked />} />
          </Routes>
        </Router>
      </LikedProvider>
    </>
  );
}

export default App;

