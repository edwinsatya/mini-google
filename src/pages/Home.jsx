import { useParams, useLocation } from "react-router-dom";
import React from "react";
import Layout from "../components/organisms/Layout";

const Home = () => {
  const meta = {
    title: "Google",
    desc: "Search engine google api",
  };
  const params = useParams();
  const location = useLocation();

  console.log(params, "params");
  console.log(location, "location");

  return (
    <Layout {...meta}>
      <h1 className="text-red-500 font-bold">
        Hello World, mode = {process.env.REACT_APP_MODE}
      </h1>
    </Layout>
  );
};

export default Home;
