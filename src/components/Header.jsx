import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-dark p-2">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div>
          <h3 className="text-warning">
            <FaPizzaSlice /> FACTORY
          </h3>
        </div>
        <div className="d-none d-sm-block w-50">
          <input
            type="search"
            className="form-control"
            placeholder="What would you like to eat today?"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-light text-decoration-none m-3 ">
              <LuPhoneCall size={24} /> 07738383000
            </p>
          </div>
          <AiOutlineShoppingCart
            size={24}
            className="text-light text-decoration-none m-3 "
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
