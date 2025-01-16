import axios from "axios";

"https://onlychat-ihv4.onrender.com"

export const axiosInstance = axios.create({
 // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
  baseURL : "https://onlychat-ihv4.onrender.com/api",
  withCredentials: true,
});
