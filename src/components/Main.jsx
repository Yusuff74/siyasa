import React from "react";

const Main = () => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };
  const smallText = {
    fontSize: "1.4rem",
    fontWeight: "500",
    lineHeight: "1.7",
    color: "#484848",
  };
  return (
    <div style={{ marginTop: "4rem", backgroundColor: "#fff" }}>
      <div className="my-5 py-5">
        <h2 style={headerStyle} className="text-center">
          Company Overview
        </h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <p className="px-5" style={smallText}>
              <span style={{ color: "#26453E" }}>PROJECT SIYASA</span> is a
              product of{" "}
              <span style={{ color: "#008080" }}>
                Glowing Minds Initiatives
              </span>{" "}
              for Human Development civic organisation that aims to equip Youths
              with Skills and Opportunity to make them reliant.
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src="https://glowingmindsinitiatives.org/images/logo.fw.png"
              alt="glowingMindInitiativeLogo"
              style={{ width: "70%", height: "50%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h2 className="text-center pb-4" style={headerStyle}>
            Mission
          </h2>
        </div>
        <div className="row d-flex">
          <div className="order-2 order-lg-1 col-lg-6 col-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRznr9hj0ktIPXNBSWpErj-AgKk3nPSThRaQ&usqp=CAU"
              alt="mission-banner"
              style={{ width: "70%" }}
            />
          </div>
          <div className="order-1 order-lg-2 col-lg-6 col-12">
            <div className="px-5 mx-2 py-5">
              <h2 style={headerStyle}>Our Mission</h2>
              <p style={smallText}>
                We are on a mission to democratise civic education and increase
                civic participation in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
