// components
import Header from "../components/Header";
import Footer from "../components/Footer";
// routers
import Routers from "../routers/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
