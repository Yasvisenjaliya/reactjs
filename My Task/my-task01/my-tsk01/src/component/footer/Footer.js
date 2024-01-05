import React from "react";
import { IoMdMail, IoMdSearch } from "react-icons/io";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#services",
  },
  {
    id: 2,
    name: "Contact US",
    link: "/#services",
  },
  {
    id: 3,
    name: "Security",
    link: "/#services",
  },
  {
    id: 4,
    name: "Compliance",
    link: "/#services",
  },
  {
    id: 5,
    name: "IPR Complaints",
    link: "/#services",
  },
  {
    id: 6,
    name: "Abuse Policy",
    link: "/#services",
  },
  {
    id: 7,
    name: "Anti-spam Policy",
    link: "/#services",
  },
  {
    id: 8,
    name: "Terms of Service",
    link: "/#services",
  },
  {
    id: 9,
    name: "Privacy Policy",
    link: "/#services",
  },
  {
    id: 10,
    name: "Cookie Policy",
    link: "/#services",
  },
  {
    id: 11,
    name: "GDPR Compliance",
    link: "/#services",
  },
];

function Footer() {
  return (
    <>
      <div className=" text-white bg-gray-800">
       <div className=" border border-slate-600">
       <div className="text-white ml-[69rem] flex gap-0 p-2">
            <IoMdMail className=" mt-2.5 w-10 text-blue-200"/>
            <h1 className=" text-xl text-blue-200">artgallery@gmail.com</h1>
        </div>
       </div>
        <div className="relative group hidden sm:block left-96">
          <input
            type="text"
            placeholder="search"
            className="w-[300px] mt-10 sm:w-[50rem] border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
          />
          <button>
            <IoMdSearch className="text-white border border-black  w-9 h-[2.3rem] bg-slate-600 group-hover:text-red-900 absolute top-[2.4rem]" />
          </button>
        </div>
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-1 mt-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <footer className=" text-white p-4 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
