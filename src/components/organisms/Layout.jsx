import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, desc }) => {
  return (
    <div className="min-h-screen h-full w-full bg-white dark:bg-bg-dark text-gray-900 dark:text-white transition-all ease-linear duration-200">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>

      <Header />

      <main className="h-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
