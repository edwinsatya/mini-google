import { useLocation } from "react-router-dom";
import { UseGlobalContext } from "../store/context";
import { useEffect } from "react";
import Layout from "../components/organisms/Layout";
import getSearchApi from "../service/getSearchApi";
import ContentWrapper from "../components/organisms/ContentWrapper";
import CardsWrapper from "../components/molecules/Cards/CardsWrapper";
import ImageCard from "../components/molecules/Cards/ImageCard";
import Loading from "../components/molecules/Loading";
import ErrorServer from "../components/molecules/ErrorServer";

const ImageSearch = () => {
  const query = useLocation().search;
  const pathUrl = useLocation().pathname;
  const meta = {
    title: `${query.slice(3).split("+").join(" ")} | Google Search`,
    desc: "Search engine google api",
  };
  const { state, dispatch } = UseGlobalContext();
  const { dataApi, isLoading, isError, keyword } = state;

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
        <ContentWrapper className="p-2 lg:p-6">
          <Loading />
        </ContentWrapper>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout {...meta}>
        <ContentWrapper className="p-2 lg:p-6">
          <ErrorServer />
        </ContentWrapper>
      </Layout>
    );
  }

  return (
    <Layout {...meta}>
      <ContentWrapper className="p-2 lg:p-6">
        <CardsWrapper className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center gap-4 lg:gap-7">
          {dataApi?.image_results?.length === 0 ? (
            <h1 className="text-xs lg:text-lg">No Have Images</h1>
          ) : (
            dataApi?.image_results?.map((result, idx) => (
              <ImageCard key={idx} result={result} />
            ))
          )}
        </CardsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default ImageSearch;
