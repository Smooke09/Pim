import axios from "axios";

const connection = axios.create({
  // Production
  baseURL: "https://api-pim.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default connection;
