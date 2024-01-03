import React from "react";
import "./Ba.css";

const Banner = () => {
  return (
    <div className=" bg-pink-100 sm:mt-16 c-1">
      <div className=" xl:ml-96 sm:ml-44 md:ml-32 flex md:mr-10 xl:mr-56 lg:gap-12 xl:gap-44 ">
        <div>
          <h1 className=" mt-20 xl:text-4xl lg:text-4xl md:text-2xl sm:text-3xl font-bold c-2">
            No-code Website Design
          </h1>
          <p className=" xl:text-2xl sm:text-xl md:mt-4 xl:mt-9 lg:mt-9 c-3">
            Choose a template and use the drag-and-drop site builder to add
            media and content to your pre-styled store. Create beautiful,
            modern-looking stores with parallax images and videos.
          </p>
        </div>
        <div>
          <img
            src="./assets/image7.jpg"
            className=" w-[90rem] mr-28 xl:mt-52 md:mt-36 sm:hidden lg:block md:block xl:block c-4"
          />
        </div>
      </div>
      <div className=" xl:ml-72 lg:ml-20 sm:m-28 sm:mt-16 lg:mt-0 md:mt-0 flex xl:mr-56  gap-20 ">
        <div className=" w-[90rem]">
          <img src="./assets/image8.jpg" className="c-4" />
        </div>
        <div className=" w-[50rem] mt-12 sm:hidden lg:block md:block xl:block">
          <img src="./assets/image9.jpg" className="c-4" />
        </div>
      </div>
      <div className=" xl:m-[20rem] sm:m-56 lg:m-[10%] lg:gap-9 xl:flex md:flex lg:flex-row sm:flex-col xl:gap-24 xl:mt-40 sm:mt-20 pb-20 ">
        <div>
          <h1 className=" text-3xl font-bold c-2">Automated Checkout</h1>
          <p className=" text-2xl sm:mt-5 c-3">
            Easily configure store essentials like shipping, taxes, and
            payments.
          </p>
        </div>
        <div>
          <h1 className=" sm:mt-8 lg:mt-0 text-3xl font-bold c-2">Curated Products</h1>
          <p className=" text-2xl sm:mt-5 c-3">
            Create collections of your products and engage better with
            customers.
          </p>
        </div>
        <div>
          <h1 className="sm:mt-8 lg:mt-0 text-3xl font-bold c-2">
            Hassle-free Hosting
          </h1>
          <p className=" text-2xl sm:mt-5  c-3">
            Opt for a free subdomain, map an existing domain, or purchase a new
            domain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
