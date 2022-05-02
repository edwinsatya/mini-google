import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import Layout from "../components/organisms/Layout";
import getSearchApi from "../service/getSearchApi";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import NewsCard from "../components/molecules/Cards/NewsCard";

const NewsSearch = () => {
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

    getSearchApi()
      .then((res) => {
        dispatch({ type: "SET_DATA_API", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "SET_IS_ERROR", payload: true });
      });
  }, [keyword]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout {...meta}>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
          <CardsWrapper className="flex flex-col gap-2 lg:gap-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </CardsWrapper>
        </ContentWrapper>
      )}
    </Layout>
  );
};

export default NewsSearch;
