import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ParentMenu from "./Components/ParentMenu";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<ParentMenu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
