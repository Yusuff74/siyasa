import React from "react";

const Problem = () => {
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
    <div className="mt-5 pt-5 bg-white">
      <div className="container">
        <div className="row">
          <div>
            <h2 style={headerStyle} className="text-center my-5 py-5">
              Problem
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="px-2" style={smallText}>
              Alot of efforts have gone into the teaching of civic education in
              Nigeria with civic education being taught in Secondary Schools and
              to complement this efforts, resources are already been invested by
              Civil Society Organisation to also educate citizens about their
              Civic Duties , but there still lies a big problem in the way
              Government and the Citizens relates which birth the problem of
              Civic Participation . To solve this problem alot of Civic Tech
              tools have been developed to increase civic participation by Civic
              Tech Organisations yet no there is lies the problem of adoption
              and use by the Citizenry.{" "}
            </p>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmdaw8h8sCdAyPWyI1PxbykdQd7CKjMyVXAuPvNz0tgD2Ff1d-pIHiHiF8gUzgdKI3Ac&usqp=CAU"
              alt="problem-banner"
              className="ml-5"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
