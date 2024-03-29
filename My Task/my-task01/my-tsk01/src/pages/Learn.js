import React from "react";
import { List } from "../component/Data";

const Learn = ({ item, handleClick }) => {
 

  return (
    <div className=" text-white">
      <div className=" mt-20 pl-20">
        <h1 className=" text-4xl">Learn about Art History</h1>
      </div>
      <div className=" xl:flex lg:flex xl:gap-36 lg:gap-10 xl:ml-20 lg:ml-5 md:ml-20 max-sm:ml-5 max-sm:mr-5 md:mr-20 max-sm:mt-6 xl:mr-20 lg:mr-5  xl:mt-10 lg:mt-10 md:mt-20">
        {List.map((item, index) => (
          <div
            key={index}
            className=" border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[30%] lg:w-[100%]  rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950"
          >
            <img src={item.img} alt="" className=" h-52 w-full rounded-t-xl" />
            <h2 className=" pl-8 mt-5 text-slate-300">{item.title}</h2>
            <h1 className="pl-8">{item.description}</h1>
            <h1 className=" pl-8 text-teal-600 font-bold">{item.Date}</h1>
            <h1 className=" pl-8 pb-5 text-teal-600 font-bold">{item.Price}</h1>

            <button
             onClick={()=>handleClick(item)}
              className=" ml-[6rem] mb-8 border p-2 hover:text-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className=" xl:pl-36 lg:pl-36 md:pl-20 max-sm:pl-10 mt-11">
          <h1 className=" text-4xl">Explore more</h1>
        </div>

        <div className="xl:flex lg:flex md:flex xl:pl-36 lg:pl-20 md:pl-10 max-sm:pl-10 max-sm:pr-10 md:pr-10 lg:pr-20 xl:gap-10 lg:gap-10 md:gap-10 xl:mt-20 lg:mt-20 md:mt-20 ">
          <div className=" xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10  bg-yellow-600">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">
              Exhibition
            </h1>
          </div>
          <div className="  xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10  bg-purple-900">
            <h1 className=" hover:underline text-2xl font-bold xl:mt-20 lg:mt-20 md:mt-20 max-sm:mt-5 pl-10 md:pl-5">
              The Collection
            </h1>
          </div>
          <div className="  xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10 bg-teal-600">
            <h1 className=" hover:underline text-2xl font-bold xl:mt-20 lg:mt-20 md:mt-20 max-sm:mt-5 pl-10">
              About MAP
            </h1>
          </div>
        </div>

        <div className="xl:flex lg:flex md:flex xl:pl-36 lg:pl-20 md:pl-10 md:pr-10 lg:pr-20 max-sm:pl-10 max-sm:pr-10  gap-10 xl:mt-10 lg:mt-10 md:mt-10">
          <div className="  xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10 bg-red-600 mb-4">
            <h1 className=" hover:underline text-2xl font-bold xl:mt-20 lg:mt-20 md:mt-20 max-sm:mt-5 pl-10">
              Read
            </h1>
          </div>
          <div className="  xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10 bg-pink-700">
            <h1 className=" hover:underline text-2xl font-bold xl:mt-20 lg:mt-20 md:mt-20 max-sm:mt-5 pl-10">
              Watch
            </h1>
          </div>
          <div className=" xl:w-96 lg:w-96 md:w-96 xl:h-40 lg:h-40 md:h-40 max-sm:h-10 bg-yellow-600">
            <h1 className=" hover:underline text-2xl font-bold xl:mt-20 lg:mt-20 md:mt-20 max-sm:mt-5 pl-10">
              Learn
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
