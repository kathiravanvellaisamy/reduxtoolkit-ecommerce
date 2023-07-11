import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Home;
