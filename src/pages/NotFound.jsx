import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Page Notfound</title>
        <meta name="description" content="Page Notfound" />
      </Helmet>

      <div className="flex flex-col gap-3 lg:gap-6">
        <h1>
          <span className="text-4xl lg:text-9xl font-bold tracking-wide">
            404
          </span>
          <span className="text-xs lg:text-2xl"> error</span>
        </h1>
        <hr className="border border-gray-300" />
        <p className="text-center text-xs lg:text-base">Page not found</p>

        <Button
          className="border border-gray-600 hover:bg-gray-600 hover:text-white rounded-lg p-1 lg:p-2 text-xs lg:text-base"
          text="Back to Google"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default NotFound;
