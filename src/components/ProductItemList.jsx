import React from "react";

const ProductItemList = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          {" "}
          <img src={props.thumbnail} className="w-75  m-3" alt="img" />
        </div>
        <div className="col-md-4  d-flex align-items-center">
          <h6
            className="m-1 text-success text-left"
            style={{ fontSize: "17px" }}
          >
            {props.title}
          </h6>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <div className="m-1">{props.price}</div>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <button className="btn btn-secondary m-1">+</button>
          <h6 className="m-1">9</h6>
          <button className="btn btn-secondary m-1">-</button>
        </div>
        <div className="col-md-2 d-flex align-items-center">
          <h6>Total Price</h6>
        </div>
      </div>
    </div>
  );
};

export default ProductItemList;
