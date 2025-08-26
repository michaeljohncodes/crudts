import axios from "axios";

const Instance = axios.create({
  baseURL: "https://user-data-ci61.onrender.com",
});

export default Instance;
