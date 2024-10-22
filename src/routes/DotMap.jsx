import React, { Fragment, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import mapStyle from '../assets/map/dot-map.json'
import locationIcon from '../assets/map/location.svg'
import SearchContainer from "../components/SearchContainer";

function DotMap({ google }) {
  const [userLocation, setUserLocation] = useState({
    latitude: null,
    longitude: null,
  });


  // Get the user's geolocation
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
    console.log(mapStyle)
  }, []);

  return (
    <Fragment>
      <NavBar activeIndex={0} />
      <div className="body">
        <SearchContainer />
      {userLocation.latitude && userLocation.longitude ? (
        <Map
          google={google}
          style={{ width: "100%", height: "100%",position: 'relative' }}
          zoom={14}
          
          initialCenter={{
            lat: userLocation.latitude,
            lng: userLocation.longitude,
          }}

          options={{
            styles:mapStyle,      // Apply custom styling
            scrollwheel: false,          // Disable zooming with the scroll wheel
            draggable: false,            // Disable dragging
            disableDoubleClickZoom: true // Disable double-click zooming
          }}
        >
          <Marker
            position={{
              lat: userLocation.latitude,
              lng: userLocation.longitude,
            }}
            icon={{
                url:locationIcon,
                anchor: new google.maps.Point(32,32),
                scaledSize: new google.maps.Size(64,64)
              }}
            title="You are here"
          />
        </Map>
      ) : (
        <div></div>
      )}
      </div>
    </Fragment>
  );
}

export default GoogleApiWrapper({
  apiKey:import.meta.env.VITE_GOOGLE_MAP_API_KEY, // Add your API key here
})(DotMap);
