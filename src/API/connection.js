import axios from "axios";

const connection = axios.create({
  // Production
  baseURL: import.meta.env.VITE_API_URL,
  // dev
  // baseURL: "http://localhost:3333/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default connection;
