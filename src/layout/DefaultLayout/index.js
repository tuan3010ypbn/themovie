import Footer from "~/component/Footer";
import Header from "~/component/Header";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
