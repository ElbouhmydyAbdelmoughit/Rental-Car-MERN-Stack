import React from "react";
import image from "../../assets/img/img-body.png";

const Hero = (props) => {
  return (
    <main id="home">
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
      <div class="row col-12 text-wrap d-md-flex d-block">
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
    </main>
  );
};

export default Hero;
