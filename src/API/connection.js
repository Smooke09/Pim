import axios from "axios";

const connection = axios.create({
  // Production
  baseURL: "https://pim-api.herokuapp.com/api",
  // dev
  headers: {
    "Content-Type": "application/json",
  },
});

export default connection;
