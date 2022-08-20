import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import CoverBuilder from "./services/CoverBuilder";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="/cover-builder" element={<CoverBuilder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
