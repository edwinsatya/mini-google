import axios from "axios";

const Axios = axios.create({
  baseURL: "https://google.serper.dev",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.REACT_APP_SERPER_API_KEY,
  },
});

export default Axios;
