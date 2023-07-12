import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const list = useSelector((state) => state.cart.list);
  return (
    <div className="container">
      <div className="pt-5 pb-5">
        <div className="border border-info rounded">
          <h1 className=" p-2">Cart Items</h1>
          <p className=" p-2">{list[0].title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
