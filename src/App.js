import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";

function App() {
  const [mode, setMode] = useState("Light");

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      console.log("Dark");
    } else {
      setMode("Light");
      console.log("Light");
    }
  };

  document.body.style.backgroundColor = `${
    mode === "Light" ? "rgb(231 229 228)" : "rgb(38 38 38)"
  }`;
  return (
    <Router>
      <Navbar toggleMode={toggleMode} mode={mode}></Navbar>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} />} />
        <Route exact path="/home" element={<Home mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/login" element={<Login mode={mode} />} />
        <Route exact path="/signUp" element={<SignUp mode={mode} />} />
      </Routes>
    </Router>
  );
}

export default App;
