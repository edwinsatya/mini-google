import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, desc }) => {
  return (
    <div className="min-h-screen h-full w-full max-w-7xl flex flex-col mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={desc} />
      </Helmet>

      <Header />

      <main className="h-full px-4 lg:px-24">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
