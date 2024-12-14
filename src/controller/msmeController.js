import React, { useContext } from "react";
import ApiService from "../services/apiService";
import { LocationContext } from "../context/LocationProvider";

const MsmeController = () => {
    const { location } = useContext(LocationContext);
    const apiService = ApiService();

    async function getRelatedBusinesses(query) {
        try {
            const url = `/msme?longitude=${location.longitude}&latitude=${location.latitude}&radius=20000&query=${query}`;
            const response = await apiService.fetchData(url, {});
            console.log(response);
            return response.data || []; // Ensure we return an array
        } catch (error) {
            console.error("Error fetching related businesses:", error);
            throw error; // Allow the calling function to handle the error
        }
    }


    async function b2bMatcher(type,category) {
        try {
            const url = `/msme/b2b_matcher?longitude=${location.longitude}&latitude=${location.longitude}&radius=20000&type=${type}&category=${category}`;
            const response = await apiService.fetchData(url, {});
            console.log(response);
            return response.data || []; // Ensure we return an array
        } catch (error) {
            console.error("Error fetching related businesses:", error);
            throw error; // Allow the calling function to handle the error
        }
    }

    return { getRelatedBusinesses,b2bMatcher };
};

export default MsmeController;
