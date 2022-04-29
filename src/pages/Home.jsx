import Layout from "../components/organisms/Layout";
import FormWithHero from "../components/organisms/FormWithHero";

const Home = () => {
  const meta = {
    title: "Google",
    desc: "Search engine google api",
  };

  return (
    <Layout {...meta}>
      <FormWithHero />
    </Layout>
  );
};

export default Home;
