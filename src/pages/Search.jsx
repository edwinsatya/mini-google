import Layout from "../components/organisms/Layout";
import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import { TotalSearchResult } from "../components/molecules/TotalSearchResult";

const Search = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { dispatch } = UseGlobalContext();
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

  useEffect(() => {
    const keyword = query.slice(3).split("+").join(" ");
    const type = pathUrl.substring(1);
    dispatch({ type: "CHANGE_KEYWORD", payload: keyword });
    dispatch({ type: "CHANGE_TYPE", payload: type });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout {...meta}>
      <section className="px-4 lg:px-24">
        <TotalSearchResult result="Sekitar 1.320.000.000 hasil (0,52 detik)" />
      </section>
    </Layout>
  );
};

export default Search;
