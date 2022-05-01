import Layout from "../components/organisms/Layout";
import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import { TotalSearchResult } from "../components/molecules/TotalSearchResult";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import SearchCard from "../components/molecules/Cards/SearchCard";
import getSearchApi from "../service/getSearchApi";

const Search = () => {
  const meta = {
    title: "Google Search",
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { dataApi, isLoading } = state;
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;

  useEffect(() => {
    const keyword = query.slice(3).split("+").join(" ");
    const type = pathUrl.substring(1);
    dispatch({ type: "CHANGE_KEYWORD", payload: keyword });
    dispatch({ type: "CHANGE_TYPE", payload: type });
    dispatch({ type: "CHANGE_IS_LOADING", payload: true });

    getSearchApi()
      .then((res) => {
        dispatch({ type: "SET_DATA_API", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "SET_IS_ERROR", payload: true });
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(dataApi);

  return (
    <Layout {...meta}>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ContentWrapper className="px-4 lg:px-24">
          <TotalSearchResult
            total={dataApi.total ?? 0}
            time={dataApi.ts ?? 0}
          />
          <div className="flex w-full gap-3">
            <CardsWrapper className="w-full lg:w-8/12 flex flex-col gap-3">
              {dataApi.results?.map((data, idx) => (
                <SearchCard key={idx} result={data} />
              ))}
            </CardsWrapper>
            <div className="hidden lg:flex w-4/12 bg-red-300">
              <div className="">
                <div>
                  <h1>Google</h1>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      )}
    </Layout>
  );
};

export default Search;
