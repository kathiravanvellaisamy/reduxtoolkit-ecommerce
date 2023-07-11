import React from "react";
import { productList } from "../data/store";
import Product from "../components/Product";

const Dashboard = () => {
  return (
    <>
      <div className="row">
        <h2 className="display-5  mt-3 mb-3 text-secondary">
          For the Foodie in You!
        </h2>
        {productList.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
