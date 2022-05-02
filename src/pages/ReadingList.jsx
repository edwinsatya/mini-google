import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import Layout from "../components/organisms/Layout";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
// import NewsCard from "../components/molecules/Cards/NewsCard";

const ReadingList = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { dataApi, isLoading, keyword } = state;
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

  useEffect(() => {
    const newKeyword = query.slice(3).split("+").join(" ");
    const type = pathUrl.substring(1);
    dispatch({ type: "CHANGE_KEYWORD", payload: newKeyword });
    dispatch({ type: "CHANGE_TYPE", payload: type });
    dispatch({ type: "CHANGE_IS_LOADING", payload: true });
  }, [keyword]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout {...meta}>
      <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
        <CardsWrapper className="flex flex-col gap-2 lg:gap-4">
          Reading List
        </CardsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default ReadingList;
