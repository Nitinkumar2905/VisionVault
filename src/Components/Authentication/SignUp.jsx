import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const navigate = useNavigate();
  const host = "http://localhost:8000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = credentials;
    if (credentials.password === credentials.cpassword) {
      const response = await fetch(`${host}/api/auth/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
      const json = await response.json();

      if (json.success) {
        localStorage.setItem("token", json.authToken);
        navigate("/home");
        props.showAlert("Account created successfully", "success");
      } else {
        props.showAlert("User already exists with this email", "danger");
      }
    } else {
      props.showAlert("Password must be same", "warning")
    }
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
            New to VisionVault ? SignUp Now
          </h2>
          <form
            onSubmit={handleSignUp}
            className={`mt-3 container`}
            style={{ maxWidth: "40vw" }}
          >
            <div className="mb-3">
              <label
                htmlFor="name"
                style={{ cursor: "pointer" }}
                className={`text-${
                  props.mode === "Light" ? "dark" : "light"
                } form-label`}
              >
                Name
              </label>
              <input
                type="text"
                className={`input-outline-none form-control text-${
                  props.mode === "Light" ? "dark" : "light"
                } border border-${props.mode === "Light" ? "dark" : "white"}`}
                id="name"
                name="name"
                required
                onChange={onChange}
                value={credentials.name}
                style={{
                  backgroundColor: "inherit",
                }}
              />
            </div>
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
                } border border-${props.mode === "Light" ? "dark" : "white"}`}
                id="email"
                name="email"
                required
                onChange={onChange}
                value={credentials.email}
                aria-describedby="emailHelp"
                style={{
                  backgroundColor: "inherit",
                }}
              />
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
                required
                value={credentials.password}
                style={{
                  backgroundColor: "inherit",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="cpassword"
                style={{ cursor: "pointer" }}
                className={`text-${
                  props.mode === "Light" ? "dark" : "light"
                } form-label`}
              >
                Confirm password
              </label>
              <input
                type="password"
                className={`form-control text-${
                  props.mode === "Light" ? "dark" : "light"
                } border border-${props.mode === "Light" ? "dark" : "white"}`}
                id="cpassword"
                name="cpassword"
                onChange={onChange}
                required
                value={credentials.cpassword}
                style={{
                  backgroundColor: "inherit",
                }}
              />
            </div>
            <div
              id="emailHelp"
              style={{ cursor: "pointer" }}
              className={`my-2 text-${
                props.mode === "Light" ? "dark" : "light"
              } form-text`}
            >
              We'll never share your credentials with anyone else.
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

            <button className="btn btn-primary">SignUp</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
