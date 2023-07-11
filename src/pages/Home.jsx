import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;
