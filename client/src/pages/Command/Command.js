import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Command = () => {
  const { id } = useParams();
  const access = localStorage.getItem("token");
  const navigate = useNavigate();
  const stripe = useStripe();
  const element = useElements();

  const [car, setCar] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    name: "",
    name: "",
    name: "",
  });

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

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    const cardElement = element.getElement("card");
    const { name, email, phone, address } = credentials;
    const billingInfo = {
      name,
      phone,
      email,
      address: {
        line1: address,
      },
    };

    try {
      const paymentIntent = await axios.post(
        "http://localhost:2000/command/payment",
        { amount: car.price * 100 }
      );

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
                <p className="card-text text-white bg-danger ps-2 rounded text-center  w-25">
                  {car.price + "$"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 mx-auto">
          <form className="mt-2">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Email"
                name="email"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                placeholder="Address"
                name="address"
              />
            </div>
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: { fontSize: "16px" },
                  invalid: {
                    color: "red",
                  },
                },
              }}
            />
            <div className="mt-2">
              <button
                disabled={isProcessing}
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
