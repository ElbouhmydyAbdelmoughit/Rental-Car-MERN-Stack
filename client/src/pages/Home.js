import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Authorisation from "../components/Authorisation/Authorisation";

const Home = () => {
  console.log(Authorisation());
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
};
export default Home;
