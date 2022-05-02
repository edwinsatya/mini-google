import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect, useMemo } from "react";
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
  const { dataApi, isLoading, keyword, listReadingNews } = state;
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

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
      return dataApi.entries?.map((news) => {
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
            {computedListNews?.map((result, idx) => (
              <NewsCard
                key={idx}
                result={result}
                addNews={() => handleAddNews(result)}
                removeNews={() => handleRemoveNews(result)}
              />
            ))}
          </CardsWrapper>
        </ContentWrapper>
      )}
    </Layout>
  );
};

export default NewsSearch;
