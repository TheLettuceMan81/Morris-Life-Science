import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Medicines from "./pages/Medicines";
import AdminPanel from "./pages/AdminPanel";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default App;
