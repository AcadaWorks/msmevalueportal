// LocationProvider.jsx
import React, { createContext, useState, useEffect } from 'react';

// Create the context to hold location and error states
export const LocationContext = createContext();

// LocationProvider component that will manage the user's location
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null); // To store user's location
  const [error, setError] = useState(null); // To store any geolocation errors

  // Effect to get user's location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      // Try to get the location from localStorage if it's available
      const savedLocation = JSON.parse(localStorage.getItem('userLocation'));
      if (savedLocation) {
        setLocation(savedLocation);
      } else {
        // If no location is saved, request the location from the browser
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
            setLocation(userLocation);
            // Save the location in localStorage for future use
            localStorage.setItem('userLocation', JSON.stringify(userLocation));
          },
          (error) => {
            console.error('Geolocation error: ', error);
            setError(error.message); // Store error message
            // Optionally, set a fallback location (for example, a central city)
            setLocation({ latitude: 40.7128, longitude: -74.0060 }); // Default to NYC
          }
        );
      }
    } else {
      console.error('Geolocation is not supported by this browser.');
      setError('Geolocation not supported');
      // Optionally, set a fallback location if geolocation is not supported
      setLocation({ latitude: 40.7128, longitude: -74.0060 }); // Default to NYC
    }

    // Cleanup function when the component unmounts (optional)
    return () => {
      // If you want to clear location on logout, you can use this:
      // localStorage.removeItem('userLocation');
    };
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <LocationContext.Provider value={{ location, error }}>
      {children}
    </LocationContext.Provider>
  );
};
