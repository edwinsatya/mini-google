import Layout from "../components/organisms/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";

const Search = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { dispatch } = UseGlobalContext();
  const navigate = useNavigate();
  const pathUrl = useLocation().search;

  useEffect(() => {
    const keyword = pathUrl.slice(3).split("+").join(" ");
    dispatch({ type: "CHANGE_KEYWORD", payload: keyword });
  }, [pathUrl, dispatch]);

  return (
    <Layout {...meta}>
      <section>
        <h1>Search</h1>
        <button onClick={() => navigate("/")}>back</button>
      </section>
    </Layout>
  );
};

export default Search;
