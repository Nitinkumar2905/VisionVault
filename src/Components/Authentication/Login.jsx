import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

const Login = (props) => {
  const host = "http://localhost:8000";
  const token = localStorage.getItem("token")
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/home");
      props.showAlert("Logged in successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={``} style={{ fontFamily: "sans-serif" }}>
        <div
          className={` mt-5 d-flex flex-column justify-content-center align-items-center`}
        >
          <h2
            className={`my-3 text-${props.mode === "Light" ? "dark" : "light"}`}
          >
            Login to Continue{" "}
          </h2>
          <form
            onSubmit={handleLogin}
            className={`mt-3 container`}
            style={{ maxWidth: "40vw" }}
          >
            <div className="mb-3">
              <label
                htmlFor="email"
                style={{ cursor: "pointer" }}
                className={`text-${
                  props.mode === "Light" ? "dark" : "light"
                } form-label`}
              >
                Email address
              </label>
              <input
                type="email"
                className={`form-control text-${
                  props.mode === "Light" ? "dark" : "light"
                } border-bottom email-tag border-${
                  props.mode === "Light" ? "dark" : "white"
                }`}
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={credentials.email}
                onChange={onChange}
                style={{
                  backgroundColor: "inherit",
                }}
              />
              <div
                id="emailHelp"
                style={{ cursor: "pointer" }}
                className={`text-${
                  props.mode === "Light" ? "dark" : "light"
                } form-text`}
              >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                style={{ cursor: "pointer" }}
                className={`text-${
                  props.mode === "Light" ? "dark" : "light"
                } form-label`}
              >
                Password
              </label>
              <input
                type="password"
                className={`form-control text-${
                  props.mode === "Light" ? "dark" : "light"
                } border border-${props.mode === "Light" ? "dark" : "white"}`}
                id="password"
                name="password"
                onChange={onChange}
                value={credentials.password}
                style={{
                  backgroundColor: "inherit",
                }}
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label
                className={`text-${
                  props.mode === "Light" ? "dark" : "white"
                } form-check-label`}
                htmlFor="exampleCheck1"
              >
                Check me out
              </label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
