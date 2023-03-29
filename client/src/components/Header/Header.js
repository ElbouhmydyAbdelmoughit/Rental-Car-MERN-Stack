import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  return (
    <header className="sticky-top d-flex justify-content-between bg-white shadow-lg p-2">
      <nav className="container-fluid d-flex align-items-center justify-content-between">
        <div>
          <Link to="/clientpage">
            <h1>YOUCAR</h1>
          </Link>
        </div>
        <label htmlFor="checkbox" id="togg">
          &#9776;
        </label>
        <input type="checkbox" className="d-none" id="checkbox" />
        <div className="list text-center">
          <label htmlFor="checkbox" id="togg">
            <i className="bi bi-x-lg"></i>
          </label>
          <Link to="home" className="text-dark">
            home
          </Link>
          <Link to="packages" className="text-dark">
            packages
          </Link>
          <Link to="show" className="text-dark">
            show
          </Link>
          <Link to="services" className="text-dark">
            services
          </Link>
          <Link to="review" className="text-dark">
            review
          </Link>
          <Link to="contact" className="text-dark">
            contact
          </Link>
          <Link
            to="#"
            className="btn rounded-3 text-white border-bottom-0"
            style={{ backgroundColor: "#F94A29" }}
          >
           Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
