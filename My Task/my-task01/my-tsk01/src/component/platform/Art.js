import React from "react";


const Art = () => {
  return (
    <div>
      <div className=" text-white">
        <div className=" mt-20 pl-20">
          <h1 className=" text-4xl">Learn about Art History</h1>
        </div>
        <div className=" flex gap-36 ml-20 mr-20 mt-10">
          <div className=" border-b-4 hover:border-b-stone-800 shadow-2xl bg-slate-800 w-[30%] rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/12.jpg" className=" h-52 rounded-t-xl" />
            <h2 className=" pl-8 mt-5 text-slate-300">SHORT COURSE</h2>
            <h1 className=" pl-8 mb-5 text-xl">
              Textiles from the Indian Subcontinent
            </h1>
          </div>
          
          <div className="border-b-4 hover:border-b-stone-800 bg-slate-800 w-[30%] rounded-xl mb-20 hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/13.jpg" className=" h-52 w-full rounded-t-xl" />
            <h2 className="  text-slate-300 pl-8 mt-5">SHORT COURSE</h2>
            <h1 className=" pl-8 pr-7 text-xl">
              Modern & Contemporary Andian art
            </h1>
          </div>
          <div className="border-b-4 hover:border-b-stone-800 bg-slate-800 w-[30%] mb-20 rounded-xl hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/14.jpg" className="h-52 w-full rounded-t-xl" />
            <h2 className="  text-slate-300 pl-8 mt-5">SHORT COURSE</h2>
            <h1 className=" pl-8 text-xl">Encylopedia of Art</h1>
          </div>
        </div>
      </div>
      <div className=" pl-10 pb-5 pr-10">
        <div className=" text-white flex  bg-pink-900">
          <h1 className=" mt-10 mb-10 pl-10 text-2xl font-bold">Subscribe to ART NEWSLETTERS</h1>
          <p className="mt-10 pr-32 pl-52">
            A one-stop docket of all that's happening at MAP, from upcoming
            exhibitions to talks, workshops and events for the following month.
          </p>
          <button className=" m-20 mb-10 mt-10 px-2 py-2 bg-pink-800 hover:bg-pink-700 text-white text-3xl border border-white rounded">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Art;
