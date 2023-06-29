import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.showAlert("Logged out successfully", "success")
    navigate("/login");
  };

  const host = "http://localhost:8000";
  useEffect(() => {
    handleUserDetails();
    // eslint-disable-next-line
  }, []);

  const handleUserDetails = async () => {
    if (localStorage.getItem("token")) {
      const response = await fetch(`${host}/api/auth/getUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const json = await response.json();
        setUser({
          name: json.user.name,
          email: json.user.email,
          userId: json.user._id,
        });
      } else {
        throw new Error("Failed to fetch user details");
      }
    }
  };

  return (
    <>
      <div className="" style={{ fontFamily: "sans-serif" }}>
        <nav
          className={`shadow-lg m-3 text-${
            props.mode === "Light" ? "dark" : "white"
          } border border-${
            props.mode === "Light" ? "0" : "0"
          } rounded navbar navbar-expand-lg navbar-${props.mode} bg-${
            props.mode === "Light" ? "light" : "black"
          }`}
        >
          <div className={`container-fluid `}>
            <Link
              className={`navbar-brand text-${
                props.mode === "Light" ? "dark" : "white"
              }`}
              to="/"
            >
              VisionVault
            </Link>
            <button
              className={`navbar-toggler bg-white `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={`navbar-toggler-icon`}></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.mode === "Light" ? "dark" : "white"
                    } ${
                      location.pathname === "/home"
                        ? "text-decoration-underline"
                        : "text-decoration-none"
                    } link-underline-primary link-offset-2`}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link text-${
                      props.mode === "Light" ? "dark" : "white"
                    } ${
                      location.pathname === "/about"
                        ? "text-decoration-underline"
                        : "text-decoration-none"
                    } link-underline-primary link-offset-2`}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>

              <div className="d-flex align-items-center form-check form-switch mx-2">
                <input
                  className="form-check-input mx-1"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                  style={{ cursor: "pointer" }}
                />
                <label
                  className="form-check-label mt-1"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
              {!localStorage.getItem("token") ? (
                <div className="ms-1">
                  <Link to="/login" className="btn btn-primary me-1">
                    Login
                  </Link>
                  <Link to="signUp" className="btn btn-primary ms-1">
                    SignUp
                  </Link>
                </div>
              ) : (
                <div className={`d-flex flex-row`}>
                  <div className="dropdown">
                    <div
                      onClick={handleUserDetails}
                      className="btn btn-outline-primary dropdown-toggle me-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <ul
                      className={`dropdown-menu dropdown-menu-${
                        props.mode === "Light" ? "light" : "dark"
                      }`}
                    >
                      {localStorage.getItem("token")?(
                        <div
                          style={{}}
                          className={`px-3 pt-2 text-${
                            props.mode === "Light" ? "primary" : "white"
                          }`}
                        >
                          {user.email}
                          <hr className="dropdown divider"></hr>
                        </div>
                      ):<span className={`text-primary px-3 pt-2`}>Loading....</span>}
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/profile"
                              ? "text-primary"
                              : ""
                          }`}
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/collection"
                              ? "text-primary"
                              : ""
                          }`}
                          to="/collection"
                        >
                          Collection
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/settings"
                              ? "text-primary"
                              : ""
                          }`}
                          to="/settings"
                        >
                          Settings
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/help-center"
                              ? "text-primary"
                              : ""
                          }`}
                          to="/helpCenter"
                        >
                          Help Centre
                        </Link>
                      </li>
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline-primary  my-2 mx-3"
                        style={{ fontSize: "14px" }}
                      >
                        LogOut
                      </button>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
