import axios from "axios";

const Axios = axios.create({
  baseURL: "https://google-search3.p.rapidapi.com/api/v1",
  headers: {
    "X-User-Agent": "desktop",
    "X-Proxy-Location": "EU",
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  },
});

export default Axios;
