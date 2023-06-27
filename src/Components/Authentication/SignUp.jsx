import React from "react";

const SignUp = (props) => {
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
            // onSubmit={handleLogin}
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
                className={`form-control text-${
                  props.mode === "Light" ? "dark" : "light"
                } border border-${props.mode === "Light" ? "dark" : "white"}`}
                id="name"
                name="name"
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
            <div className="mb-3 form-check">
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
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
