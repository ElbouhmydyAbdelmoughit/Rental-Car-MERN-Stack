import React, { useState } from "react";
import "./Register.css";
import login from "../../assets/img/Login.jpg";
import toastGenerator from "../../helpers/toastGenerator";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.trim() === "") {
      toastGenerator("error", "Field Name is Required");
    } else if (user.email.trim() === "") {
      toastGenerator("error", "Field Email is Required");
    } else if (user.password.trim() === "") {
      toastGenerator("error", "Field Password is Required");
    } else if (user.confirm_password.trim() === "") {
      toastGenerator("error", "Field Cofirm Password is Required");
    } else if (user.password.trim() !== user.confirm_password.trim()) {
      toastGenerator("error", "Password and Confirm Password Not Match");
    }

    axios
      .post(`http://localhost:2000/auth/register`, { ...user })
      .then((data) => {
        if (data.data) {
          toastGenerator("success", data.data);
        } else {
          console.log(data.response.data.message);
          toastGenerator("error", data.response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto w-75">
      <form>
        <MDBContainer className="my-5">
          <MDBRow className="g-0 align-items-center">
            <MDBCol col="6">
              <MDBCard
                className="my-5 cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <MDBCardBody className="p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5" style={{ color: "#395b71" }}>
                    Sign up now
                  </h2>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Name"
                    name="name"
                    type="name"
                    value={user.name}
                    onChange={HandleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={HandleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={HandleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    value={user.confirm_password}
                    onChange={HandleChange}
                  />
                  <MDBBtn
                    className="w-100 mb-4"
                    size="md"
                    style={{
                      backgroundColor: "#395b71",
                      boxShadow: "3px 3px 15px #7B8FA1",
                    }}
                    onClick={handleSubmit}
                  >
                    sign up
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol col="6">
              <img src={login} class="w-100 rounded-4 shadow-4" alt="image" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
