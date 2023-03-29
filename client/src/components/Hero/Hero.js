import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/img-body.png";

const Hero = (props) => {
  return (
    <main id="home" style={props.name}>
      <div className="container" style={{ background: "#F94A29" }}>
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md text-center text-sm-start">
            <h1>Hello!</h1>
            <div>
              <p className="fs-1">Find the Best Cars</p>
            </div>
          </div>
          <div className="d-none d-lg-inline col-lg-6 col-md-6 col-sm-12">
            <img src={image} alt="..." id="img" style={{ maxWidth: 500 }} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;