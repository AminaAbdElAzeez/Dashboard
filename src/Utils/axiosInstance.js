import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.profferdeals.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
