import React from "react";

const Team = () => {
  const headerStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
  };
  const medText = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#484848",
  };

  const smallText = {
    fontSize: "1.4rem",
    fontWeight: "500",
    lineHeight: "1.7",
    color: "#fff",
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div>
            <h2 style={headerStyle} className="text-center py-5">
              THE TEAM
            </h2>
            <p style={smallText} className="text-center">
              Project Siyasa is a copyright project of Glowing Minds Initiatives
              for Human Development.
            </p>
          </div>
          <div className="col-lg-6 py-2">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxPl2R-n1PptIof9LeOofiHch2SZJbJh2hY3walZ83h2zDYpv2U2F_dYZ7SgybDufC-8&usqp=CAU"
                className="card-img-top"
                style={{ width: "13rem" }}
                alt="..."
              />
              <div className="card-body">
                <h2 style={headerStyle} className="card-text">
                  Shamsudeen Abdulrazak
                </h2>
                <p style={medText} className="card-text">
                  Executive Director
                </p>
                <p style={medText} className="card-text">
                  Glowing Minds Initiatives for Human Development .
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-2">
            <div className="card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxPl2R-n1PptIof9LeOofiHch2SZJbJh2hY3walZ83h2zDYpv2U2F_dYZ7SgybDufC-8&usqp=CAU"
                className="card-img-top"
                style={{ width: "13rem" }}
                alt="..."
              />
              <div className="card-body">
                <h2 style={headerStyle} className="card-text">
                  Ibrahim Jimoh
                </h2>
                <p style={medText} className="card-text">
                  COO - Corestream Networks
                </p>
                <p style={medText} className="card-text">
                  A Software Engineer with over 10 years field experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
