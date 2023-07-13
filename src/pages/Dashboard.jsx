import React from "react";
import { productList } from "../data/store";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="row">
          <h2 className="display-5 mt-3 mb-3 text-secondary   pb-2  ">
            For the Foodie in You!
          </h2>
          {productList.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
