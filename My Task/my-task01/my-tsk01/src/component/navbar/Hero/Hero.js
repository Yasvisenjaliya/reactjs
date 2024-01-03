import React from "react";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    imgs: "/assets/hcraft.jpg",
    title: "Upto 50% off on all Handcrafts ",
    description:
      "Cutlery. Pots. Paper clips. Paintings. Coffee beans. If we missed anything, you can probably sell that too. Create your ecommerce website using Zoho Commerce.",
  },
  {
    id: 2,
    imgs: "/assets/books.jpg",
    title: "30% off on all books",
    description:
      "Cutlery. Pots. Paper clips. Paintings. Coffee beans. If we missed anything, you can probably sell that too. Create your ecommerce website using Zoho Commerce.",
  },
  {
    id: 3,
    imgs: "/assets/paint.jpg",
    title: "70% off on all Paintings",
    description:
      "Cutlery. Pots. Paper clips. Paintings. Coffee beans. If we missed anything, you can probably sell that too. Create your ecommerce website using Zoho Commerce.",
  },
  {
    id: 4,
    imgs: "/assets/plants.jpg",
    title: "Upto 30% off on all Plants",
    description:
      "Cutlery. Pots. Paper clips. Paintings. Coffee beans. If we missed anything, you can probably sell that too. Create your ecommerce website using Zoho Commerce.",
  },
];

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
      
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray flex justify-center items-center dark:bg-gray-600 dark:text-white duration-200 ">
      {/* bacground */}
      <div className="h-[700px] w-[700px] bg-slate-500 absolute lg:right-3/4 sm:right-1/2 rounded-3xl rotate-45 -z-[8] "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold lg:pl-36"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm lg:pl-36"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-red-900 to-orange-800 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full lg:ml-36"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className=" order-1 px-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.imgs}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[550px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;