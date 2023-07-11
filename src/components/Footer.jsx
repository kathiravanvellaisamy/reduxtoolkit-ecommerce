import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="d-flex justify-content-between pt-5 pb-5  border-bottom border-danger">
          <div>
            <h3 className="text-warning">
              <FaPizzaSlice /> FACTORY
            </h3>
          </div>
          <div className="d-flex justify-content-between">
            <AiFillYoutube size={26} className="text-light m-2" />
            <AiFillFacebook size={26} className="text-light m-2" />
            <AiFillInstagram size={26} className="text-light m-2" />
            <AiFillTwitterSquare size={26} className="text-light m-2" />
          </div>
        </div>
        <div className="d-flex  flex-sm-row flex-column   justify-content-between pt-5 pb-5 border-bottom border-danger">
          <div className="d-flex flex-column m-2">
            <h6 className="text-light">Topics</h6>
            <Link className="text-info">Order Pizza Online</Link>
            <Link className="text-info">Order Cheese Burst Pizza Online</Link>
          </div>
          <div className="d-flex flex-column m-2">
            <h6 className="text-light">Legal</h6>
            <Link className="text-info">Term & Conditions</Link>
          </div>
          <div className="d-flex flex-column m-2">
            <h6 className="text-light">Contact Us</h6>
            <Link className="text-info">Party Orders</Link>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-5 pb-3  border-bottom border-danger">
          <div className="d-flex flex-column">
            <p className="text-info">
              <AiOutlineWhatsApp size={25} className="text-info m-1" />
              We are here to help you. Call us at 07738383000
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end pt-3 pb-3">
          <div className="d-flex flex-column">
            <p className="text-info">
              Copyright © 2023. Pizza Factory - All Rights Reserved. Terms of
              use Privacy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
