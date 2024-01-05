import React from "react";
import "./pd.css"
const Product = () => {
  return (
    <div className=" text-white">
      <div>
        <h1 className=" lg:text-5xl md:text-5xl xl:text-5xl max-sm:text-3xl sm:text-3xl font-bold xl:pl-[30%] lg:pl-[30%] md:pl-[30%] max-sm:pl-[5%] xl:pr-[30%] lg:pr-[30%] md:pr-[30%] max-sm:pr-[5%] mt-16 ">
          Ecommerce builder for small and medium businesses
        </h1>
        <p className="xl:pl-[30%] lg:pl-[30%] md:pl-[30%] max-sm:pl-[5%] xl:pr-[30%] lg:pr-[30%] md:pr-[30%] max-sm:pr-[5%] mt-10 text-2xl xl:text-2xl sm:text-xl ">
          When you've set your mind on starting an ecommerce business, what you
          need is an ecommerce platform that is simple to pick up and powerful
          enough to meet all your requirements.
        </p>
      </div>
      <div className=" xl:ml-80 max-sm:ml-5 mt-32 xl:flex lg:ml-52  md:flex-row lg:flex sm:ml-16 sm:flex-col">
        <div>
          <img src="./assets/image1.jpg"  className="xl:w-[60%] md:w-96 animate-bounce" />
          <h1 className=" xl:text-3xl sm:text-2xl mt-5 font-bold ani-h1">Create Your Store</h1>
          <p className=" xl:text-2xl sm:text-xl mt-5  md:mr-7 lg:mr-20 xl:mr-36 sm:mr-8 ani-p">
            Using Zoho Commerce, you can easily create your ecommerce website
            right from your browser.
          </p>
        </div>
        <div>
          <img src="./assets/image2.jpg" className=" xl:w-[60%] xl:h-[42.5%] lg:h-[48%] sm:h-[50%] animate-bounce" />
          <h1 className=" xl:text-3xl  sm:text-2xl mt-5  font-bold ani-h1">From Products to Orders</h1>
          <p className="xl:text-2xl sm:text-xl mt-5 md:mr-7 lg:mr-32 xl:mr-56 ani-p">
            Add your product catalog, define your shipping and tax rules, choose
            your payment methods, and start accepting orders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
