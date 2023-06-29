import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import Alert from "./Components/Alert";
import UserDetails from "./Components/Authentication/UserDetails";
import Profile from "./Components/DropdownPages/Profile";
import Collection from "./Components/DropdownPages/Collection";
import HelpCenter from "./Components/DropdownPages/HelpCenter";
import Settings from "./Components/DropdownPages/Settings";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
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

  document.body.style.backgroundColor = `${mode === "Light" ? "rgb(231 229 228)" : "rgb(38 38 38)"
    }`;
  return (
    <Router>
      <Navbar toggleMode={toggleMode} mode={mode} showAlert={showAlert}></Navbar>
      <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} />} />
        <Route exact path="/home" element={<Home mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
        <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert} />} />
        <Route exact path="/signUp" element={<SignUp mode={mode} showAlert={showAlert} />} />
        <Route exact path="/userDetails" element={<UserDetails mode={mode} showAlert={showAlert} />} />
        <Route exact path="/profile" element={<Profile mode={mode} showAlert={showAlert} />} />
        <Route exact path="/collection" element={<Collection mode={mode} showAlert={showAlert} />} />
        <Route exact path="/helpCenter" element={<HelpCenter mode={mode} showAlert={showAlert} />} />
        <Route exact path="/settings" element={<Settings mode={mode} showAlert={showAlert} />} />
      </Routes>
    </Router>
  );
}

export default App;
