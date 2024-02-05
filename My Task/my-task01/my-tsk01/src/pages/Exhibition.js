import React from 'react'
import { List } from "../component/Data";

const Exhibition = ({ handleClick }) => {
  return (
    <div className=" text-white mt-40">
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
    </div>
  )
}

export default Exhibition
