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
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <input type="checkbox" id="menu" className="d-none" />
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
              <NavLink
                className="nav-link p-1 p-sm-2 text-white"
                to={"/client"}
              >
                <i className="bi bi-people me-sm-2 fs-5"></i>
                <span className="d-none d-sm-inline">Client</span>
              </NavLink>
              <br />
              <NavLink
                className="nav-link p-1 p-sm-2 text-white"
                to={"/profile"}
              >
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
          <div className="col py-3">
            <div className="container mt-5">
              <div className="d-flex justify-content-center row">
                <div className="col-md-10">
                  <div className="rounded">
                    <div className="table-responsive table-borderless">
                      <table className="table" style={{ minWidth: "800px" }}>
                        <thead className="bg-black text-white">
                          <tr>
                            <th className="fw-bold">Id</th>
                            <th className="fw-bold">Name</th>
                            <th className="fw-bold">Model</th>
                            <th className="fw-bold">Price</th>
                            <th className="fw-bold">Description</th>
                            <th className="fw-bold">#</th>
                          </tr>
                        </thead>
                        <tbody className="table-body">
                          <tr className="cell-1">
                            <td>SO-13487</td>
                            <td>Gasper Antunes</td>
                            <td>
                              <span className="badge badge-success">
                                Fullfilled
                              </span>
                            </td>
                            <td>$2674.00</td>
                            <td>Today</td>
                            <td className="d-flex justify-content-between text-black">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pen"></i>
                            </td>
                          </tr>
                          <tr className="cell-1">
                            <td>SO-13453</td>
                            <td>Aartsen van</td>
                            <td>
                              <span className="badge badge-info">
                                Confirmed
                              </span>
                            </td>
                            <td>$3454.00</td>
                            <td>Yesterday</td>
                            <td className="d-flex justify-content-between text-black">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pen"></i>
                            </td>
                          </tr>
                          <tr className="cell-1">
                            <td>SO-13498</td>
                            <td>Trashes Habard</td>
                            <td>
                              <span className="badge badge-danger">
                                Partially shipped
                              </span>
                            </td>
                            <td>$6274.00</td>
                            <td>May 12,2020</td>
                            <td className="d-flex justify-content-between text-black">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pen"></i>
                            </td>
                          </tr>
                          <tr className="cell-1">
                            <td>SO-16499</td>
                            <td>Samban Hubart</td>
                            <td>
                              <span className="badge badge-success">
                                Fullfilled
                              </span>
                            </td>
                            <td>$6375.00</td>
                            <td>May 11,2020</td>
                            <td className="d-flex justify-content-between text-black">
                              <i className="bi bi-trash"></i>
                              <i className="bi bi-pen"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
