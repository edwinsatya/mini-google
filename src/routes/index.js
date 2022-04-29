import { useRoutes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ImageSearch from "../pages/ImageSearch";
import NewsSearch from "../pages/NewsSearch";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

const Routes = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/image",
      element: <ImageSearch />,
    },
    {
      path: "/news",
      element: <NewsSearch />,
    },
    {
      path: "404",
      element: <NotFound />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);

  return <>{routing}</>;
};

export default Routes;
