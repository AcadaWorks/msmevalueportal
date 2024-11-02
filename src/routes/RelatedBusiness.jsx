import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import searchImage from "../assets/icons/search.svg";
import BusinessCard from "../components/BusinessCard";

export default function RelatedBusiness() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Fragment>
      <NavBar activeIndex={2} style={{ color: "black" }} />{" "}
      {/* Set NavBar text to black */}
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
                  MSME Business Explorer
                </h3>
                <small
                  className="lead"
                  style={{
                    fontSize: "60%",
                    fontFamily: "inter",
                    color: "black",
                  }}
                >
                  Find and connect with similar businesses by entering MSME
                  details in the search bar below
                </small>
                <div
                  className="mt-2"
                  style={{ position: "relative", width: "100%" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter MSME's name"
                    onChange={() => setSearchResult([1, 2, 3, 4, 5, 6, 7])}
                    style={{
                      fontSize: "60%",
                      borderRadius: "20px",
                      border: "1px solid #64748B",
                      padding: "10px",
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
                      color: "black",
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
                flexDirection: "column", // Stack items vertically
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
                Start your search! Enter an MSME name or category to <br></br> discover
                related businesses.
              </p>
            </div>
          ) : (
            <div
              className="row mt-4 related_business_search_div"
              style={{ backgroundColor: "white", overflow: "auto" }}
            >
              {searchResult.map((_, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 mb-4 d-flex justify-content-center"
                >
                  <BusinessCard />
                </div>
              ))}
            </div>
          )}

          {searchResult.length > 0 && (
            <div className="d-flex justify-content-center mt-2">
              {" "}
              {/* Centering pagination */}
              <nav aria-label="Page navigation example">
                <ul className="pagination align-items-center text-dark">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      6
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      7
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      style={{ color: "black" }}
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
