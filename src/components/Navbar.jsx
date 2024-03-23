import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="d-none d-lg-flex justify-content-between">
        <div>
          <h1
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              fontFamily: "lobster",
              padding: "1rem",
            }}
          >
            Project Siyasa
          </h1>
        </div>
        <h2
          className="pt-3 px-3"
          style={{ fontSize: "1rem", fontWeight: "bold" }}
        >
          Unity and Faith, Peace and Progress
        </h2>
      </div>
      <div className="d-lg-none d-block ">
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            fontFamily: "lobster",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Project Siyasa
        </h1>
      </div>
    </>
  );
};

export default Navbar;
