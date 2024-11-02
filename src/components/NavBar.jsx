import React, { Fragment } from "react";
import logo from "../assets/icons/logo.svg";
import gem from "../assets/icons/gem.svg";

export default function NavBar({ activeIndex }) {
  return (
    <Fragment>
      <div className="top-nav">
      <div className="container-xxl border-bottom px-0 px-md-5">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-0 px-md-5">
          <div className="col-md-3 mb-0 mb-md-0">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
            >
              <img src={logo} alt="Logo" />
            </a>
          </div>

          {/* First Navigation Links List */}
          <ul className="nav col-12 col-md-auto mb-0 justify-content-center">
            <li className="nav-item">
              <a href="#" className="nav-link upper-nav" aria-current="page">
                Request log
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link upper-nav">
                Related businesses
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link upper-nav"
                style={{ fontWeight: "bolder", fontFamily: "interBold" }}
              >
                MSME ValueData
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link upper-nav">
                Support
              </a>
            </li>
            <ul className="nav nav-pills mb-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link btn btn-primary mx-1 gem"
                  style={{
                    backgroundColor: "#F9918B59",
                    fontFamily: "inter",
                    border: "none",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <img src={gem} alt="Gem" />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link btn btn-primary"
                  style={{
                    backgroundColor: "#0000FF",
                    color: "white",
                    fontFamily: "inter",
                    border: "none",
                    fontSize: "12px",
                    whiteSpace: "nowrap",
                    borderRadius: "3px",
                  }}
                >
                  Post a job
                </a>
              </li>
            </ul>
          </ul>

          {/* Second Navigation Links List */}
        </header>
      </div>
      <div className="container-xxl px-2 px-md-5">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 px-0 px-md-5"  style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <ul className="nav d-flex justify-content-between flex-wrap w-100 ">
            <li className="nav-item">
              <a 
                href="/" 
                className={`nav-link upper-nav ${activeIndex === 0 ? 'active' : ''}`} 
                aria-current={activeIndex === 0 ? 'page' : undefined}
              >
                Dot Distribution Map
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/locator" 
                className={`nav-link upper-nav ${activeIndex === 1 ? 'active' : ''}`}
              >
                Locator
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="/related_business" 
                className={`nav-link upper-nav ${activeIndex === 2 ? 'active' : ''}`}
              >
                Related Business Generator
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#" 
                className={`nav-link upper-nav ${activeIndex === 3 ? 'active' : ''}`}
              >
                B2B Matcher
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#" 
                className={`nav-link upper-nav ${activeIndex === 4 ? 'active' : ''}`}
              >
                Information Stand
              </a>
            </li>
            {/* <li className="nav-item">
              <a 
                href="#" 
                className={`nav-link upper-nav ${activeIndex === 5 ? 'active' : ''}`}
              >
                Business Enabling Resources
              </a>
            </li> */}
          </ul>
        </header>
      </div>
      </div>
    </Fragment>
  );
}
