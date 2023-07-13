import React from "react";
import { useSelector } from "react-redux";
import ProductItemList from "../components/ProductItemList";

const Cart = () => {
  const list = useSelector((state) => state.cart.list);
  return (
    <div className="container">
      <div className="pt-5 pb-5">
        <div className="border border-info rounded">
          <h1 className=" p-2">Cart Items</h1>

          {list.map((item) => (
            <ProductItemList {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
