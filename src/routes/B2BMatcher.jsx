import React, { Fragment, useState, useRef } from "react";
import NavBar from "../components/NavBar";
import searchImage from "../assets/icons/search.svg";
import B2BResult from "../components/B2BResult";
import MsmeController from "../controller/msmeController";

export default function B2BMatcher() {
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [type,setType] = useState("demand");
  const [selectedWord, setSelectedWord] = useState(""); // Track selected word
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const msmeController = MsmeController();
  const debounceTimeout = useRef(null);

  // Predefined list of words for autocomplete
  const predefinedWords = [
    "accounting", "airport", "amusement_park", "aquarium", "art_gallery",
    "atm", "bakery", "bank", "bar", "beauty_salon", "bicycle_store", 
    "book_store", "bowling_alley", "bus_station", "cafe", "campground", 
    "car_dealer", "car_rental", "car_repair", "car_wash", "casino", 
    "cemetery", "church", "city_hall", "clothing_store", "convenience_store", 
    "courthouse", "dentist", "department_store", "doctor", "drugstore", 
    "electrician", "electronics_store", "embassy", "fire_station", "florist", 
    "funeral_home", "furniture_store", "gas_station", "gym", "hair_care", 
    "hardware_store", "hindu_temple", "home_goods_store", "hospital", 
    "insurance_agency", "jewelry_store", "laundry", "lawyer", "library", 
    "light_rail_station", "liquor_store", "local_government_office", 
    "locksmith", "lodging", "meal_delivery", "meal_takeaway", "mosque", 
    "movie_rental", "movie_theater", "moving_company", "museum", "night_club", 
    "painter", "park", "parking", "pet_store", "pharmacy", "physiotherapist", 
    "plumber", "police", "post_office", "primary_school", "real_estate_agency", 
    "restaurant", "roofing_contractor", "school", "security_agency", "shoe_store", 
    "shopping_mall", "spa", "stadium", "storage", "store", "supermarket", 
    "taxi_stand", "tourist_attraction", "train_station", "travel_agency", 
    "university", "veterinary_care", "zoo"
  ];

  // Filter the predefined list based on the input query
  const filterSuggestions = (query) => {
    return predefinedWords.filter((word) =>
      word.toLowerCase().includes(query.toLowerCase())
    );
  };

  async function getResult(query) {
    console.log("Fetching results for query:", query);
    setLoading(true);
    try {
      const businesses = await msmeController.b2bMatcher(type,query);
      setSearchResult(businesses);
      // setIsDropdownVisible(businesses.length > 0); // Show dropdown if results are found
    } catch (error) {
      console.error("Error fetching results:", error);
      setSearchResult([]);
      setIsDropdownVisible(false);
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setSearchQuery(value);

    // Display suggestions if there's input, otherwise hide the dropdown
    setIsDropdownVisible(value.length > 0);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Don't call getResult until a word is selected
    debounceTimeout.current = setTimeout(() => {
      setSelectedWord(""); // Reset selected word if the user types
    },1); // Debounce time set to 1 second
  }

  function handleSelectWord(word) {
    setSearchQuery(word); // Set input to selected word
    setSelectedWord(word); // Store the selected word
    setIsDropdownVisible(false); // Hide the dropdown after selection
  }
  
  // Call getResult only when a word is selected
  React.useEffect(() => {
    if (selectedWord) {
      getResult(selectedWord);
    }
  }, [selectedWord]); // This effect runs when selectedWord changes

  return (
    <Fragment>
      <NavBar activeIndex={3} style={{ color: "black" }} />
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
                    onChange={(e)=>{
                      setType(e.target.value)
                      if(searchQuery !=""){
                        getResult(searchQuery)
                      }
                    
                    }}
                  >
                    <option value="demand">Demand</option>
                    <option value="supply">Supply</option>
                  </select>

                  <span style={{ color: "#64748B", marginRight: "10px" }}>|</span>

                  {/* Search query input with dropdown */}
                  <div className="dropdown" style={{ width: "100%" }}>
                    <input
                      className="form-control"
                      value={searchQuery}
                      onChange={handleInputChange}
                      type="text"
                      style={{
                        fontSize: "60%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "transparent",
                        flex: "1",
                        color: "black",
                      }}
                      placeholder="Select Business Category"
                    />
                    {isDropdownVisible && (
                      <ul
                        className="dropdown-menu show"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          right: 0,
                          zIndex: 1000,
                          maxHeight: "200px",
                          overflowY: "auto",
                        }}
                      >
                        {filterSuggestions(searchQuery).map((word) => (
                          <li key={word} onClick={() => handleSelectWord(word)}>
                            <a className="dropdown-item" href="#">
                              {word.replaceAll("_", " ").toUpperCase()}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
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
                  color: "#68707C",
                  fontWeight: "bold",
                }}
              >
                No result found. Try searching again.
              </p>
            </div>
          ) : (
            <div
            className="row mt-4 b2b_business_search_div"
            style={{ backgroundColor: "white", overflowX: "hidden" }}
          >
            {searchResult.map((business, index) => (
              <div
                key={index}
                className="col-12 col-md-6 mb-4 d-flex justify-content-start"
              >
                <B2BResult
                    businessName={business.name}
                    address={business.address}
                    photoReference={business.photoReference}
                />              </div>
            ))}
          </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
