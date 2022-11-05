import axios from "axios";

const connection = axios.create({
  // Production
  baseURL: "https://pim-api.herokuapp.com/api",
  // dev
//   baseURL: "http://localhost:3333/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default connection;
