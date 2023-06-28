import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
              {/* <form className="d-flex mx-2" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
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
                <div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary mx-1"
                  >
                    LogOut
                  </button>
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
