import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="pt-1">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 text-black">
              <h6 className="text-uppercase fw-bold mb-4">
                <span style={{ color: "red" }}>Car Rental</span>
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-black">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "red" }}
              >
                Products
              </h6>
              <p>
                <a href="#home" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="#about" className="text-reset">
                  AboutUs
                </a>
              </p>
              <p>
                <a href="#cars" className="text-reset">
                  Cars
                </a>
              </p>
              <p>
                <NavLink className="text-black" to={"/Login"}>
                  Login
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 text-black">
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "red" }}
              >
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 text-black"
            >
              <h6
                className="text-uppercase fw-bold mb-4"
                style={{ color: "red" }}
              >
                Contact
              </h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                carrental@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 212 6 23 45 67 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 212 6 23 45 67 88
              </p>
            </MDBCol>
            <div className="text-center p-4">
              © 2023 Copyright All Rights Reserved.
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
