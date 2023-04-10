import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  });

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
