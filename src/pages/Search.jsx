import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import { TotalSearchResult } from "../components/molecules/TotalSearchResult";
import Layout from "../components/organisms/Layout";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import SearchCard from "../components/molecules/Cards/SearchCard";
import getSearchApi from "../service/getSearchApi";
import GoogleInfo from "../components/organisms/GoogleInfo";
import Accordion from "../components/molecules/Accordion";
import Loading from "../components/molecules/Loading";
import ErrorServer from "../components/molecules/ErrorServer";

const Search = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { dataApi, isLoading, keyword, isError } = state;
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

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
        <ContentWrapper className="px-1 pb-2 lg:pb-8 lg:px-24">
          <Loading />
        </ContentWrapper>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout {...meta}>
        <ContentWrapper className="px-1 pb-2 lg:pb-8 lg:px-24">
          <ErrorServer />
        </ContentWrapper>
      </Layout>
    );
  }

  return (
    <Layout {...meta}>
      <ContentWrapper className="px-1 pb-2 lg:pb-8 lg:px-24">
        <TotalSearchResult
          total={dataApi?.total ?? 0}
          time={dataApi?.ts ?? 0}
        />
        <div className="flex w-full gap-3 lg:gap-10">
          <CardsWrapper className="w-full lg:w-8/12 flex flex-col gap-3">
            {dataApi?.results?.map((result, idx) => {
              if (idx === 1) {
                return (
                  <div key={idx}>
                    {dataApi?.answers?.length > 0 && (
                      <Accordion dataAccordion={dataApi?.answers ?? []} />
                    )}

                    <SearchCard
                      className={`${
                        dataApi?.answers?.length > 0 ? "mt-3 lg:mt-5" : ""
                      }`}
                      result={result}
                    />
                  </div>
                );
              } else {
                return <SearchCard key={idx} result={result} />;
              }
            })}
          </CardsWrapper>
          <GoogleInfo />
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default Search;
