import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Shop",
    link: "/#services",
  },
  {
    id: 3,
    name: "Blog",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];


const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];

const Navbar = () => {
  return (
    <div
      className=" shadow-md bg-white
     dark:bg-red-900 dark:text-black duration-200
      relative z-40"
    >
      <div className=" bg-slate-100 py-2">
        <div
          className=" container flex
         justify-between items-center"
        >
          <div>
            <h1>Ecommerce</h1>
          </div>
          <div
            className="flex justify-between
           items-center gap-4"
          >
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all
                duration-300 rounded-full border 
               border-gray-600 px-2 py-1
               focus:border-1 focus:border-red-800
                dark:border-red-700
                 dark:bg-gray-600"
              />
              <IoMdSearch
                className=" text-gray-500
               group-hover:text-red-800 absolute
                top1/2 -translate-y-6 right-3"
              />
            </div>
          </div>
          <button
            onClick={() => alert("Ordering not available yet")}
            className=" bg-gradient-to-r from-slate-500
            to-slate-700 transition-all duration-200
           text-gray-300 py-1 px-4 rounded-full flex
            items-center gap-3 group"
          >
            <span
              className="group-hover:block
             hidden transition-all duration-200"
            >
              Order
            </span>
            <FaCartShopping />
          </button>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <ul
          className=" sm:flex hidden items-center
         gap-4"
        >
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className=" inline-block px-4
                     hover:text-red-400 duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center
                 gap-[2px] py-2"
            >
              Trending
              <span>
                <FaCaretDown 
                 className=" transition-all
                 duration-200
                  group-hover:rotate-180"
                />
              </span>
            </a>
            <div className=" absolute z-[9999] hidden
             group-hover:block w-[150px] rounded-md
              bg-white p-2 text-black ">
                <ul>
                    {DropdownLinks.map((data) => (
                        <li key={data.id}>
                            <a
                             href={data.link}
                             className=" inline-block w-full
                              rounded-md p-0 hover:bg-slate-100"
                             >
                                {data.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
