import React, { Fragment } from "react";
import SearchResult from "./SearchResult";

export default function SearchContainer() {
    const search = false;
  return (
    <Fragment>
      <div className="card searchContainer text-start">
        <h4
          className="bold"
          style={{ fontFamily: "inter", fontSize: "90%", fontWeight: "bolder" }}
        >
          Search MSME
        </h4>
        <small
          className="lead"
          style={{ fontSize: "60%", fontFamily: "inter", color: "#6B7280" }}
        >
          Explore MSMEs search to discover businesses, find <br />
          partnerships for growth.
        </small>

        <div className="search-input mt-2">
          <span className="search-icon">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter MSME's name"
            style={{ fontSize: "60%" }}
          />
        </div>
        {search === true && (
  <div className="mt-1">
    <small style={{ fontSize: "60%", fontWeight: "bolder" }}>
      SEARCH RESULTS
    </small>
    <div style={{ maxHeight: "20vh", overflowY: "auto" }}>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      {/* Add more <SearchResult /> components as needed */}
    </div>
  </div>
)}

      </div>
    </Fragment>
  );
}
