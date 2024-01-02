import React from "react";
import Image1 from "../../img/slide1.jpg"
import Image2 from "../../img/slide2.jpg"
import Image3 from "../../img/slide3.jpg"
import { data } from "jquery";


const ImageList = [
    {
      id: 1,
      img: Image1,
     
    },
    {
      id: 2,
      img: Image2,
      
    },
    {
      id: 3,
      img: Image3,
      
    },
  ];

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>

     <div>
       
            {ImageList.map((data) => (
                 <div className="order-1 sm:order-2">
                 <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                   <img
                     src={data.img}
                     alt=""
                     className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                   />
                 </div>
               </div>
            ))}
       
     </div>
    </div>
  );
};

export default Hero;
