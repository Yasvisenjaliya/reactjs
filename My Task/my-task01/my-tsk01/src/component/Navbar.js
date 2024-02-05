
import React, { useState } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = ({ size, setShow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md xl:bg-white lg:bg-white md:bg-white sm:bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div>
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
            <div className="flex justify-between items-center lg:mr-10 gap-4">
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-red-300 absolute top-1/2 -translate-y-1/2 ml-40" />
              </div>
              <div className="flex">

             
              <Link to="/SignUp">
                <div className=" border-b border-black hover:text-red-200">Sign Up</div>
              </Link>

              <Link to="/SignIn">
                <div className=" border-b ml-7 border-black hover:text-red-200">Sign In</div>
              </Link>
              

              <div>
              <Link to="/cart">
                <div
                  onClick={() => setShow(false)}
                  className=" xl:ml-10 flex lg:mr-5 text-2xl"
                >
                  <FaShoppingCart />
                  <span className=" text-sm">{size}</span>
                </div>
                
                
                 
              </Link>
              </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}

      {/* <nav data-aos="zoom-in" className="flex justify-center sm:bg-slate-200">
        <ul className=" flex items-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 max-sm:gap-2 max-sm:grid grid-cols-3 font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/paintings">Paintings</Link>
          </li>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/handcraft">HandCraft</Link>
          </li>
          <li>
            <Link to="/plant">Plant</Link>
          </li>
          <li>
            <Link to="/exhibition">Exhibition</Link>
          </li>
        </ul>
      </nav> */}

      <nav
        data-aos="zoom-in"
        className="flex justify-center  sm:bg-slate-200  "
      >
        <div className=" mx-auto px-8 sm:px-6 lg:px-8">
          <div className=" h-10">
            <div className="flex-shrink-0">{/* Your logo or branding */}</div>
            <div className="hidden sm:block  ">
              <ul className="flex space-x-6 font-semibold">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/exhibition">Exhibition</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
            {/* menu for small screens */}

            <div
              onClick={toggleMenu}
              className="flex sm:hidden text-2xl ml-[15rem]"
            >
              <IoMdMenu className="block h-6 menu text-slate-300 " />
            </div>
          </div>
        </div>
        {/* Responsive dropdown menu */}
        {isMenuOpen && (
          <div className="sm:hidden max-sm:w-40 ">
            <ul
              className={
                isMenuOpen
                  ? "nav-menu active"
                  : "nav-menu pt-2 pb-3 space-y-1 font-semibold"
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/paintings">Paintings</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/handcraft">HandCraft</Link>
              </li>
              <li>
                <Link to="/plant">Plant</Link>
              </li>
              <li>
                <Link to="/exhibition">Exhibition</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
