import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://finsight-kr30.onrender.com/', // put this in .env http://10.0.2.2:8000
  timeout: 1000000, // Timeout for requests in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => { 
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error)
    /* if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || "An error occurred";

      switch (status) {
        case 400:
          console.error("Bad Request: " + message);
          break;
        case 401:
          console.error("Unauthorized: Please log in again.");
          break;
        case 403:
          console.error("Forbidden: You don't have permission.");
          break;
        case 404:
          console.error("Not Found: The resource doesn't exist.");
          break;
        case 500:
          console.error("Internal Server Error: Try again later.");
          break;
        default:
          console.error("Error: " + message);
      }
    } else if (error.request) {
      console.error("No Response:", error.request);
    } else {
      console.error("Setup Error:", error.message);
    }
    return Promise.reject(error); */
  }
);

export default axiosInstance;