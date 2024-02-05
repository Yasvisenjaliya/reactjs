import React, { useState } from "react";
import { Data } from "../component/Data";

const Products = ({ handleClick }) => {
  const [data, setData] = useState(Data);

  const filterResult = (catItem) => {
    const result = Data.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <div className="text-white mt-4">
       <div className=" flex justify-center xl:gap-32 lg:gap-12 md:gap-8 sm:gap-10 max-sm:gap-2 ">
       <div onClick={() => setData(Data)}>
          <div className="bg-slate-700 xl:w-20 lg:w-16 md:w-14 sm:w-10 max-sm:w-6 max-sm:h-7 rounded-full xl:h-14 h-10 ">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-sm sm:text-xl text-center">All</h1>
          </div>
        </div>
        <div onClick={() => filterResult("Paint")}>
          <div className="bg-slate-700 xl:w-44 lg:w-40 md:w-28 sm:w-20 max-sm:w-20 max-sm:h-7 rounded-full xl:h-14 ">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-sm text-center">Paintings</h1>
          </div>
        </div>
        <div onClick={() => filterResult("hand")}>
          <div className="bg-slate-700 xl:w-48 lg:w-40 md:w-32 sm:w-24 max-sm:w-20 max-sm:h-7 rounded-full xl:h-14">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-sm text-center">HandCraft</h1>
          </div>
        </div>
        <div onClick={() => filterResult("books")}>
          <div className="bg-slate-700 xl:w-32 lg:w-28 md:w-20 sm:w-20 max-sm:w-12 max-sm:h-7 rounded-full xl:h-14 ">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-sm text-center">Books</h1>
          </div>
        </div>
        <div onClick={() => filterResult("plants")}>
          <div className="bg-slate-700 xl:w-32 lg:w-28 md:w-20 sm:w-20 max-sm:w-12 max-sm:h-7 rounded-full xl:h-14 ">
            <h1 className="xl:text-4xl lg:text-3xl md:text-2xl max-sm:text-sm text-center">Plants</h1>
          </div>
        </div>
       </div>
       <div className="  xl:grid xl:grid-cols-3 md:w-[100%] lg:w-[95%] sm:grid sm:grid-cols-2 lg:gap-10 sm:gap-5 xl:ml-20 lg:ml-5 md:ml-10 sm:ml-10 sm:mr-0 max-sm:ml-5 max-sm:mr-5 md:mr-10 max-sm:mt-6 xl:mr-0 lg:mr-5  xl:mt-10 lg:mt-10 md:mt-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className=" border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[80%] lg:w-[100%] sm:w-[80%] rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950"
          >
            <div>
              <img src={item.img} className=" h-52 w-full rounded-t-xl" />
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
    </>
  );
};

export default Products;
