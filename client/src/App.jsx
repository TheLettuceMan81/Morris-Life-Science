import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Medicines from "./pages/Medicines";
import NewUser from "./pages/NewUser";
import AdminPanel from "./pages/AdminPanel";
import AdminLogin from "./pages/AdminLogin";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/medicines" element={<Medicines />} />
      <Route path="/signup" element={<NewUser />} />
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </Router>
);

export default App;
