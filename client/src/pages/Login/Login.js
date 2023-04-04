import React, { useEffect, useState } from "react";
import "./Login.css";
import login from "../../assets/img/Login.jpg";
import toastGenerator from "../../helpers/toastGenerator";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const Login = () => {
  const location = useLocation();
  const navigation = useNavigate();
  useEffect(() => {
    toastGenerator("success", location.state);
  }, [location.state]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useLocalStorage("token", "");

  const HandleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user.email.trim() === "") {
      toastGenerator("error", "Field Email is Required");
    } else if (user.password.trim() === "") {
      toastGenerator("error", "Field Password is Required");
    }
    axios
      .post(`http://localhost:2000/auth/login`, { ...user })
      .then((data) => {
        if (data.data.message) {
          setToken(data.data.token);
          toastGenerator("success", data.data.message);
          setTimeout(() => {
            navigation("/");
          }, 4000);
        } else toastGenerator("error", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(token);
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
                    Login now
                  </h2>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={HandleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    name="password"
                    type="password"
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

                  <div className="text-center">
                    <Link to={"/Register"}>create account</Link>
                    <p>or sign up with:</p>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#395b71" }}
                    >
                      <MDBIcon fab icon="facebook-f" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#395b71" }}
                    >
                      <MDBIcon fab icon="twitter" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#395b71" }}
                    >
                      <MDBIcon fab icon="google" size="sm" />
                    </MDBBtn>

                    <MDBBtn
                      tag="a"
                      color="none"
                      className="mx-3"
                      style={{ color: "#395b71" }}
                    >
                      <MDBIcon fab icon="github" size="sm" />
                    </MDBBtn>
                  </div>
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

export default Login;
