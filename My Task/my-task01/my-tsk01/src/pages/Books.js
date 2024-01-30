import React from "react";
import { books } from "../component/Data";

const Books = ({ handleClick }) => {
  return (
    <div className=" text-white">
      <div className=" mt-10 font-bold text-zinc-200 border-b-2 border-b-neutral-800">
        <h1 className=" text-4xl pl-20 m-2">Books</h1>
      </div>
      <div className="  xl:grid xl:grid-cols-3 sm:grid sm:grid-cols-2 lg:gap-10 sm:gap-5 xl:ml-20 lg:ml-5 md:ml-20 sm:ml-10 sm:mr-0 max-sm:ml-5 max-sm:mr-5 md:mr-20 max-sm:mt-6 xl:mr-0 lg:mr-5  xl:mt-10 lg:mt-10 md:mt-20">
        {books.map((item) => (
          <div
            key={item.id}
            className=" border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[80%] lg:w-[100%] sm:w-[80%] rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950"
          >
            <div>
              <img src={item.img} className="h-60 w-52 xl:ml-20 lg:ml-20 md:ml-20 sm:ml-6 max-sm:ml-9 mb-3 " />
            </div>
            <div>
              <h1 className="ml-8 mr-2 ">{item.description}</h1>
              <h1 className=" pl-8 text-teal-600 font-bold">
                Rs - {item.Price}{" "}
              </h1>
              <h1 className=" pl-8  text-slate-300">{item.title} </h1>
            </div>
            <button
              onClick={() => handleClick(item)}
              className=" ml-[6rem] sm:ml-[5rem] mb-8 mt-5 border p-2 hover:text-red-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
