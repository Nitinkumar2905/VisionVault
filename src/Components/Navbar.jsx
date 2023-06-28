import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const ref = useRef();
  const refClose = useRef();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // const [isloading, setIsloading] = useState(false);
  const host = "http://localhost:8000";
  useEffect(() => {
    handleUserDetails();
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({ name: "", email: "" });
  const handleUserDetails = async () => {
    try {
      const response = await fetch(`${host}/api/auth/getUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      } else {
        const json = await response.json();
        // setIsloading(true);
        setUser({
          name: json.user.name,
          email: json.user.email,
          userId: json.user._id,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (e) => {
    ref.current.click();
  };

  const deleteUserConfirm = async (e) => {
    refClose.current.click();
    console.log("deleted");
    const response = await fetch(`${host}/api/auth/deleteUser/${user.userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    if (response.status === 404) {
      // Handle user not found error
      alert("User not found");
      return;
    }
    setIsloading(true);

    try {
      const json = await response.json();
      if (response.ok) {
        localStorage.removeItem("token");
        navigate("/signUp");
      } else {
        alert("Cannot process this request right now");
        console.log(json);
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while processing the request");
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
                <div className={`d-flex flex-row`}>
                  <div className="dropdown">
                    <button
                      onClick={handleUserDetails}
                      className="btn btn-primary dropdown-toggle me-1"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      User Info...
                    </button>
                    <ul
                      className={`px-3 my-3 dropdown-menu dropdown-menu-${
                        props.mode === "Light" ? "light" : "dark"
                      }`}
                    >
                      {localStorage.getItem("token") && (
                        <div
                          style={{}}
                          className={`p-2 text-primary`}
                        >
                          {user.email}
                        </div>
                      )}
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/profile" ? "active" : ""
                          }`}
                          to="/profile"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/collection" ? "active" : ""
                          }`}
                          to="/collection"
                        >
                          Collection
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${
                            location.pathname === "/settings" ? "active" : ""
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
                            location.pathname === "/help-center" ? "active" : ""
                          }`}
                          to="/help-center"
                        >
                          Help Centre
                        </Link>
                      </li>
                      <hr className="dropdown-divider"></hr>
                      <button
                        style={{ fontSize: "14px" }}
                        onClick={deleteUser}
                        className={`ms-3 mt-2 btn btn-${
                          props.mode === "Dark" ? "primary" : "dark"
                        } bg-${props.mode === "Dark" ? "black" : "primary"}`}
                      >
                        Delete Account
                      </button>
                    </ul>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary mx-1"
                  >
                    LogOut
                  </button>
                </div>
              )}
              <button
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                ref={ref}
                data-bs-target="#exampleModal"
              >
                Launch demo modal
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className={`modal-header`}>
                      <h1 className={`text-dark modal-title fs-5`} id="exampleModalLabel">
                        Account deletion confirmation
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className={`text-dark modal-body`}>
                      Do you really want to delete the account ?{" "}
                    </div>
                    <div className="modal-footer">
                      <button
                        ref={refClose}
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        onClick={deleteUserConfirm}
                        type="button"
                        className="btn btn-primary"
                      >
                        Yes, Delete it.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
