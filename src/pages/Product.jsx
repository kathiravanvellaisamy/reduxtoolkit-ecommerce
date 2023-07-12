import React from "react";
import { useParams } from "react-router-dom";
import { productList } from "../data/store";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const item = productList.find(
    (element) => element.id === parseInt(params.id)
  );

  const addToCart = () => {
    dispatch(addItem(item));
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-column flex-md-row pt-5 pb-5">
        <div className="m-3">
          <img
            src={item.thumbnail}
            className="img-fluid rounded"
            alt={item.title}
          />
        </div>
        <div className="m-3">
          <h1 className="text-success">{item.title}</h1>
          <hr />
          <p>{item.description}</p>
          <h3 className="text-secondary">₹ {item.price}</h3>
          <button onClick={addToCart} className="btn btn-warning">
            <span className=" font-weight-bold">Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
