import React from "react";


const Art = () => {
  return (
    <div>
      <div className=" text-white">
        <div className=" mt-20 pl-20">
          <h1 className=" text-4xl">Learn about Art History</h1>
        </div>
        <div className=" xl:flex lg:flex  xl:gap-36 lg:gap-10 xl:ml-20 lg:ml-5 md:ml-20 max-sm:ml-10 xl:mr-20 lg:mr-5 md:mr-20 max-sm:mr-10 mt-10">
          <div className=" border-b-4 hover:border-b-stone-800 shadow-2xl bg-slate-800 xl:w-[30%] lg:w-[30%] rounded-xl mb-20  hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/12.jpg" className=" h-52 w-full rounded-t-xl" />
            <h2 className=" pl-8 mt-5 text-slate-300">SHORT COURSE</h2>
            <h1 className=" pl-8 mb-5 text-xl">
              Textiles from the Indian Subcontinent
            </h1>
          </div>
          
          <div className="border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[30%] lg:w-[30%] rounded-xl mb-20 hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/13.jpg" className=" h-52 w-full rounded-t-xl" />
            <h2 className="  text-slate-300 pl-8 mt-5">SHORT COURSE</h2>
            <h1 className=" pl-8 pr-7 text-xl">
              Modern & Contemporary Andian art
            </h1>
          </div>
          <div className="border-b-4 hover:border-b-stone-800 bg-slate-800 xl:w-[30%] lg:w-[30%] mb-20 rounded-xl hover:scale-105 duration-150 hover:bg-cyan-950">
            <img src="./assets/14.jpg" className="h-52 w-full rounded-t-xl" />
            <h2 className="  text-slate-300 pl-8 mt-5">SHORT COURSE</h2>
            <h1 className=" pl-8 text-xl">Encylopedia of Art</h1>
          </div>
        </div>
      </div>
      <div className=" xl:pl-10 lg:pl-5 pb-5 lg:pr-5 xl:pr-10">
        <div className=" text-white xl:flex lg:flex md:flex  bg-pink-900">
          <h1 className=" xl:mt-10 lg:mt-10 md:mt-10 mb-10 pl-10 text-2xl font-bold">Subscribe to ART NEWSLETTERS</h1>
          <p className="xl:mt-10 lg:mt-10 md:mt-10  xl:pr-32 xl:pl-52 lg:pl-36 md:pl-20 max-sm:pl-5 max-sm:pr-5">
            A one-stop docket of all that's happening at MAP, from upcoming
            exhibitions to talks, workshops and events for the following month.
          </p>
          <button className=" xl:m-20 lg:m-20 md:m-20  mb-10 xl:mt-12 lg:mt-12 md:mt-12 max-sm:mt-5 max-sm:ml-40 px-2 h-10 bg-pink-800 hover:bg-pink-700 text-white xl:text-3xl lg:text-2xl border border-white rounded">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Art;
