import React from "react";
import Typed from 'react-typed';

function Banner() {
  return (
    <div className="bg-gray-800 w-full h-[50%] py-[100px] font-bold">
      <div className="max-w-[1240px] my-[100px]  mx-auto text-center">
        <div className="text-3xl md:text-3xl mt-4">Learn with us</div>
        <h2 className="text-white text-5xl md:text-[70px] mt-4">
          Grow with us.
        </h2>
        <div className="text-[20px] md:text-[50px] text-white mt-4">
            Learn
            <Typed
            className="pl-3"
            strings={['Web Development', 'Digital Marketing']}
            typeSpeed={10}
            backSpeed={50}
            loop={true}
            />
        </div>
        <button className='bg-black text-white p-3 mt-4 rounded'>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
