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
              <NavLink
                className="nav-link p-1 p-sm-2 text-white"
                to={"/statistique"}
              >
                <i className="bi bi-speedometer2 fs-5 me-sm-2"></i>
                <span className="d-none d-sm-inline">Dashboard</span>
              </NavLink>
              <br />
              <NavLink
                className="nav-link p-1 p-sm-2 text-white"
                to={"/voyage"}
              >
                <i className="bi bi-grid fs-5 me-sm-2"></i>
                <span className="d-none d-sm-inline">voyage</span>
              </NavLink>
              <br />
              <NavLink className="nav-link p-1 p-sm-2 text-white" to={"/agent"}>
                <i className="bi bi-person-vcard fs-5 me-sm-2"></i>
                <span className="d-none d-sm-inline">Agent</span>
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
              <button className="nav-link p-1 p-sm-2 text-white" to={"/#"}>
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
                      <table
                        className="table responsive"
                        style={{ minWidth: "800px" }}
                      >
                        <thead className="bg-black text-white">
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>#</th>
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
                            <td className="d-flex justify-content-between">
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
                            <td className="d-flex justify-content-between">
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
                            <td className="d-flex justify-content-between">
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
                            <td className="d-flex justify-content-between">
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
