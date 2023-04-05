import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 1{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 2{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Orders</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="fs-4 bi-bootstrap"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Item</span> 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-grid"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 1
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 2
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Product</span> 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
                            <th>Order</th>
                            <th>Company name</th>
                            <th>status</th>
                            <th>Total</th>
                            <th>Created</th>
                            <th></th>
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
                            <td>
                              <i className="fa fa-ellipsis-h text-black-50"></i>
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
                            <td>
                              <i className="fa fa-ellipsis-h text-black-50"></i>
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
                            <td>
                              <i className="fa fa-ellipsis-h text-black-50"></i>
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
                            <td>
                              <i className="fa fa-ellipsis-h text-black-50"></i>
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
