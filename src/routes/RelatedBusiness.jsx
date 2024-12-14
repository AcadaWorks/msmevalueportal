import React, { Fragment, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import searchImage from "../assets/icons/search.svg";
import BusinessCard from "../components/BusinessCard";
import MsmeController from "../controller/msmeController";

export default function RelatedBusiness() {
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const msmeController = MsmeController();
    const debounceTimeout = useRef(null);

    async function getResult(query) {
        console.log("Fetching results for query:", query);
        setLoading(true);
        try {
            const businesses = await msmeController.getRelatedBusinesses(query);
            setSearchResult(businesses);
        } catch (error) {
            console.error("Error fetching results:", error);
            setSearchResult([]);
        } finally {
            setLoading(false);
        }
    }

    function handleInputChange(event) {
        const value = event.target.value;
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            getResult(value);
        }, 1000); // Debounce time set to 1 second
    }

    return (
        <Fragment>
            <NavBar activeIndex={2} style={{ color: "black" }} />
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
                                        onChange={handleInputChange}
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

                    {loading ? (
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
                            <div className="spinner-border text-primary" role="status"></div>
                        </div>
                    ) : searchResult.length === 0 ? (
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
                                Start your search! Enter an MSME name or category to <br />{" "}
                                discover related businesses.
                            </p>
                        </div>
                    ) : (
                        <div
                            className="row mt-3 related_business_search_div"
                            style={{ backgroundColor: "white", overflow: "auto" }}
                        >
                            {searchResult.map((business, index) => (
                                <div
                                    key={index}
                                    className="col-12 col-md-6 mb-4 d-flex justify-content-center"
                                >
                                    <BusinessCard
                                        title={business.name}
                                        category={business.primaryType != null ?business.primaryType.toString().replaceAll("_"," ").toUpperCase() : " "}
                                        phoneNumber={business.phoneNumber}
                                        address={business.address}
                                        description={business.description}
                                        photoReference = {business.photoReference}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
