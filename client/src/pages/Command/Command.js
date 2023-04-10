import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const Command = () => {
  const [car, setCar] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const access = localStorage.getItem("token");
  useEffect(() => {
    if (!access) {
      navigate("/login");
    }
  }, [access]);

  useEffect(() => {
    getCar();
  }, []);
  const getCar = async () => {
    await axios.get("http://localhost:2000/car/getOne/" + id).then((data) => {
      setCar(data.data.Car);
    });
  };

  const handleChnage = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-between"
        style={{ margin: "100px 50px" }}
      >
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row">
            <div className="col-md-6">
              <img
                src={"http://localhost:2000/" + car.image}
                alt="Trendy Pants and Shoes"
                className=" img-fluid w-100 h-100 rounded"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title fw-bold"> {car.name} </h4>
                <h5 className="card-title fw-bolder text-secondary">
                  {car.model}
                </h5>
                <p className="card-text">{car.description}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto mt-5">
          <form className="mt-2">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChnage}
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                onChange={handleChnage}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChnage}
                placeholder="CIN"
                name="cin"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChnage}
                placeholder="Address"
                name="address"
              />
            </div>
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-dark me-2"
                onClick={handleSubmit}
              >
                Command
              </button>
              <Link
                to={"https://www.paypal.com/mep/dashboard"}
                type="button"
                className="btn btn-primary ms-2"
              >
                PayPal
              </Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Command;
