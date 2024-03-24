import React from "react";

const Header = () => {
  const smallText = {
    fontSize: "1.4rem",
    fontWeight: "500",
    lineHeight: "1.7",
  };
  const src =
    "https://media.istockphoto.com/id/467288144/vector/map-of-nigeria.jpg?s=612x612&w=0&k=20&c=oi_9OP7OOGawMyYtCbrpsUzZ2_D1jQ7nGCwxlqXS-rU=";
  return (
    <div className="pt-lg-5 mt-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <p style={smallText} className="pt-lg-5 mt-lg-3 px-5 mx-2">
              Imagine a
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "	#009900",
                }}
              >
                Nigeria
              </span>{" "}
              Where all public office holders deliver their job delligently and
              the citizen are patrotic in their dealings. This is the Nigeria we
              want to create with our solution.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src={src}
              alt="banner"
              style={{ borderRadius: "1rem", height: "80%", width: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
