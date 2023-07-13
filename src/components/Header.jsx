import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.cart.list);
  return (
    <header className="bg-dark p-2">
      <div className="container d-flex flex-row justify-content-between align-items-center">
        <div>
          <h3 className="text-warning">
            <FaPizzaSlice /> FACTORY
          </h3>
        </div>
        <div className="d-none d-md-block w-50">
          <input
            type="search"
            className="form-control"
            placeholder="What would you like to eat today?"
          />
        </div>
        <div className="d-flex justify-content-between  align-items-center">
          <div>
            <Link to="/" className="text-light text-decoration-none m-3 ">
              Home
            </Link>
          </div>
          <AiOutlineShoppingCart
            size={24}
            className="text-light text-decoration-none m-3 "
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          />
          <span
            className="badge badge-success "
            style={{
              backgroundColor: "orange",
              marginLeft: "-20px",
              marginTop: "-22px",
            }}
          >
            {list.length}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
