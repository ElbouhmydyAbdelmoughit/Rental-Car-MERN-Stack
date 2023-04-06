import React from "react";
import "./Sidebar.css";
import "tippy.js/animations/scale.css";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div
      style={{ background: "#000" }}
      id="sid"
      className="col-auto col-xl-2 min-vh-100 text-center"
    >
      <nav className="text-sm-start mt-5 pb-5 p-sm-2">
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/"}>
          <i className="bi bi-house fs-5 me-sm-2"></i>
          <span className="d-none d-sm-inline">Home</span>
        </NavLink>
        <br />
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/car"}>
          <i className="bi bi-car-front-fill fs-5 me-sm-2"></i>
          <span className="d-none d-sm-inline">Cars</span>
        </NavLink>
        <br />
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/order"}>
          <i className="bi bi-cart4 fs-5 me-sm-2"></i>
          <span className="d-none d-sm-inline">Orders</span>
        </NavLink>
        <br />
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/client"}>
          <i className="bi bi-people me-sm-2 fs-5"></i>
          <span className="d-none d-sm-inline">Client</span>
        </NavLink>
        <br />
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/profile"}>
          <i className="bi bi-person me-sm-2 fs-5"></i>
          <span className="d-none d-sm-inline">Profil</span>
        </NavLink>
        <br />
        <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/#"}>
          <i className="bi bi-sliders2 me-sm-2 fs-5"></i>
          <span className="d-none d-sm-inline">Settings</span>
        </NavLink>
        <br />
        <button className="nav-link p-1 p-sm-2 text-white" to={logout}>
          <i className="bi bi-box-arrow-right me-sm-2 fs-5"></i>
          <span className="d-none d-sm-inline">Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
