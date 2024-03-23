import React from "react";

const Solution = () => {
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
    <div className="mt-5 pt-5 bg-white">
      <div className="container">
        <div className="d-flex row">
          <div>
            <h2 className="text-center my-5 py-5" style={headerStyle}>
              Solution
            </h2>
          </div>
          <div className="order-2 order-lg-1 col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jLrUdi0U5p5hQpytPlo_4TEkG0ipe4p7zDr3bU8nDIoopF9I2NxzVdKO9etM3VwUnb8&usqp=CAU"
              alt="solution-banner"
              className="mr-3"
              style={{ width: "100%" }}
            />
          </div>
          <div className="order-1 order-lg-2 col-lg-6">
            <p style={smallText}>
              Our Project solves two problems - the lack of Civic Education
              among citizens and the lack of Adoption and use of Many Civic Tech
              Tools already available. Project Siyasa aims to leverage the power
              of Technology and Community Mobilization to ensure wider reach.
              Project Siyasa will democratise civic education and increase civic
              participation.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <div>
          <h2 className="text-center my-5" style={headerStyle}>
            Our Model
          </h2>
        </div>
        <div className="container">
          <p style={{ fontSize: "2rem", fontWeight: "600" }}>
            CIVIC EDUCATION + CIVIC TECH TOOLS = ACTIVE CITIZEN PARTICIPATRION
          </p>
        </div>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <div className="container py-5">
          <div className="row">
            <div>
              <h2 style={headerStyle} className="text-center my-5 py-5">
                MARKETING VALIIDATION
              </h2>
            </div>
            <div className="col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOtZBFXt-Uk5ZSOPvg3t9b1bnlvSaPFm1vGv8f1_DjUjFTHWA_2QcQ6aVuhbyEseveik&usqp=CAU"
                alt="marketing-banner"
                style={{ width: "100%", borderRadius: ".8rem" }}
              />
            </div>
            <div className="col-lg-6">
              <ul>
                <li
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    lineHeight: "1.7",
                    color: "#484848",
                  }}
                  className="my-3"
                >
                  According to the Independent National Electoral Commission
                  (INEC) , only 27% of eligible voters decided who govern
                  Nigeria for the next four years.
                </li>
                <li
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    lineHeight: "1.7",
                    color: "#484848",
                  }}
                >
                  According to INEC a total of 93,469,008 registered voters in
                  Nigeria but only 87,209,007 – 93.3 per cent– collected their
                  Permanent Voter Cards (PVCs), making them the only ones
                  eligible to vote in the 2023 general elections.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div>
            <h2 className="text-center py-5 my-4" style={headerStyle}>
              TARGET MARKET
            </h2>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hf1VgG5SQ7FAg1QOyRTlkOav5zmmQNyoPI0ZISgBU1cWjg5WJdoh8Zl0CbDgUpOiEyU&usqp=CAU"
              alt="target-market-banner"
              style={{ width: "80%", borderRadius: ".6rem" }}
            />
          </div>
          <div className="col-lg-6">
            <ul>
              <li
                style={{
                  fontSize: "2rem",
                  fontWeight: "400",
                  lineHeight: "1.7",
                  color: "#484848",
                  paddingTop: "2.5rem",
                }}
              >
                The Youths of Nigeria who amount to 70% of the Nigerian
                Population.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
