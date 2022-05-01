import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import MenuBar from "./MenuBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children, title, desc }) => {
  const pathUrl = useLocation().pathname;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>

      <div className="min-h-screen h-full w-full max-w-screen-2xl flex flex-col mx-auto">
        <Header />
        {pathUrl !== "/" && <MenuBar />}
        <main className="h-full">{children}</main>
      </div>

      <Footer className={pathUrl === "/" ? "fixed" : ""} />
    </>
  );
};

export default Layout;
