import React, { Fragment, useEffect, useState, useContext } from "react";
import NavBar from "../components/NavBar";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import locationIcon from "../assets/map/location.svg";
import tinyRedCircle from "../assets/map/red-dot.svg";

import SearchContainer from "../components/SearchContainer";
import mapStyle from "../assets/map/dot-map.json";
import SearchResult from "../components/SearchResult";
import { LocationContext } from '../context/LocationProvider';


function DotMap({ google }) {
  const { location } = useContext(LocationContext);

  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [msmeLocations, setMsmeLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMsmes, setFilteredMsmes] = useState([]);
  const [selectedMsme, setSelectedMsme] = useState(null); // Track selected MSME
  const [infoWindow, setInfoWindow] = useState(null); // InfoWindow reference
  const [selectedInfo, setSelectedInfo] = useState(null); // InfoWindow content (name)
  const [mapInstance, setMapInstance] = useState(null); // To store the map instance

  const getUserLocation = () => {
    setUserLocation({ latitude: location.latitude, longitude: location.longitude });
    fetchNearbyMsmes(location.latitude, location.longitude);
  };
  
  const fetchNearbyMsmes = (latitude, longitude) => {
    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    const request = {
      location: new google.maps.LatLng(latitude, longitude),
      radius: 10000,
      type: [
        "Retail Stores",
        "Wholesale Distributors",
        "Restaurants",
        "Cafes/Bakeries",
        "Food Trucks",
        "Catering Services",
        "Clinics",
        "Pharmacies",
        "Gyms/Fitness Centers",
        "Spas/Beauty Salons",
        "Software Development",
        "Tech Support",
        "IT Consultants",
        "Construction Firms",
        "Real Estate Agencies",
        "Interior Design Services",
        "Light Manufacturing",
        "Handicrafts",
        "Printing Services",
        "Transport Services",
        "Courier/Delivery Services",
        "Freight and Cargo",
        "Tutoring Services",
        "Vocational Training",
        "Online Courses",
        "Photography/Videography",
        "Graphic Design",
        "Music and Arts",
        "Accounting Services",
        "Financial Advisory",
        "Insurance Brokers",
        "Farming",
        "Agro-processing",
        "Gardening Services",
        "Cleaning Services",
        "Handyman Services",
        "Pet Care Services",
        "Event Planning",
        "Film and TV Production",
        "Gaming and Esports",
        "Waste Management",
        "Sustainability Consulting",
        "Hair Salons",
        "Beauty Product Sales",
        "Nail Salons",
        "Hotels and Motels",
        "Tour Operators",
        "Bed and Breakfasts",
        "Artisan Workshops",
        "Craft Stores"
      ]
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setMsmeLocations(results);
        setFilteredMsmes(results);
      } else {
        console.error("Failed to fetch MSMEs:", status);
      }
    });
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    if(value==""){
      setSelectedMsme(null)
    }
    setSearchTerm(value);

    const filtered = msmeLocations.filter((msme) =>
      msme.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredMsmes(filtered);
  };

  const getMsmeImage = (photos) => {
    if (photos && photos.length > 0) {
      const photo = photos[0];
      return photo.getUrl({
        maxWidth: 200,
        maxHeight: 200,
      });
    }
    return "";
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const tinyBlackCircle = {
    path: google.maps.SymbolPath.CIRCLE, // Use predefined circle path for better compatibility
    fillColor: "black",
    fillOpacity: 1,
    strokeColor: "black",
    strokeWeight: 0, // Set stroke weight explicitly
    scale: 3, // Adjust scale for visibility
  };
  

  const handleMsmeClick = (msme, marker) => {
    setSelectedMsme(msme);
    setSelectedInfo(msme.name); // Set the name of the selected MSME for the InfoWindow

    if (mapInstance) {
      mapInstance.panTo(msme.geometry.location);
    }

    // Open InfoWindow at the marker's position
    const iw = new google.maps.InfoWindow({
      content: msme.name, // Set InfoWindow content
    });

    iw.open(marker.getMap(), marker); // Open the InfoWindow at the clicked marker
    setInfoWindow(iw); // Keep a reference to InfoWindow
    
  };

  const handleMapClick = () => {
    if (infoWindow) {
      infoWindow.close(); // Close the InfoWindow
    }
    setSelectedMsme(null); // Optionally clear selected MSME
    setSelectedInfo(null); // Clear the name when clicking elsewhere on the map
  };

  return (
    <Fragment>
      <NavBar activeIndex={0} />
      <div className="body">
        <div className="card searchContainer text-start">
          <h4
            className="bold"
            style={{
              fontFamily: "inter",
              fontSize: "90%",
              fontWeight: "bolder",
            }}
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
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {searchTerm && (
            <div className="mt-1">
              <small style={{ fontSize: "60%", fontWeight: "bolder" }}>
                SEARCH RESULTS
              </small>
              <div style={{ maxHeight: "20vh", overflowY: "auto" }}>
                {filteredMsmes.length > 0 ? (
                  filteredMsmes.map((msme, index) => (
                    <SearchResult
                      key={index}
                      name={msme.name}
                      image={getMsmeImage(msme.photos)}
                      address={msme.vicinity}
                      onClick={() => handleMsmeClick(msme)} // Handle MSME click
                      selected={selectedMsme && selectedMsme.place_id === msme.place_id} // Check if this MSME is selected

                    />
                  ))
                ) : (
                  <div>No results found</div>
                )}
              </div>
            </div>
          )}
        </div>
        {userLocation.latitude && userLocation.longitude ? (
          <Map
            google={google}
            style={{ width: "100%", height: "100%", position: "relative" }}
            zoom={14}
            initialCenter={{
              lat: userLocation.latitude,
              lng: userLocation.longitude,
            }}
            onReady={(mapProps, map) => {
              setMapInstance(map); // Store the map instance
              map.setOptions({
                styles: mapStyle,
                scrollwheel: false,
                disableDoubleClickZoom: true,
                mapTypeControl: false,
              });
            }}
            onClick={handleMapClick} // Handle map click to close InfoWindow
          >
            <Marker
              position={{
                lat: userLocation.latitude,
                lng: userLocation.longitude,
              }}
              icon={{
                url: locationIcon,
                anchor: new google.maps.Point(32, 32),
                scaledSize: new google.maps.Size(64, 64),
              }}
              onMouseover={(props, marker) => {
                const iw = new google.maps.InfoWindow({
                  content: "You are here",
                });
                iw.open(marker.getMap(), marker);
              }}
              title="You are here"
            />
            {msmeLocations.map((location, index) => (
              <Marker
                key={index}
                position={{
                  lat: location.geometry.location.lat(),
                  lng: location.geometry.location.lng(),
                }}
                icon={
                  selectedMsme && selectedMsme.place_id === location.place_id
                    ? tinyRedCircle // If this MSME is selected, show red marker
                    : tinyBlackCircle // Otherwise, show black marker
                }
                onMouseover={(props, marker) => {
                  const iw = new google.maps.InfoWindow({
                    content: `${location.name}`,
                  });
                  iw.open(marker.getMap(), marker);
                }}
                onMouseout={(props, marker) => {
                  // Check if InfoWindow exists and close it
                  if (marker.infoWindow) {
                    marker.infoWindow.close();
                    marker.infoWindow = null; // Clean up reference to prevent memory leaks
                  }
                }}
                
                onClick={(props, marker) => handleMsmeClick(location, marker)}
              />
            ))}
          </Map>
        ) : (
          <p></p>
        )}
      </div>
    </Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
})(DotMap);
