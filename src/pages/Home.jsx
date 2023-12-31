import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "./Product";
import Cart from "./Cart";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <>
      <Header />

      <div>
        <ScrollToTop>
          <div />
        </ScrollToTop>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;
