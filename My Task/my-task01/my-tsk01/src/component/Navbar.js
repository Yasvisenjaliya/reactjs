import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ size, setShow }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className=" bg-slate-400 py-2">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <div
              onClick={() => setShow(true)}
              className=" w-10 text-black font-extrabold"
            >
              <h1 className="pl-10">
                ART
                <br />
                Gallery
              </h1>
            </div>
          </Link>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-red-300 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <Link to="/cart">
              <div onClick={() => setShow(false)} className=" ml-10 text-2xl">
                <FaShoppingCart />
                <span>{size}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* lower navbar */}

      <nav data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link  to="/paintings">Paintings</Link>
          </li>
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">HandCraft</Link>
          </li>
          <li>
            <Link to="/plant">Plant</Link>
          </li>
          <li>
            <Link to="/exhibition">Exhibition</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
