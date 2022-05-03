import Axios from "./axiosInstance";
// import { data, dataImg, dataNews } from "./dummyData"

const getSearchApi = async (type, query) => {
  // try async dummy data using promise
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({
  //       data: data,
  //     });
  //   }, 2500);
  // });
  // return promise;

  return await Axios.get(`/${type}/${query.slice(1)}`);
};

export default getSearchApi;
