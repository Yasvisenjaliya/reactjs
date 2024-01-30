import React from "react";
import { Paint } from "../component/paintingsData";

const Paintings = ({ handleClick }) => {
  return (
    <div className=" mr-0">
      <div className=" text-white xl:grid grid-cols-3 xl:gap-1 lg:gap-10 xl:ml-28 lg:ml-5 md:ml-20 max-sm:ml-5 max-sm:mr-5 md:mr-20 max-sm:mt-6 xl:mr-10 lg:mr-5  xl:mt-10 lg:mt-10 md:mt-20">
        {Paint.map((item) => (
          <div
            key={item.id}
            className=" border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[80%] lg:w-[100%]  rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950"
          >
            <div>
              <img src={item.img} className=" h-52 w-full rounded-t-xl" />
            </div>
            <div>
              <h1 className="ml-8 mr-2 ">{item.description}</h1>
              <h1 className=" pl-8 text-teal-600 font-bold">Rs - {item.Price} </h1>
              <h1 className=" pl-8  text-slate-300">{item.title} </h1>
            </div>
            <button
             onClick={()=>handleClick(item)}
              className=" ml-[6rem] mb-8 mt-5 border p-2 hover:text-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paintings;
