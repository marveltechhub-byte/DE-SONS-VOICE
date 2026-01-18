import axios from "axios";

const API = axios.create({
  baseURL: "https://de-sons-voice-backend-1.onrender.com/api",
  withCredentials: true, // REQUIRED if using cookies/JWT
});

export default API;


