import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Command = () => {
  const navigate = useNavigate()
  const access = localStorage.getItem("token");
  useEffect(() => {
    if (!access) {
      navigate("/login");
    }
  }, [access]);
  return (
    <>
      <Header />
      <div></div>
      <Footer />
    </>
  );
};
export default Command;
