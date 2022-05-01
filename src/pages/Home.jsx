import Layout from "../components/organisms/Layout";
import FormWithHero from "../components/organisms/FormWithHero";
import ContentWrapper from "../components/organisms/ContentWrapper";

const Home = () => {
  const meta = {
    title: "Google",
    desc: "Search engine google api",
  };

  return (
    <Layout {...meta}>
      <ContentWrapper>
        <FormWithHero />
      </ContentWrapper>
    </Layout>
  );
};

export default Home;
