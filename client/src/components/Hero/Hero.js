import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/img-body.png";

const Hero = (props) => {
  return (
    <main id="home" style={props.name}>
      <div className="container">
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
    </main>
  );
};

export default Hero;
