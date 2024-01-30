import React from "react";
import Hero from "../component/Hero";
import Product from "../component/Product";
import Banner from "../component/Banner";
import Platform from "../component/Platform";
import Art from "../component/Art";
import Learn from "./Learn";
import Paintings from "./Paintings";
import HandCraft from "./HandCraft";
import Plants from "./Plants";

const Home = ({ handleClick }) => {

  
  return (
    <div>
      <Hero />
      <Product />
      <Learn handleClick={handleClick} />
      <Banner />
      <Paintings handleClick={handleClick}/>
      <Platform />
      <HandCraft handleClick={handleClick}/>
      <Plants/>
      <Art />
    </div>
  );
};

export default Home;
