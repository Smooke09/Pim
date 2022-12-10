import axios from "axios";

const connection = axios.create({
  // Production
  baseURL: "https://api-pim.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default connection;
