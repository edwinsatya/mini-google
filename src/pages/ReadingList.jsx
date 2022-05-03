import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect, useMemo } from "react";
import Layout from "../components/organisms/Layout";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import NewsCard from "../components/molecules/Cards/NewsCard";

const NewsSearch = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { keyword, listReadingNews } = state;
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

  const handleRemoveNews = (news) => {
    const currentLocalNews = JSON.parse(localStorage.getItem("listNews"));
    delete currentLocalNews[news.id];
    dispatch({ type: "CHANGE_READING_NEWS", payload: currentLocalNews });
    localStorage.setItem("listNews", JSON.stringify(currentLocalNews));
  };

  const computedListNews = useMemo(() => {
    const newArr = [];
    for (const property in listReadingNews) {
      const newObj = {
        ...listReadingNews[property],
        inReadingList: true,
      };
      newArr.push(newObj);
    }
    return newArr;
  }, [listReadingNews]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const newKeyword = query.slice(3).split("+").join(" ");
    const type = pathUrl.substring(1);
    const currentLocalNews = JSON.parse(localStorage.getItem("listNews"));
    dispatch({ type: "CHANGE_KEYWORD", payload: newKeyword });
    dispatch({ type: "CHANGE_TYPE", payload: type });
    dispatch({ type: "CHANGE_READING_NEWS", payload: currentLocalNews });
  }, [keyword]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout {...meta}>
      <ContentWrapper className="py-2 px-6 lg:py-6 lg:px-28">
        <CardsWrapper className="flex flex-col gap-2 lg:gap-4">
          {computedListNews.length === 0 ? (
            <h1 className="text-xs lg:text-lg">No Have News</h1>
          ) : (
            computedListNews?.map((result, idx) => (
              <NewsCard
                key={idx}
                result={result}
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
