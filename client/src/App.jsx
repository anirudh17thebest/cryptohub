import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import Market from "./pages/Market/Market";
import CoinPage from "./pages/CoinPage/CoinPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/coin/:id" element={<CoinPage />} />
      </Routes>
    </Router>
  );
};

export default App;
