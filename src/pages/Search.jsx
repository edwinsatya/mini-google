import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  const location = useLocation();

  console.log(params, "params");
  console.log(location, "location");

  return <div>Search</div>;
};

export default Search;
