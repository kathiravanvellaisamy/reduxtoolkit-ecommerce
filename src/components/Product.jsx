import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className="col-md-4 item-details cursor-pointer"
      role="button"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="card m-2 shadow p-3 mb-5 bg-white rounded">
        <div>
          <img
            src={product.thumbnail}
            className="img-fluid mb-3 rounded"
            alt={product.title}
          />
        </div>
        <h6 className="text-secondary m-1">{product.title}</h6>

        <div className="d-flex justify-content-between m-2">
          <h5 className="text-danger">₹ {product.price}</h5>
          <button className="btn pizza-button">Buy Now</button>
        </div>
        <div className="mt-2">
          <span class="badge badge-light text-dark border">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
