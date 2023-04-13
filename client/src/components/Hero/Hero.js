import React from "react";
import image from "../../assets/img/img-body.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [car, setCar] = useState([]);
  const getCars = () => {
    axios.get("http://localhost:2000/car").then((car) => {
      setCar(car.data.Car);
    });
  };

  useEffect(() => {
    let userToken = localStorage.getItem("token");
    getCars();
  }, []);

  return (
    <main id="home">
      <div className="container" id="home">
        <div className="row d-flex justify-content-between align-items-center">
          <div
            className="col-md text-center text-sm-start"
            style={{ marginTop: "150px" }}
          >
            <h1 className="fw-bold">
              <span style={{ color: "red" }}>Rent</span> a car for your next
              vacation Excellent rates and a fleet of well-maintained, modern
              cars
            </h1>
          </div>
          <div className="d-none d-lg-inline col-lg-6 col-md-6 col-sm-12">
            <img src={image} alt="..." id="img" />
          </div>
        </div>
      </div>
      <div class="row col-12 text-wrap d-md-flex d-block text-black" id="about">
        <div class="col-6" id="image_about">
          <img
            class="img-fluid w-100 mx-auto  d-none d-md-block"
            src={require("../../assets/img/about.png")}
            alt="image about"
            id="img"
          />
        </div>
        <div
          class="contant_about col-12 col-md-6 text-start text-center text-md-start"
          style={{ marginTop: 150 }}
        >
          <span>About Us</span>
          <h3 class="fw-bold my-2">
            Welcome to YOU<span>CAR</span>
          </h3>
          <p>
            YouCar is the best Car rental in the world, here you can find the
            top cars with the best price, if you are interested in our cars
            don't hesitate to contact us. Our team is available everyday 7/7
          </p>
        </div>
      </div>
      <div
        className="container d-flex flex-wrap  justify-content-around   align-items-center"
        style={{ marginTop: 110, marginBottom: 110 }}
        id="cars"
      >
        <>
          {car.map((c, i) => (
            <div
              className="card mt-5 mb-5"
              style={{ width: "18rem", height: "25rem" }}
              key={i}
            >
              <div style={{ height: "11rem" }}>
                <img
                  className="card-img-top w-100"
                  src={"http://localhost:2000/" + c.image}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{c.name}</h5>
                <span> {c.model} </span>
                <p className="card-text">{c.description}</p>
                <div className=" d-flex justify-content-between">
                  <p className="card-text fw-bolder text-danger">{c.price} $</p>
                  <p className={c.status === "available" ? "text-white bg-success rounded-9 ps-2 pe-2 " :"text-white bg-danger rounded-9 ps-2 pe-2 "}>{c.status} $</p>
                </div>
                <Link to={"/command/" + c._id} className="btn btn-dark">
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </>
      </div>
    </main>
  );
};

export default Hero;
