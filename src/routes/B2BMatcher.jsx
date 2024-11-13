import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import searchImage from "../assets/icons/search.svg";
import BusinessCard from "../components/BusinessCard";
import B2BResult from "../components/B2BResult";

export default function B2BMatcher() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Fragment>
      <NavBar activeIndex={3} style={{ color: "black" }} /> {/* Set NavBar text to black */}
      <div
        className="body bg-white"
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          className="container-xxl px-2 px-md-5 mt-4 bg-white"
          style={{ flexGrow: 1 }}
        >
          <div className="row">
            <div className="col-md-6 col-10">
              <div className="text-start">
                <h3
                  style={{
                    fontSize: "140%",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  B2B Matcher
                </h3>
                <small
                  className="lead"
                  style={{
                    fontSize: "60%",
                    fontFamily: "inter",
                    color: "black",
                  }}
                >
                  Find businesses that match your MSME'S needs
                </small>
                
                {/* Search input with dropdown */}
                <div
                  className="mt-2"
                  style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                    border: "1px solid #64748B",
                    padding: "5px 10px",
                    backgroundColor: "white",
                  }}
                >
                  <select
                    className="form-select"
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      fontSize: "60%",
                      color: "#64748B",
                      marginRight: "10px",
                      appearance: "none",
                      width: "auto",
                    }}
                    defaultValue="Demand"
                  >
                    <option value="demand">Demand</option>
                    <option value="supply">Supply</option>
                    {/* Add more options as needed */}
                  </select>

                  <span style={{ color: "#64748B", marginRight: "10px" }}>|</span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter MSME name"
                    onChange={() => setSearchResult([1, 2, 3, 4, 5, 6, 7,8,9,10,11,2,,3,4])}
                    style={{
                      fontSize: "60%",
                      border: "none",
                      outline: "none",
                      backgroundColor: "transparent",
                      flex: "1",
                      color: "black",
                    }}
                  />

                  <span
                    className="search-icon"
                    style={{
                      fontSize: "10px",
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                      color: "#64748B",
                    }}
                  >
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </div>
            </div>
            
          </div>

          {searchResult.length === 0 ? (
            <div
              className="mt-4"
              style={{
                width: "100%",
                height: "70%",
                backgroundColor: "#F8FAFC",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={searchImage}
                style={{ width: "10%" }}
                alt="Search Icon"
              />
              <p
                className="mb-0 mt-2"
                style={{
                  fontSize: "0.5rem",
                  color: "#68727D",
                  textAlign: "center",
                }}
              >
                Start your search! Enter an MSME name or category to <br /> discover related businesses.
              </p>
            </div>
          ) : (
            <div
              className="row mt-4 b2b_business_search_div"
              style={{ backgroundColor: "white", overflow: "auto" }}
            >
              {searchResult.map((_, index) => (
                <div
                  key={index}
                  className="col-12  mb-4 d-flex justify-content-start"
                >
                  <B2BResult />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </Fragment>
  );
}
