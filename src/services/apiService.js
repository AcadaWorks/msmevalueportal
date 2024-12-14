import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
;

const ApiService = () => {

  // Common function to make requests
  const request = async (method, endpoint, data = null, contentType = 'application/json') => {
    console.log(`Request: ${method} ${endpoint}`);

    try {
      const headers = {
        Accept: 'application/json',
      };



      // Conditionally set 'Content-Type'
      if (contentType !== 'multipart/form-data') {
        headers['Content-Type'] = contentType;
      }

      const response = await axios({
        method,
        url: `${BASE_URL}${endpoint}`,
        headers,
        data, // Request body for POST, PUT, etc.
      });

      return response.data; // Return successful response data
    } catch (error) {
      console.error('Request failed:', error);

      // Handle specific error cases more explicitly
      if (error.response) {
        const { status, data } = error.response;

        // Unauthorized or invalid token handling
        if (status === 401 && (data.message === 'Invalid token' || data.message === "User not found")) {
          handleUnauthenticated(); // Ensure this function is implemented
        }

        // Return error details if available
        return {
          success: false,
          error: data.message || 'Unknown error occurred',
        };
      } else {
        // Handle cases where no response is received
        return {
          success: false,
          error: 'No response from server',
        };
      }
    }
  };

  // Wrapper functions for common HTTP methods
  const fetchData = (endpoint, payload = null) => request('get', endpoint, payload);
  const postData = (endpoint, payload) => request('post', endpoint, payload);
  const postMultipartData = (endpoint, payload) => request('post', endpoint, payload, 'multipart/form-data');
  const deleteData = (endpoint, payload = null) => request('delete', endpoint, payload);

  return {
    fetchData,
    postData,
    postMultipartData,
    deleteData,
  };
};

export default ApiService;
