import React from "react";

const Learn = () => {
  return (
    <div className=" text-white">
      <div className=" mt-20 pl-20">
        <h1 className=" text-4xl">Learn about Art History</h1>
      </div>
      <div className=" flex gap-36 ml-20 mr-20 mt-10">
        <div className=" shadow-2xl bg-slate-800 w-[30%] rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950">
          <img src="./assets/15.jpg" className=" h-52 rounded-t-xl" />
          <h2 className=" pl-8 mt-5 text-slate-300">EXHIBITION | BENGALURU</h2>
          <h1 className=" pl-8">VISIBLE/INVISIBLE:Representation of...</h1>
          <h1 className=" pl-8 pb text-teal-600 font-bold">
            Feb 18,2023-Dec 1,2025
          </h1>
        </div>
        <div className=" bg-slate-800 w-[30%] rounded-xl mb-20 hover:scale-105 duration-150 hover:bg-cyan-950">
          <img src="./assets/16.jpg" className=" h-52 w-full rounded-t-xl" />
          <h2 className="  text-slate-300 pl-8 mt-5">EXHIBITION | BENGALURU</h2>
          <h1 className=" pl-8">Book of Gold:The Kanchana Chitra...</h1>
          <h1 className=" pl-8 pb-5 text-teal-600 font-bold">
            sep 16,2023-Mar 8,2024
          </h1>
        </div>
        <div className=" bg-slate-800 w-[30%] mb-20 rounded-xl hover:scale-105 duration-150 hover:bg-cyan-950">
          <img src="./assets/17.jpg" className="h-52 w-full rounded-t-xl" />
          <h2 className="  text-slate-300 pl-8 mt-5">EXHIBITION | BENGALURU</h2>
          <h1 className=" pl-8">What The Camera Didn't See</h1>
          <h1 className=" pl-8 pb-5 font-bold text-teal-600">
            Dec 1,2023-Apr 5,2024
          </h1>
        </div>
      </div>


      <div>
        <div className=" pl-36 mt-11">
          <h1 className=" text-4xl">Explore more</h1>
        </div>


        <div className="flex ml-36 gap-10 mt-20">
          <div className=" w-96 h-40 bg-yellow-600">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">Exhibition</h1>
          </div>
          <div className=" w-96 h-40 bg-purple-900">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">The Collection</h1>
          </div>
          <div className=" w-96 h-40 bg-teal-600">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">About MAP</h1>
          </div>
        </div>


        <div className="flex ml-36 gap-10 mt-10">
          <div className=" w-96 h-40 bg-red-600 mb-4">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">Read</h1>
          </div>
          <div className=" w-96 h-40 bg-pink-700">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">Watch</h1>
          </div>
          <div className=" w-96 h-40 bg-yellow-600">
            <h1 className=" hover:underline text-2xl font-bold mt-20 pl-10">Learn</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
