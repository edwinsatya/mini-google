import Layout from "../components/organisms/Layout";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  const meta = {
    title: "Google",
    desc: "Search engine google api",
  };

  return (
    <Layout {...meta}>
      <h1>Search</h1>
      <button onClick={() => navigate("/")}>back</button>
    </Layout>
  );
};

export default Search;
