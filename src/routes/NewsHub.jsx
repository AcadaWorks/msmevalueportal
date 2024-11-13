import React, { Fragment, useState } from "react";
import NavBar from "../components/NavBar";
import searchImage from "../assets/icons/search.svg";
import BusinessCard from "../components/BusinessCard";
import B2BResult from "../components/B2BResult";
import FeaturedArticle from "../components/FeaturedArticle";
import ArticleGrid from "../components/ArticleGrid";


export default function NewsHUb() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <Fragment>
      <NavBar activeIndex={4} style={{ color: "black" }} /> {/* Set NavBar text to black */}
      <div
        className="body bg-white"
        style={{
          overflow: "scroll",
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
                  MSME News Hub
                </h3>
                <small
                  className="lead"
                  style={{
                    fontSize: "60%",
                    fontFamily: "inter",
                    color: "black",
                  }}
                >
                  Stay updated with the latest news and insights tailored for Micro, Small, and Medium Enterprises. Explore a world of information at your fingertips.
                </small>
                
          
              </div>
            </div>
            
          </div>
          <FeaturedArticle />
          <ArticleGrid /> 
        
        </div>
      </div>
    </Fragment>
  );
}
