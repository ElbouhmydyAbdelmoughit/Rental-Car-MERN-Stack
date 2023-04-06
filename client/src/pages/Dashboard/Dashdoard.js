import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

// <div className="">
//   <div className="">
//     <Sidebar />
//   </div>
//   <div className="">
//     <Outlet />
//   </div>
// </div>
const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <input type="checkbox" id="menu" className="d-none" />
        <Sidebar />
        <div className="col py-3">
          <div className="container mt-5">
            <div className="d-flex justify-content-center row">
              <div className="col-md-10">
                <div className="rounded">
                  <div className="table-responsive table-borderless">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
