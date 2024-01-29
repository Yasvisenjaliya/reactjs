import React from "react";
import Hero from "../component/Hero";
import Product from "../component/Product";
import Banner from "../component/Banner";
import Platform from "../component/Platform";
import Art from "../component/Art";
import Learn from "./Learn";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Banner />
      <Platform />
      <Learn />
      <Art />
    </div>
  );
};

export default Home;
