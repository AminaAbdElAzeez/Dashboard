import axios from "axios";

const registerInstance = axios.create({
  baseURL: "https://www.appssquare.sa/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default registerInstance;
