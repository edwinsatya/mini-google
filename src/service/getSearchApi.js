import { parseSearchKeyword } from "../helpers/parseSearchKeyword";
import Axios from "./axiosInstance";
import {
  mapImageSearchResponse,
  mapNewsSearchResponse,
  mapWebSearchResponse,
} from "./serperMappers";

const SERPER_ENDPOINTS = {
  search: "/search",
  image: "/images",
  news: "/news",
};

const getSearchApi = async (type, query) => {
  const keyword = parseSearchKeyword(query);

  if (!keyword) {
    throw new Error("Search keyword is required");
  }

  if (!process.env.REACT_APP_SERPER_API_KEY) {
    throw new Error("REACT_APP_SERPER_API_KEY is not configured");
  }

  const endpoint = SERPER_ENDPOINTS[type] || SERPER_ENDPOINTS.search;
  const start = performance.now();

  const { data } = await Axios.post(endpoint, {
    q: keyword,
    num: 10,
  });

  const ts = (performance.now() - start) / 1000;

  if (type === "image") {
    return { data: mapImageSearchResponse(data) };
  }

  if (type === "news") {
    return { data: mapNewsSearchResponse(data) };
  }

  return { data: mapWebSearchResponse(data, ts) };
};

export default getSearchApi;
