import { useParams, useLocation } from "react-router-dom";
import React from "react";
import Layout from "../components/organisms/Layout";
import GoogleLogo from "../components/atoms/GoogleLogo";

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
      <section className="flex flex-col items-center gap-7">
        <figure className="flex justify-center items-center w-full max-w-screen-xl mt-10">
          <GoogleLogo className="w-3/12 max-w-2xl object-contain" />
        </figure>

        <div className="w-8/12 lg:max-w-xl">
          <input
            className="w-full bg-white dark:bg-bg-dark md:py-3 md:px-4 border border-gray-400 rounded-full focus:outline-none focus:drop-shadow-md focus:dark:border-none focus:dark:bg-[#303134] hover:drop-shadow-md hover:dark:border-none hover:dark:bg-[#303134]"
            type="text"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
