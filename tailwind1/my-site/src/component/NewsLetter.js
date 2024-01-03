import React from "react";

function NewsLetter() {
  return (
    <div className=" bg-gray-800 p-4">
      <div className="max-w-[1240px] mx-auto  md:flex justify-between py-[50px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to learn latest I.T skills?</h1>
          <span>
            sign up to our NewsLetter and stay up to date.
          </span>
        </div>
        <div className="m-2">
            <input type="text" className=" rounded mb-2 p-3 mr-2 text-slate-600"/>
            <button className='bg-black text-white p-3 mt-4 rounded'>Get Started</button>
            <br/>
            <p className="text-white">
                We care bout the protection of your data. Read our <br/><a href="" className="text-black">Privacy Policy.</a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
