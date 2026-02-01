import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // backend local
  // baseURL: "https://your-backend.com", // production
});

export default api;


