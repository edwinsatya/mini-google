import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect, useMemo } from "react";
import Layout from "../components/organisms/Layout";
import getSearchApi from "../service/getSearchApi";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import NewsCard from "../components/molecules/Cards/NewsCard";
import Loading from "../components/molecules/Loading";
import ErrorServer from "../components/molecules/ErrorServer";

const NewsSearch = () => {
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;
  const meta = {
    title: `${query.slice(3).split("+").join(" ")} | Google Search`,
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { dataApi, isLoading, isError, keyword, listReadingNews } = state;

  const handleAddNews = (news) => {
    const currentLocalNews = JSON.parse(localStorage.getItem("listNews"));
    let objNews = {};
    if (currentLocalNews) {
      objNews = {
        ...currentLocalNews,
        [news.id]: {
          ...news,
        },
      };
    } else {
      objNews = {
        [news.id]: {
          ...news,
        },
      };
    }
    dispatch({ type: "CHANGE_READING_NEWS", payload: objNews });
    localStorage.setItem("listNews", JSON.stringify(objNews));
  };

  const handleRemoveNews = (news) => {
    const currentLocalNews = JSON.parse(localStorage.getItem("listNews"));
    let objNews = { ...currentLocalNews };
    delete objNews[news.id];
    dispatch({ type: "CHANGE_READING_NEWS", payload: objNews });
    localStorage.setItem("listNews", JSON.stringify(objNews));
  };

  const computedListNews = useMemo(() => {
    const currentLocalNews = JSON.parse(localStorage.getItem("listNews"));
    if (currentLocalNews) {
      return dataApi?.entries?.map((news) => {
        return {
          ...news,
          inReadingList: currentLocalNews[news.id] ? true : false,
        };
      });
    }
    return dataApi.entries;
  }, [dataApi, listReadingNews]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const newKeyword = query.slice(3).split("+").join(" ");
    const type = pathUrl.substring(1);
    dispatch({ type: "CHANGE_KEYWORD", payload: newKeyword });
    dispatch({ type: "CHANGE_TYPE", payload: type });
    dispatch({ type: "CHANGE_IS_LOADING", payload: true });

    getSearchApi(type, query)
      .then(({ data }) => {
        dispatch({ type: "SET_DATA_API", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "CHANGE_IS_ERROR", payload: true });
      });
  }, [keyword]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <Layout {...meta}>
        <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
          <Loading />
        </ContentWrapper>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout {...meta}>
        <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
          <ErrorServer />
        </ContentWrapper>
      </Layout>
    );
  }

  return (
    <Layout {...meta}>
      <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
        <CardsWrapper className="flex flex-col gap-2 lg:gap-4">
          {computedListNews?.length === 0 ? (
            <h1 className="text-xs lg:text-lg">No Have News</h1>
          ) : (
            computedListNews?.map((result, idx) => (
              <NewsCard
                key={idx}
                result={result}
                addNews={() => handleAddNews(result)}
                removeNews={() => handleRemoveNews(result)}
              />
            ))
          )}
        </CardsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default NewsSearch;
