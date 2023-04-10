import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
      setCar(data);
    });
  };

  console.log(car);

  return (
    <>
      <Header />
      <div></div>
      <Footer />
    </>
  );
};
export default Command;
