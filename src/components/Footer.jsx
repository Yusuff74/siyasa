import React from "react";

const Footer = () => {
  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };

  const smallText = {
    fontSize: "1.4rem",
    fontWeight: "500",
    lineHeight: "1.7",
    color: "#484848",
  };
  return (
    <div style={{ backgroundColor: "#f5f5dc", marginTop: "4rem" }}>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              backgroundColor: "#26453E",
              paddingRight: "4rem",
              color: "#fff",
            }}
            className="col-lg-5 py-5"
          >
            <div>
              <h2 className="py-3" style={headerStyle}>
                CONTACT US
              </h2>
            </div>
            <p>+234 814845 1424.</p>
            <a href="mailto:info@glowingmindsinitiatives.org">
              info@glowingmindsinitiatives.org
            </a>{" "}
            <br />
            <a href="https://glowingmindsinitiatives.org/index.php">
              www.glowingmindsinitiatives.org
            </a>
            <p>ok - @glowingmindsinitiatives</p>
            <p>Instagram - @glowingmindsinitiatives</p>
            <p>LinkedIn - @glowingmindsinitiatives</p>
            <p>X - @glowing_minds</p>
          </div>
          <div style={{ backgroundColor: "#0D98BA" }} className="col-lg-7">
            <div
              style={{ height: "100%" }}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZ3DdMk9u-m4erO8-cCcoCOi5fm7_tlPXEw&usqp=CAU"
                  //   style={{ width: "50%", height: "50%" }}
                  alt="africa"
                />
                <span
                  style={{
                    paddingLeft: "1rem",
                    fontSize: "6rem",
                    fontWeight: "600",
                    color: "#26453E",
                  }}
                >
                  Siyasa
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
