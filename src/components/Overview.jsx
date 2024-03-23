import React from "react";

const Overview = () => {
  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const smallText = {
    fontSize: "1.4rem",
    fontWeight: "500",
    lineHeight: "1.7",
  };

  const listStyle = {
    fontSize: "1.8rem",
    fontWeight: "600",
    lineHeight: "1.7",
    color: "#484848",
  };

  return (
    <div className="bg-white">
      <div className="container">
        <div className="row py-5">
          <div>
            <h2 className="text-center py-5" style={headerStyle}>
              PRODUCT OVERVIEW
            </h2>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJzhlDEzXhB-dkXaqfXRvBlo0FIhidydYkHBTbv0v6bK-2K-Y7FjonSsfqnUMvzRSxNk&usqp=CAU"
              alt="overview-banner"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <p className="pt-5" style={smallText}>
              PROJECT SIYASA is a Civic Tech Tool that aims to provide education
              to Nigerians and also serve as a one stop shop for civic tech
              tools in Nigeria through a Web based platform.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <h2 className="text-center py-5" style={headerStyle}>
              SIYASA COMPETITIVE ADVANTAGE
            </h2>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOIUUY1FVFq7vfJDzAHR5oWgg3jQA4YCPYvXq88SCbsEV2yw_7Zv5tgzoORPEfYKBGn4&usqp=CAU"
              alt="competetive-advantage-banner"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <ul style={{ marginLeft: "2rem" }}>
              <li className="my-3" style={listStyle}>
                The Localisation approach
              </li>
              <li className="my-3" style={listStyle}>
                The Aggregation Model{" "}
              </li>
              <li className="my-3" style={listStyle}>
                The Use of Technology.
              </li>
              <li className="my-3" style={listStyle}>
                Our Marketing Approach
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <h2 className="text-center py-5" style={headerStyle}>
              MARKETING STRATEGY
            </h2>
          </div>
          <div className="col-lg-6">
            <img
              src="https://nttdata-solutions.com/wp-content/usermedia/blog-new-digital-strategy-facebook.jpg"
              alt="strategy-banner"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <ol>
              <li style={listStyle}>Higher Institution Campus Invasion</li>
              <li style={listStyle}>Mobilization Visits to NYSC Camp</li>
              <li style={listStyle}>Online Content Marketing </li>
              <li style={listStyle}>Marketing Road Show </li>
              <li style={listStyle}>
                Partnerships with Civic Tech Organisations and Donor
                Organisations.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <h2 className="text-center py-5" style={headerStyle}>
              FINANCIALS{" "}
            </h2>
          </div>
          <div className="col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXWLsuGws_gI1gZ5mVoWiUAoMR19s8sFwwmcfB9qk9XeOJtNoblUuoNPRIY6RvfRpB-Q&usqp=CAU"
              alt="finance-banner"
              className="w-100"
            />
          </div>
          <div className="col-lg-6">
            <ul style={{ marginLeft: "1rem" }}>
              <li className="my-5" style={listStyle}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  SEEKING
                </span>{" "}
                - $ 200K{" "}
              </li>
              <li className="my-5" style={listStyle}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  FUNDING APPROACH
                </span>{" "}
                - GRANT{" "}
              </li>
              <li className="my-5" style={listStyle}>
                <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                  TARGET{" "}
                </span>
                - 100,000 Citizens to be reached in the first One Year.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="pb-4" style={headerStyle}>
              REVENUE MODEL
            </h2>
            <p style={smallText}>
              Our revenue model at the beginning is through grant and for
              sustainability we will leverage the power of Partnership with
              other Civic Tech Organisation.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="py-4" style={{ margin: "0 4rem" }}>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  backgroundColor: "#26453E",
                  borderRadius: "5px",
                  textAlign: "center",
                  margin: "0",
                  color: "#fff",
                }}
              >
                Donor / Funder
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: ".17rem",
                    height: "5rem",
                    backgroundColor: "#000",
                    margin: "0",
                    padding: "0",
                  }}
                ></div>
              </div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  backgroundColor: "#008080",
                  borderRadius: "5px",
                  textAlign: "center",
                  margin: "0",
                  color: "#fff",
                }}
              >
                Our Organisation
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: ".17rem",
                    height: "5rem",
                    backgroundColor: "#000",
                    margin: "0",
                    padding: "0",
                  }}
                ></div>
              </div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  backgroundColor: "#0D98BA",
                  borderRadius: "5px",
                  textAlign: "center",
                  margin: "0",
                  color: "#fff",
                }}
              >
                Citizens
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
