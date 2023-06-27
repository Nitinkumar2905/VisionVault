import React from "react";
import "./Component.css";
import Category from "./Category";
const Home = (props) => {
  return (
    <>
      <div
        className={`m-3 text-center fs-3 text-${
          props.mode === "Light" ? "dark" : "white"
        }`}
        style={{ fontFamily: "sans-serif"}}
      >
        <h1
          className={`my-5 text-${props.mode === "Light" ? "dark" : "light"}`}
          style={{ fontSize: "3rem" }}
        >
          Welcome to VisionVault
        </h1>
        <div style={{margin:'8rem 0rem'}} className="d-flex justify-content-center">
          <form className={` d-flex m-2 rounded p-1`} role="search">
            <input
              type="search"
              className={`px-1 border-0 border-bottom border-${
                props.mode === "Light" ? "dark" : "white"
              } mx-2 no-outline text-${
                props.mode === "Light" ? "dark" : "light"
              }`}
              placeholder="Search"
              aria-label="Search"
              style={{ backgroundColor: "inherit", width:'28vw' }}
            />
            <button
              className={` border border-${props.mode==="Light"?"primary":"primary"} shadow-lg btn text-${
                props.mode === "Light" ? "dark" : "white"
              }`}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <Category mode={props.mode}/>
    </>
  );
};

export default Home;
