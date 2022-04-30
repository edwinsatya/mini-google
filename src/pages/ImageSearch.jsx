import { useLocation } from "react-router-dom";
import Layout from "../components/organisms/Layout";

const ImageSearch = () => {
  const location = useLocation();
  console.log(location.pathname);
  const meta = {
    title: "Google",
    desc: "Search engine google api",
  };

  return (
    <Layout {...meta}>
      <section>ImageSearch</section>
    </Layout>
  );
  // return <div>ImageSearch</div>;
};

export default ImageSearch;
